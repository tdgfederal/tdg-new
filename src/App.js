import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContractVehicles from "./pages/ContractVehicles";
import ProgramProjectManagement from "./pages/ProgramProjectManagement";
import InformationTechnologyCloudSolutions from "./pages/InformationTechnologyCloudSolutions";
import DownloadCapabilities from "./pages/DownloadCapabilities";
import Scoop from "./pages/Scoop";
function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contract-vehicles" element={<ContractVehicles/>}/>
        <Route path="/scoop" element={<Scoop/>}/>
        <Route path="/program-project-management" element={<ProgramProjectManagement/>}/>
        <Route path="/information-technology-cloud-solutions" element={<InformationTechnologyCloudSolutions/>}/>
        <Route path="/download-capabilities" element={<DownloadCapabilities/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
