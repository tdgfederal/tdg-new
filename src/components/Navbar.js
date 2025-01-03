import React, { useState } from "react";
import "../assets/styles/Navbar.css";
import logo from "../assets/images/logoNew.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import Contact from "../pages/Contact";

const Navbar = () => {
  const nav = useNavigate();
  const [cont, setCont] = useState(false);

  return (
    <section id="nav-tdg" className="navbar-section">
      {cont?<Contact setCont={setCont}/>:""}
      <nav className="nav-main navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img className="logo-navbar-lg" src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="" style={{ color: "grey", fontSize: "30px" }}>
              <RxHamburgerMenu />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown nav-drop-w">
                <div
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </div>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to={"/who-we-are"}>
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/leadership"}>
                      Leadership
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/why-us"}>
                      Why Us
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/join-tdg"}>
                      Join TDG
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown nav-drop-w">
                <Link
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Industries
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to={"/public-sector"}>
                      Public Sector
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/commercial"}>
                      Commercial
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/health"}>
                      Health
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown nav-drop-w">
                <Link
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Capabilities
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      class="dropdown-item"
                      to={"/program-project-management"}
                    >
                      Program & Project Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item"
                      to={"/information-technology-cloud-solutions"}
                    >
                      Information Technology and Cloud Solutions
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/download-capabilities"}>
                      Download Capability Statement
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contract-vehicles"}>
                  Contract Vehicles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/scoop"}>
                  Scoop
                </Link>
              </li>
            </ul>
            <button
              className="nav-button btn"
              type="submit"
              onClick={() => setCont(true)}
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
