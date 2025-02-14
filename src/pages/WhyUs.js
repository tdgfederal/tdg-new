import React from "react";
import "../assets/styles/WhyUs.css";
import l1 from "../assets/images/8.png";
import { FaDownload } from "react-icons/fa6";
import file from "../assets/qms.0520-Quality-Policy-_updated.pdf";
import iso from "../assets/images/ISO-9001.png";
import pmp from "../assets/images/PMP.png";
import safe from "../assets/images/SAFe.png";
import cloud from "../assets/images/Certified-Cloud-1.png";
import lr from "../assets/images/lr.webp";
import wu from "../assets/images/wu.webp";

const WhyUs = () => {
    const handleClick = () => {
      const link = document.createElement("a");
      link.download = "qms.0520-Quality-Policy-_updated";
  
      link.href = file;
  
      link.click();
    };
  const services = [
    {
      logo: l1,
      heading: "Proven Track Record:",
      description:
        "Our experience working with diverse clients across industries has equipped us with the knowledge and expertise to tackle complex challenges.",
    },
    {
      logo: l1,
      heading: "Results-Driven Approach:",
      description:
        "We're not just about delivering reports. We're committed to driving tangible results that make a real difference in your organization.",
    },
    {
      logo: l1,
      heading: "Trusted Longterm Partner:",
      description:
        "Our diverse clientele trusts us with their most complicated challenges, whether that be moving sensitive health data to the cloud, or managing complex projects with many moving parts.",
    },
    {
      logo: l1,
      heading: "Societal Responsibility:",
      description:
        "We believe in doing business responsibly. Our commitment to ethical and sustainable practices ensures that our solutions contribute to a better future.",
    },
  ];
  const imageUrl = lr;
  return (
    <div>
      <div className="industries">
        <div className="c1" style={{ margin: "auto", paddingTop: "200px" }}>
          <h1 className="c1-ps" style={{ textAlign: "start" }}>
            WHY US
          </h1>
          <img
            className="img-c1"
            src={wu}
            alt=""
          />
          <div className="cont-c1" style={{ marginTop: "85px" }}>
            <h3 style={{ fontWeight: "600" }}>
              At TDG, we're problem solvers by nature.
            </h3>
            <p style={{ padding: "15px 0" }}>
              Our mission is to help you overcome your challenges and achieve
              your goals.
            </p>
          </div>
          <div className="line"></div>
        </div>
        <br />
        <br />
        <br />
        <div
          className="contra-top industries"
          style={{ background: "rgba(248, 248, 248, 1)" }}
        >
          <h2
            className="mb-3"
            style={{
              textAlign: "start",
              fontWeight: "600",
              fontSize: "2.3rem",
            }}
          >
            Here's why you should choose us:
          </h2>
          <div className="row service-row" style={{ margin: "0" }}>
            {services.map((e, i) => (
              <div className="col-lg-6 col-md-6">
                <div
                  className="each-service each-service-wu"
                  key={i}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    className="each-service-wu-img"
                    src={e.logo}
                    alt=""
                    style={{
                      paddingRight: "20px",
                      borderLeft: "2px solid #30216e",
                      paddingLeft: "15px",
                    }}
                  />
                  <div style={{}}>
                    <p
                      className="mt-4"
                      style={{
                        color: "#30216e",
                        fontWeight: "600",
                        fontSize: "1.2rem",
                      }}
                    >
                      {e.heading}
                    </p>
                    <p>{e.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <div className="contra-top industries">
          <h2
            className="mb-3"
            style={{
              textAlign: "start",
              fontWeight: "600",
              fontSize: "2.3rem",
            }}
          >
            Our Dedication to Excellence
          </h2>
          <p>
            We prioritize delivering exceptional value to our clients. Our
            certifications reflect our dedication to quality, security, and
            operational efficiency.
          </p>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                height={250}
                src={iso}
                alt=""
              />
              <div
                className="fw-bold mt-4 mb-3 d-flex"
                style={{ width: "250px", lineHeight: "15px" }}
                onClick={handleClick}
              >
                <FaDownload style={{marginLeft:"20px"}}/>{" "}
                <div style={{ color: "black", textDecoration:"underline", cursor:'pointer' }}>
                  Download Our Certificate of Accreditation
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                height={250}
                src={pmp}
                alt=""
              />
              <div
                className="fw-bold mt-4 mb-3"
                style={{ width: "250px", lineHeight: "15px" }}
              >
                PMP Certified
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                height={250}
                src={safe}
                alt=""
              />
              <div
                className="fw-bold mt-4 mb-3"
                style={{ width: "250px", lineHeight: "20px" }}
              >
                Certified SAFe 5 Product Owner/Product Manager
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                height={250}
                src={cloud}
                alt=""
              />
              <div
                className="fw-bold mt-4 mb-3"
                style={{ width: "250px", lineHeight: "15px" }}
              >
                Certified Cloud Team
              </div>
            </div>
          </div>
        </div>
        <div className="contra-line"></div>
        <br />
        <br />
        <div>
          <h1
            style={{
              marginTop: "-60px",
              textAlign: "start",
              paddingLeft: "5%",
            }}
          >
            Case Studies
          </h1>
        </div>
        <div className="cs" style={{ position: "relative" }}>
          <div
            className="cs-1"
            style={{
              textAlign: "center",
              background: `linear-gradient(180deg, rgba(100, 16, 151, 0.5) 0%, rgba(48, 33, 110, 0.8) 100%), url(${imageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              color: "white",
              borderRadius: "12px",
            }}
          >
            <h2>A FEDERAL IT SUCCESS</h2>
            <h2 className="mb-4" style={{ marginTop: "-10px" }}>
              STORY
            </h2>
            <p>70% Reduction in ec2 instance</p>
            <p>33% Reduction in RDS instance</p>
            <p>64% Improvement in load balancing</p>
            <p>2 Months project timeline</p>
            <a
              href="/case-study/1"
              target="_blank"
            >
              <button
                className="sl-inner-btn mt-4"
                id="bt"
                style={{
                  fontSize: "1rem",
                  padding: "10px 80px",
                }}
              >
                Learn More
              </button>
            </a>
          </div>
          <div
            className="cs-1"
            style={{
              textAlign: "center",
              background: `linear-gradient(180deg, rgba(100, 16, 151, 0.5) 0%, rgba(48, 33, 110, 0.8) 100%), url(${imageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              color: "white",
              borderRadius: "12px",
            }}
          >
            <h2>A CLOUD MIGRATION</h2>
            <h2 className="mb-4" style={{ marginTop: "-10px" }}>
              SUCCESS STORY
            </h2>
            <p>$100M In annual savings</p>
            <p>50% More web traffic handled</p>
            <p>20% Reduction in security incidents</p>
            <p>30% Faster feature implementation</p>
            <a
              href="/case-study/2"
              target="_blank"
            >
              <button
                className="sl-inner-btn mt-4"
                id="bt"
                style={{
                  fontSize: "1rem",
                  padding: "10px 80px",
                }}
              >
                Learn More
              </button>
            </a>
          </div>
        </div>
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

export default WhyUs;
