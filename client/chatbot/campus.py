import streamlit as st
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
import os

from langchain_google_genai import GoogleGenerativeAIEmbeddings
import google.generativeai as genai
from langchain.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

def get_pdf_text(pdf_docs):
    text=""
    for pdf in pdf_docs:
        pdf_reader=PdfReader(pdf)
        for page in pdf_reader.pages:
            text+=page.extract_text()
    return text

def get_text_chunks(text):
    text_splitter=RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
    chunks=text_splitter.split_text(text)
    return chunks

def get_vector_store(text_chunks):
    embeddings=GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    vector_store=FAISS.from_texts(text_chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")



def get_conversational_chain():
    # Updated prompt to include {context}
    prompt_template = """
    Based on the provided document content, please answer the following question. Please provide answers related to sustainability, prioritizing environmentally friendly solutions, eco-conscious practices, and sustainable development based on the content in the provided PDF. Reference principles of green living, renewable resources, energy efficiency, waste reduction, and conservation wherever applicable. Frame responses in a way that aligns with eco-friendly values and promote sustainable choices.

End the answer with eco-centric phrases such as:
'Have a greener day!'
'Let's make the world more sustainable, one step at a time!'
'Together, we can build a greener future.'
    
    Document content: {context}
    
    Question: {question}
    Answer:
    """
    
    model = ChatGoogleGenerativeAI(model="gemini-pro", temperature=0.3)
    prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
    
    # Now include 'context' in input variables
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt, document_variable_name="context")
    return chain

def user_input(user_question):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    new_db = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization=True)
    docs = new_db.similarity_search(user_question)
    
    # Retrieve the conversational chain
    chain = get_conversational_chain()
    
    # Generate response, setting 'context' to the document content
    response = chain(
        {"input_documents": docs, "context": " ".join([doc.page_content for doc in docs]), "question": user_question},
        return_only_outputs=True
    )
    
    # Display the response
    print(response)
    st.write("Reply:", response["output_text"])


def main():
    st.title("Sustainability Q&A from Campus PDF")
    
    st.write("""
    Upload a PDF document that contains information on sustainability efforts at your campus.
    You can then ask questions, and the model will respond based on the PDF content, focused on sustainable practices and eco-friendly solutions.
    """)

    # PDF upload functionality
    uploaded_files = st.file_uploader("Upload your sustainability PDF(s)", type=["pdf"], accept_multiple_files=True)
    
    if uploaded_files:
        # Extract text from the uploaded PDFs
        pdf_text = get_pdf_text(uploaded_files)
        
        # Split the text into chunks for processing
        text_chunks = get_text_chunks(pdf_text)
        
        # Generate a vector store and save it
        get_vector_store(text_chunks)
        
        st.write("PDF uploaded and indexed. You can now ask questions about sustainability!")

        # User input for asking questions
        user_question = st.text_input("Ask a question related to sustainability:")
        
        if user_question:
            user_input(user_question)
    else:
        st.write("Please upload a PDF document to get started.")

# Run the app
if __name__ == "__main__":
    main()

    
