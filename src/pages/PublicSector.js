import React from "react";
import "../assets/styles/PublicSector.css";
import { useNavigate } from "react-router-dom";
const PublicSector = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="industries">
        <div className="c1" style={{ margin: "auto", paddingTop: "200px" }}>
          <h1 className="c1-ps" style={{ textAlign: "start" }}>
            PUBLIC SECTOR
          </h1>
          <img
            className="img-c1"
            src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/Public-Sector.png?w=672s"
            alt=""
          />
          <div className="cont-c1">
            <h3 style={{ fontWeight: "600" }}>
              Partnering with the Public Sector to Drive Positive Change
            </h3>
            <p style={{ padding: "15px 0" }}>
              TDG is committed to providing innovative IT solutions that help
              the federal government achieve its mission of serving the American
              people. Our deep understanding of the unique challenges and
              opportunities facing government agencies allows us to deliver
              tailored solutions that address your most pressing needs.
            </p>
            <div className="row button-row" style={{ margin: "0" }}>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <button
                  className="sl-inner-btn"
                  style={{
                    padding: "12px 20px",
                    fontSize: "0.95rem",
                    width: "100%",
                  }}
                  onClick={()=>nav("/download-capabilities")}
                >
                  Capability Statement
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <button
                  className="sl-inner-btn"
                  style={{
                    padding: "12px 20px",
                    fontSize: "0.95rem",
                    width: "100%",
                  }}
                  onClick={()=>nav("/contract-vehicles")}
                >
                  Contract Vehicles
                </button>
              </div>
            </div>
          </div>
          <div className="line"></div>
        </div>
        <br />
        <br />
        <br />
        <div
          className=""
          style={{
            margin: "auto",
            padding: "100px 0",
            background: "rgba(248, 248, 248, 1)",
          }}
        >
          <div className="row psp-row" style={{ margin: "0" }}>
            <div className="col-lg-6 col-md-6">
              <div className="psp-1">
                <div className="psp-1-top">Our Approach</div>
                <ul className="ul-psp">
                  <li>
                    <span className="fw-bold">Mission-Driven Solutions:</span>{" "}
                    We align our services with your agency’s mission, ensuring
                    that our solutions deliver measurable value.
                  </li>
                  <li>
                    <span className="fw-bold">Compliance and Security:</span> We
                    adhere to the highest standards of compliance and security
                    to protect sensitive government data.
                  </li>
                  <li>
                    <span className="fw-bold">Agile Methodology:</span> We
                    employ agile methodologies to deliver projects efficiently
                    and effectively, adapting to changing requirements and
                    priorities.
                  </li>
                  <li>
                    <span className="fw-bold">Collaborative Partnerships:</span>{" "}
                    We work closely with our federal government clients to build
                    strong partnerships based on trust, transparency, and mutual
                    respect.
                  </li>
                  <li>
                    <span className="fw-bold">Design Thinking:</span> By
                    focusing on user research, ideation, prototyping, and
                    testing, we ensure that our solutions are user-friendly,
                    effective, and impactful.
                  </li>
                  <li>
                    <span className="fw-bold">Human-Centered Design:</span> We
                    leverage human-centered design principles to create
                    innovative solutions that meet the needs of your users and
                    stakeholders.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 psp-1m">
              <div className="psp-1">
                <div className="psp-1-top">Areas of Expertise</div>
                <ul className="ul-psp">
                  <li>
                    <span className="fw-bold">
                      Program Governance and Delivery:
                    </span>{" "}
                    Ensuring your programs are aligned with strategic goals and
                    delivered effectively.
                  </li>
                  <li>
                    <span className="fw-bold">
                      Information Technology and Cloud Solutions:
                    </span>{" "}
                    Migrating to and optimizing your agency’s cloud
                    infrastructure.
                  </li>
                  <li>
                    <span className="fw-bold">
                      Strategic Planning & Governance:
                    </span>{" "}
                    Develop comprehensive program plans and establish a robust
                    governance framework to ensure alignment with organizational
                    goals and accountability.
                  </li>
                  <li>
                    <span className="fw-bold">Operational Excellence:</span>{" "}
                    Implement a PMO to centralize program management, adopt
                    agile methodologies for flexibility, and proactively manage
                    risks to ensure program success.
                  </li>
                  <li>
                    <span className="fw-bold">Cloud Strategy & Planning:</span>{" "}
                    We’ll assess your IT infrastructure, develop a tailored
                    migration strategy, and ensure a seamless transition to the
                    cloud.
                  </li>
                  <li>
                    <span className="fw-bold">
                      Cloud Operations & Security:
                    </span>{" "}
                    We’ll manage and optimize your cloud environment, implement
                    robust governance, and protect your sensitive data.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <h2 style={{ fontWeight: "700", textAlign: "center" }}>
            We are ready to work
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "50px",
              margin: "100px 0",
              flexWrap: "wrap",
              padding: "0px 50px",
            }}
          >
            <img
              src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/8aCertified-1.png?fit=152%2C192"
              height={180}
              alt=""
            />
            <img
              src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/swam-1-1.png?w=331"
              height={120}
              alt=""
            />
            <img
              src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/GSAMAS-1.png?fit=244%2C214"
              height={180}
              alt=""
            />
          </div>
        </div>
        <br />
        <br />
        <div className="last-ps" style={{ textAlign: "center" }}>
          <h2 style={{ fontWeight: "700" }}>LET'S WORK TOGETHER</h2>
          <p
            className="mt-3 mb-5"
            style={{ fontSize: "1.1rem", fontWeight: "500" }}
          >
            Ready to learn more about how TDG can help your agency achieve its
            goals? Contact us today to schedule a consultation.
          </p>
          <button className="sl-inner-btn" style={{ fontSize: "1rem" }} onClick={()=>nav("/contact-us")}>
            Contact Us
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <a
            className="industries"
            style={{
              textDecoration: "underline",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "1.2rem",
              cursor: "pointer",
              color: "black",
            }}
            href="#nav-tdg"
          >
            BACK TO TOP
          </a>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default PublicSector;
