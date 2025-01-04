import "../assets/styles/Footer.css";
import React, { useState } from "react";
import "../assets/styles/Navbar.css";
import logo from "../assets/images/flogo.png";
import { Link, useLocation } from "react-router-dom";
import { TfiLinkedin } from "react-icons/tfi";

const Footer = () => {
  const loc = useLocation();
  const path = loc.pathname;

  return (
    <div className="footer">
      <section id="nav-tdg" className="navbar-section">
        <nav
          className="nav-main navbar navbar-expand-sm" id="footer-nav-ex"
          style={{ borderBottom: "1px solid #FFFFFF30", paddingBottom: "50px" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
              <img className="footer-imgg" src={logo} alt="" />
            </Link>
            <div className="footer-ww">
              <ul className="navbar-nav mx-auto" style={{flexWrap:"wrap"}}>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ color: path==="/"?"rgba(59, 168, 189, 1)":"white", borderBottom: path==="/"?"2.5px solid rgba(59, 168, 189, 1)":"" }}
                    to={"/"}
                  >
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
                    style={{ color: "white" }}
                  >
                    About Us
                  </div>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    style={{ backgroundColor: "", color: "white" }}
                  >
                    <li>
                      <Link class="dropdown-item di" to={"/who-we-are"}>
                        Who We Are
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item di" to={"/leadership"}>
                        Leadership
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item di" to={"/why-us"}>
                        Why Us
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item di" to={"/"}>
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
                    style={{ color: "white" }}
                  >
                    Industries
                  </Link>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    
                  >
                    <li>
                      <Link class="dropdown-item di" to={"/public-sector"}>
                        Public Sector
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item di" to={"/commercial"}>
                        Commercial
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item di" to={"/health"}>
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
                    style={{ color: "white" }}
                  >
                    Capabilities
                  </Link>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    
                  >
                    <li>
                      <Link class="dropdown-item di" to={"/program-project-management"}>
                        Program & Project Management
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item di" to={"/information-technology-cloud-solutions"}>
                        Information Technology and Cloud Solutions
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item di" to={"/download-capabilities"}>
                        Download Capability Statement
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ color: path==="/contract-vehicles"?"rgba(59, 168, 189, 1)":"white", borderBottom: path==="/contract-vehicles"?"2.5px solid rgba(59, 168, 189, 1)":"" }}
                    to={"/contract-vehicles"}
                  >
                    Contract Vehicles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ color: path==="/scoop"?"rgba(59, 168, 189, 1)":"white", borderBottom: path==="/scoop"?"2.5px solid rgba(59, 168, 189, 1)":"" }}
                    to={"/scoop"}
                  >
                    Scoop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <div
        className="foot-bottom"
        style={{ textAlign: "center", padding: "40px" }}
      >
        <a
          href="https://www.linkedin.com/company/the-diallo-group-llc/"
          target="_blank"
          style={{
            fontSize: "1rem",
            backgroundColor: "white",
            color: "rgba(48, 33, 110, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "max-content",
            padding: "10px",
            borderRadius: "3px",
            margin: "auto",
          }}
        >
          <TfiLinkedin />
        </a>
        <br />
        <p>
          Inquiries:{" "}
          <span className="fw-bold" style={{ textDecoration: "underline" }}>
            <a className="anch-h" href="mailto:info@thediallogroupllc.com">
              info@thediallogroupllc.com
            </a>
          </span>{" "}
          | Business Dev:{" "}
          <span className="fw-bold" style={{ textDecoration: "underline" }}>
            <a className="anch-h" href="mailto:bd@thediallogroupllc.com">
              bd@thediallogroupllc.com
            </a>
          </span>{" "}
          | Telephone:{" "}
          <span className="fw-bold" style={{ textDecoration: "underline" }}>
            <a href="571-315-2073" className="anch-h">
              571-315-2073
            </a>
          </span>
        </p>
        <br />
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ gap: "50px" }}
        >
          <div className="anch-h">Privacy Policy</div>
          <div
            style={{ height: "40px", background: "white", width: "1px" }}
          ></div>
          <div className="anch-h">Cookie Policy</div>
        </div>
        <br />
        <p style={{ color: "#FFFFFF50", marginBottom: "-20px" }}>
          Copyright © The Diallo Group, LLC | 2024 | All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
