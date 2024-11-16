import { useAuth } from "@/context/AuthContext";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <header className="bg-forestGreen text-lightSand">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-lg font-bold text-lightSand">
          <Link to="/" className="text-secondary text-2xl hover:text-leafGreen">
            GreenPath Navigator
          </Link>
        </div>
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-leafGreen">
            Home
          </Link>
          <Link to="/journey" className="hover:text-leafGreen">
          Start your Sustainable Journey
          </Link>
          <Link to="/map" className="hover:text-leafGreen">
            Map
          </Link>
          <Link to="/idea" className="hover:text-leafGreen">
            Ideas
          </Link>
          <Link to="/leaderboard" className="hover:text-leafGreen">
            Leaderboard
          </Link>
          <Link to="/calculateCarbon" className="hover:text-leafGreen">
            Calculate Carbon Foot Print
          </Link>
          <Link to="/model" className="hover:text-leafGreen">
          Model
          </Link>
        </nav>
        {user ? (
          <div className="flex items-center gap-2 capitalize">
            <p>{user.email.split("@")[0]}</p>
            <button onClick={logout}>
              <LogOut size={"1.1rem"} />
            </button>
          </div>
        ) : (
          <Link to="/login">
            <Button
              variant="ghost"
              className="ml-4 bg-skyBlue text-lightSand hover:bg-leafGreen"
            >
              Login
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
