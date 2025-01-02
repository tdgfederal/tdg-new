import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContractVehicles from "./pages/ContractVehicles";
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
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
