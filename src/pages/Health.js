import React from "react";
import "../assets/styles/PublicSector.css";
import { useNavigate } from "react-router-dom";
import Healthcar from "../assets/images/Healthcare.png";

const Health = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="industries">
        <div className="c1" style={{ margin: "auto", paddingTop: "200px" }}>
          <h1 className="c1-ps" style={{ textAlign: "start" }}>
            HEALTH
          </h1>
          <img
            className="img-c1"
            src={Healthcar}
            alt=""
          />
          <div className="cont-c1 mt-4">
            <h3 style={{ fontWeight: "600" }}>
              Driving Positive Change in Healthcare
            </h3>
            <p style={{ padding: "15px 0" }}>
              At TDG, we believe that technology has the power to transform
              healthcare and improve the lives of patients. Our team of
              experienced health IT professionals is dedicated to providing
              innovative solutions that address the challenges facing healthcare
              organizations, commercial entities, and the public sector.
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
                  Capability
                </button>
              </div>
            </div>
          </div>
          <div className="line" style={{bottom:"30px"}}></div>
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
                    <span className="fw-bold">Experienced Team:</span> Our team
                    of health IT experts has a proven track record of delivering
                    successful projects.
                  </li>
                  <li>
                    <span className="fw-bold">Customized Solutions:</span> We
                    tailor our solutions to meet your organization’s unique
                    needs and challenges.
                  </li>
                  <li>
                    <span className="fw-bold">Focus on Societal Impact:</span>{" "}
                    We are committed to using technology to improve healthcare
                    outcomes and address societal problems.
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
                      Support Patient-Centered Solutions:
                    </span>{" "}
                    We focus on supporting solutions that improve patient
                    experiences, outcomes, and safety by providing insights
                    using AI and analytics technology.
                  </li>
                  <li>
                    <span className="fw-bold">Interoperability:</span> We ensure
                    that our solutions seamlessly integrate with existing
                    systems to improve data sharing and collaboration.
                  </li>
                  <li>
                    <span className="fw-bold">Data-Driven Insights:</span> We
                    leverage data analytics to uncover valuable insights and
                    inform decision-making.
                  </li>
                  <li>
                    <span className="fw-bold">Compliance and Security:</span> We
                    adhere to the highest standards of compliance and security
                    to protect patient data and ensure regulatory compliance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
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

export default Health;
