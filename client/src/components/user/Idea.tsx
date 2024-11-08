export interface Idea {
    _id: string;
    title: string;
    description: string;
    submittedBy: string;
    approved: boolean;
    votes: string[];
    pointsAwarded: boolean;
  }
  
  export interface User {
    _id: string;
    name: string;
    email: string;
    points: number;
  }

  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import { Button } from '../ui/button';
  import { Input } from '../ui/input';
  import { Card, CardContent, CardFooter } from '../ui/card';
  import { Textarea } from '../ui/textarea';
  
  const IdeasPage: React.FC = () => {
    const [ideas, setIdeas] = useState<Idea[]>([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [userId] = useState('exampleUserId');
  
    useEffect(() => {
      const fetchIdeas = async () => {
        const response = await axios.get<Idea[]>('/api/ideas');
        setIdeas(response.data.filter((idea) => idea.approved));
      };
      fetchIdeas();
    }, []);
  
    // Submit a new idea
    const submitIdea = async () => {
      await axios.post('/api/ideas/submit', { title, description, userId });
      setTitle('');
      setDescription('');
      alert('Idea submitted for approval!');
    };
  
    // Vote on an idea
    const voteOnIdea = async (id: string) => {
      await axios.post(`/api/ideas/vote/${id}`, { userId });
      alert('Voted successfully!');
    };
  
    return (
      <div className="p-6 max-w-4xl mx-auto">
        {/* Banner Image */}
        <div
          className="w-full h-40 bg-skyBlue rounded-lg mb-6 flex items-center justify-center text-white text-3xl font-bold"
          style={{
            backgroundImage: 'url("/bg1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          🌿 Join the Green Path Initiative
        </div>
  
        <h1 className="text-3xl font-bold mb-4 text-forestGreen">Submit Your Sustainability Idea</h1>
  
        <Card className="mb-6 border border-mossGreen shadow-md">
          <CardContent className="bg-lightSand p-6 rounded-t-lg">
            <Input
              placeholder="Idea Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-4 border-mossGreen placeholder-leafGreen"
            />
            <Textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mb-4 border-mossGreen placeholder-leafGreen"
            />
          </CardContent>
          <CardFooter className="flex justify-end p-4 bg-lightSand">
            <Button onClick={submitIdea} className="bg-forestGreen hover:bg-leafGreen text-white">
              Submit Idea
            </Button>
          </CardFooter>
        </Card>
  
        <h2 className="text-2xl font-bold mb-4 text-earthBrown">Approved Ideas</h2>
        <ul className="space-y-4">
          {ideas.map((idea) => (
            <Card key={idea._id} className="p-4 flex justify-between items-center border-mossGreen shadow-sm">
              <CardContent className="w-full">
                <h3 className="font-semibold text-leafGreen">{idea.title}</h3>
                <p className="text-earthBrown">{idea.description}</p>
              </CardContent>
              <Button onClick={() => voteOnIdea(idea._id)} className="bg-skyBlue text-white">
                Vote
              </Button>
            </Card>
          ))}
        </ul>
      </div>
    );
  };
  
  export default IdeasPage;
  