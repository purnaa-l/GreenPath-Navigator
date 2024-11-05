import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-6">
          {/* Page content goes here */}
          <LandingPage/>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
