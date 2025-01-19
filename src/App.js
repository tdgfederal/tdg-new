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
import PublicSector from "./pages/PublicSector";
import Commercial from "./pages/Commercial";
import Health from "./pages/Health";
import WhoWeAre from "./pages/WhoWeAre";
import Leadership from "./pages/Leadership";
import WhyUs from "./pages/WhyUs";
import JoinTDG from "./pages/JoinTDG";
import ContactUs from "./pages/ContactUs";
import Devops from "./pages/blogs/Devops";
import Cloud from "./pages/blogs/Cloud";
import Risk from "./pages/blogs/Risk";
import JDevops from "./pages/job-post/Devops";
import JCloud from "./pages/job-post/Cloud";
import Case1 from "./pages/case-study/Case1";
import Case2 from "./pages/case-study/Case2";
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
        <Route path="/public-sector" element={<PublicSector/>}/>
        <Route path="/commercial" element={<Commercial/>}/>
        <Route path="/health" element={<Health/>}/>
        <Route path="/who-we-are" element={<WhoWeAre/>}/>
        <Route path="/leadership" element={<Leadership/>}/>
        <Route path="/why-us" element={<WhyUs/>}/>
        <Route path="/join-tdg" element={<JoinTDG/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/blogs/devops" element={<Devops/>}/>
        <Route path="/blogs/cloud" element={<Cloud/>}/>
        <Route path="/blogs/projects/risk-management" element={<Risk/>}/>
        <Route path="/jobs/devops" element={<JDevops/>}/>
        <Route path="/jobs/cloud" element={<JCloud/>}/>
        <Route path="/case-study/1" element={<Case1/>}/>
        <Route path="/case-study/2" element={<Case2/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
