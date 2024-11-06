import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import LeaderBoardPage from './pages/LeaderBoardPage';
import CarbonFootprintPage from './pages/CarbonFootprintPage';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
  return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-6">
          {/* Define routes for your app */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/leaderboard" element={<LeaderBoardPage />} />
            <Route path="/calculateCarbon" element={<CarbonFootprintPage/>} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;
