import React from "react";
import "../assets/styles/PublicSector.css";

const Commercial = () => {
  return (
    <div>
      <div className="industries">
        <div className="c1" style={{ margin: "auto", paddingTop: "200px" }}>
          <h1 className="c1-ps" style={{ textAlign: "start" }}>
            COMMERCIAL
          </h1>
          <img
            className="img-c1"
            src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/Commercial.png?w=672&ssl=1"
            alt=""
          />
          <div className="cont-c1">
            <h3 style={{ fontWeight: "600" }}>
              Partnering with Businesses to Drive Success
            </h3>
            <p style={{ padding: "15px 0" }}>
              At TDG, we’re committed to helping businesses of all sizes achieve
              their goals and stay ahead of the competition. Our team of
              experienced professionals provides tailored IT solutions that
              address your unique challenges and drive growth.
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
                >
                  Capability
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
                    <span className="fw-bold">Business-Centric Solutions:</span>{" "}
                    We align our services with your business objectives,
                    ensuring that our solutions deliver measurable value.
                  </li>
                  <li>
                    <span className="fw-bold">
                      Agile and Design Thinking Methodologies:
                    </span>{" "}
                    We employ agile methodologies to deliver projects
                    efficiently and effectively, adapting to changing
                    requirements and priorities. Human-centered design is
                    prioritized to develop innovative solutions that prioritize
                    your users’ needs and drive measurable results.
                  </li>
                  <li>
                    <span className="fw-bold">Collaborative Success:</span> We
                    foster strong partnerships with our clients, built on trust,
                    transparency, and a shared commitment to excellence.
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
                    <span className="fw-bold">Cloud Consulting:</span> Migrating
                    to and optimizing your business’s cloud infrastructure.
                  </li>
                  <li>
                    <span className="fw-bold">Software Development:</span>{" "}
                    Building custom software solutions that meet your business’s
                    specific needs.
                  </li>
                  <li>
                    <span className="fw-bold">
                      Automation and Smart Home Technology:
                    </span>{" "}
                    Elevate your home with cutting-edge smart home solutions,
                    including automated lighting, climate control, and security
                    systems.
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
          <button className="sl-inner-btn" style={{ fontSize: "1rem" }}>
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

export default Commercial;
