import { Sidebar } from "lucide-react";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import LandingPage from "./pages/LandingPage";

function App() {
  // const [isSidebarExpanded, setIsSidebarExpanded] = useState(true); // State to control sidebar expand/collapse
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Sidebar/>
        <main className="flex-grow container mx-auto p-6">
    
          <LandingPage/>
        </main>
        <Footer />
        {/* <AdminDashboard /> */}
    

      </div>
    </>
  );
}
export default App;

