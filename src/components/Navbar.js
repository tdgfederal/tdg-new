import React, { useState } from "react";
import "../assets/styles/Navbar.css";
import logo from "../assets/images/logoNew.png";
import logoCol from "../assets/images/flogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import Contact from "../pages/Contact";

const Navbar = () => {
  const nav = useNavigate();
  const [cont, setCont] = useState(false);
  const [click, setClick] = useState(false);

  return (
    <section id="nav-tdg" className="navbar-section">
      {cont ? <Contact setCont={setCont} /> : ""}
      {click ? (
        <div className="navbar-col">
          <div className="nav-top-col d-flex align-items-center my-3">
            <img
              src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/TDG-logo-dark.png?w=924&ssl=1"
              height={130}
              style={{
                marginRight: "-33px",
                paddingTop: "5px",
              }}
              alt=""
            />
            <div
              className="industries"
              style={{
                marginLeft: "30px",
                fontSize: "1.3rem",
                color: "white",
                fontWeight: "600",
                width: "210px",
                lineHeight: "23px",
                borderLeft: "1px solid white",
                height: "100px",
                paddingLeft: "20px",
                paddingTop: "25px",
              }}
            >
              Efficiency Through Simplicity
            </div>
          </div>
          <hr style={{ color: "grey" }} />
          <nav className="nav-main navbar navbar-expand-lg">
            <div
              className={`collapse navbar-collapse ${click ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
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
                      <a class="dropdown-item" href="/who-we-are">
                        Who We Are
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/leadership">
                        Leadership
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/why-us">
                        Why Us
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/join-tdg">
                        Join TDG
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown nav-drop-w">
                  <a
                    class="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Industries
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="/public-sector">
                        Public Sector
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/commercial">
                        Commercial
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/health">
                        Health
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown nav-drop-w">
                  <a
                    class="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Capabilities
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a
                        class="dropdown-item"
                        href="/program-project-management"
                      >
                        Program & Project Management
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="/information-technology-cloud-solutions"
                      >
                        Information Technology and Cloud Solutions
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/download-capabilities">
                        Download Capability Statement
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contract-vehicles">
                    Contract Vehicles
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/scoop">
                    Scoop
                  </a>
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
          </nav>
          <button className="cross-nav" onClick={() => setClick(false)}>
            x
          </button>
        </div>
      ) : (
        ""
      )}
      <nav className="nav-main navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img className="logo-navbar-lg" src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            // data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setClick(!click)}
          >
            <span className="" style={{ color: "grey", fontSize: "30px" }}>
              <RxHamburgerMenu />
            </span>
          </button>
          <div
            className={`collapse navbar-collapse ${click ? "show" : ""}`}
            id="navbarSupportedContent"
          >
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
