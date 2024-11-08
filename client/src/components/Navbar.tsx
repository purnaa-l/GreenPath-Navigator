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
          <Link to="/about" className="hover:text-leafGreen">
            About
          </Link>
          <Link to="/features" className="hover:text-leafGreen">
            Features
          </Link>
          <Link to="/Leaderboard" className="hover:text-leafGreen">
            Leaderboard
          </Link>
          <Link to="/contact" className="hover:text-leafGreen">
            Contact
          </Link>
        </nav>
        
        <Button variant="ghost" className="ml-4 bg-skyBlue text-lightSand hover:bg-leafGreen">Sign Up</Button>
      </div>
    </header>
  );
};

export default Navbar;