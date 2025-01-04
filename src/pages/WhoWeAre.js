import React from "react";
import "../assets/styles/PublicSector.css";
import l1 from "../assets/images/1.png";
import l2 from "../assets/images/2.png";
import l3 from "../assets/images/7.png";
import {useNavigate} from "react-router-dom"

const WhoWeAre = () => {
  const nav = useNavigate();
  const services = [
    {
      logo: l1,
      heading: "Collaborative Innovation",
      description:
        "We believe that the best solutions emerge from collaboration. We work closely with our clients to understand their unique needs and develop tailored strategies that address their specific challenges.",
    },
    {
      logo: l2,
      heading: "Data-Driven Insights",
      description:
        "Leveraging advanced analytics, we uncover valuable insights to inform decision-making and drive results.",
    },
    {
      logo: l3,
      heading: "Ethical and Sustainable Solutions",
      description:
        "Our focus is on creating solutions that are not only effective but also ethical and sustainable, contributing to a better future for all.",
    },
  ];
  return (
    <div>
      <div className="industries">
        <div className="c1" style={{ margin: "auto", paddingTop: "200px" }}>
          <h1 className="c1-ps" style={{ textAlign: "start" }}>
            WHO WE ARE
          </h1>
          <img
            className="img-c1"
            src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/Frame-112.png?w=714"
            alt=""
          />
          <div className="cont-c1" style={{ marginTop: "85px" }}>
            <h3 style={{ fontWeight: "600" }}>
              Partnering for a Better Tomorrow
            </h3>
            <p style={{ padding: "15px 0" }}>
              We’re a catalyst for positive change, dedicated to solving complex
              societal challenges. Whether you’re a public sector agency,
              commercial enterprise, or healthcare organization, we’re committed
              to partnering with you to achieve your mission.
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
            Our Approach:
          </h2>
          <div className="row service-row" style={{ margin: "0" }}>
            {services.map((e, i) => (
              <div className="col-lg-4 col-md-6">
                <div
                  className="each-service"
                  key={i}
                  style={{ height: "100%" }}
                >
                  <img src={e.logo} height={90} alt="" />
                  <div style={{ borderLeft: "2px solid #30216e", paddingLeft:"15px" }}>
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
        <br />
        <br />
        <div className="last-ps" style={{ textAlign: "center" }}>
          <h2 style={{ fontWeight: "700" }}>Ready to Partner with Us?</h2>
          <p
            className="mt-3 mb-5"
            style={{ fontSize: "1.1rem", fontWeight: "500" }}
          >
            Let’s work together to create a brighter future. Contact us today to
            discuss your challenges and explore how we can help you achieve your
            goals.
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

export default WhoWeAre;
