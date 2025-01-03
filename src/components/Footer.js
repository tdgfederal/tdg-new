import "../assets/styles/Footer.css";
import React, { useState, useEffect, useRef } from "react";
import "../assets/styles/Navbar.css";
import { GoArrowUpRight } from "react-icons/go";
import logo from "../assets/images/flogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { TfiLinkedin } from "react-icons/tfi";

const Footer = () => {
  const nav = useNavigate();

  return (
    <div className="footer">
      <section id="nav-tdg" className="navbar-section">
        <nav
          className="nav-main navbar navbar-expand-lg"
          style={{ borderBottom: "1px solid #FFFFFF30", paddingBottom: "50px" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
              <img className="footer-imgg" src={logo} alt="" />
            </Link>
            <div>
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ color: "white" }}
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
                    style={{ backgroundColor: "#641097", color: "white" }}
                  >
                    <li>
                      <Link class="dropdown-item di" to={"/"}>
                        Who We Are
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item di" to={"/"}>
                        Leadership
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item di" to={"/"}>
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
                    style={{ backgroundColor: "#641097", color: "white" }}
                  >
                    <li>
                      <Link class="dropdown-item di" to={"/"}>
                        Public Sector
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item di" to={"/"}>
                        Commercial
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item di" to={"/"}>
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
                    style={{ backgroundColor: "#641097", color: "white" }}
                  >
                    <li>
                      <Link class="dropdown-item di" to={"/"}>
                        Program & Project Management
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item di" to={"/"}>
                        Information Technology and Cloud Solutions
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item di" to={"/"}>
                        Download Capability Statement
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ color: "white" }}
                    to={"/blog"}
                  >
                    Contract Vehicles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ color: "white" }}
                    to={"/career"}
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
