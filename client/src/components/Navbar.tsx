import { Button } from "./ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
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
        </nav>
        <Link to="/login">
      <Button
        variant="ghost"
        className="ml-4 bg-skyBlue text-lightSand hover:bg-leafGreen"
      >
        Login
      </Button>
    </Link>
      </div>
    </header>
  );
};

export default Navbar;