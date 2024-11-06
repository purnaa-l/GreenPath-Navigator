import { Button } from "./ui/button";
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <header className="bg-forestGreen text-lightSand">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-lg font-bold text-lightSand">
          <Link to="/admin" className="text-secondary text-2xl hover:text-leafGreen">
            GreenPath Admin
          </Link>
        </div>
        <nav className="flex space-x-6">
          <Link to="/admin/dashboard" className="hover:text-leafGreen">
            Dashboard
          </Link>
          <Link to="/admin/leaderboard" className="hover:text-leafGreen">
            Leaderboard
          </Link>
          <Link to="/admin/reports" className="hover:text-leafGreen">
            Reports
          </Link>
          <Link to="/admin/feedback" className="hover:text-leafGreen">
            Feedback
          </Link>
          <Link to="/admin/analytics" className="hover:text-leafGreen">
            Analytics
          </Link>
          
        </nav>
        <Button variant="ghost" className="ml-4 bg-skyBlue text-lightSand hover:bg-leafGreen">
          Log Out
        </Button>
      </div>
    </header>
  );
};

export default AdminNavbar;
