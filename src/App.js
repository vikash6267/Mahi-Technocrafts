import "./App.css";
import Navbar from "./components/common/Navbar";
import Whatsapp from "./components/common/Whatsapp";
import CyberConsultancyPage from "./components/CyberSecurity";
import Loader from "./components/Loader";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="min-h-screen w-screen">
      <Loader />
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/cyber-security" element={<CyberConsultancyPage />} />
      </Routes>

      <div className="fixed bottom-8 md:right-10 right-4">
        <Whatsapp />
      </div>
    </div>
  );
}

export default App;
