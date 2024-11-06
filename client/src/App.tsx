import { Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import LeaderBoardPage from './pages/LeaderBoardPage';

function App() {
  return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-6">
          {/* Define routes for your app */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/leaderboard" element={<LeaderBoardPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;
