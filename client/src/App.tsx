import { Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import CarbonFootprintPage from "./pages/CarbonFootprintPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminNavbar from "./components/AdminNavbar";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");


  return (
    <div className="flex flex-col min-h-screen">
      {isAdminRoute ? <AdminNavbar/> :  <Navbar/>}
      <main className="flex-grow container mx-auto p-6">
        {/* Define routes for your app */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/leaderboard" element={<LeaderBoardPage />} />
          <Route path="/calculateCarbon" element={<CarbonFootprintPage />} />

          <Route path="/admin" element={<AdminDashboard/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;

