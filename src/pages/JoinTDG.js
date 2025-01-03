import React from "react";
import "../assets/styles/JoinTDG.css";
import l1 from "../assets/images/9.png";
import l2 from "../assets/images/10.png";
import l3 from "../assets/images/11.png";
import l4 from "../assets/images/12.png";
import l5 from "../assets/images/13.png";
import l6 from "../assets/images/14.png";
import l7 from "../assets/images/15.png";
import l8 from "../assets/images/16.png";
import l9 from "../assets/images/17.png";

const JoinTDG = () => {
  const services = [
    {
      logo: l1,
      heading: "Purpose-Driven Work:",
      description:
        "Your contributions will have a direct impact on communities around the world.",
    },
    {
      logo: l2,
      heading: "Collaborative Environment:",
      description:
        "Work alongside talented and dedicated professionals who share your passion for making a difference.",
    },
    {
      logo: l3,
      heading: "Continuous Learning:",
      description:
        "We invest in your professional development to help you grow and succeed.",
    },
    {
      logo: l4,
      heading: "Flexible Work Arrangements:",
      description:
        "We offer competitive compensation and benefits, as well as flexible work arrangements to support your personal and professional life.",
    },
  ];
  const services2 = [
    {
      logo: l5,
      heading: "401(k) plan",
      description:
        "We’re committed to your long-term financial health. That’s why we offer a 401(k) plan with employer matching contributions.",
    },
    {
      logo: l6,
      heading: "Health insurance plans",
      description:
        "We value your well-being. That’s why we offer comprehensive health insurance plans to keep you and your family healthy.",
    },
    {
      logo: l7,
      heading: "Remote working options",
      description:
        "Boost your productivity and work-life balance with our remote work options. Enjoy the freedom to work from anywhere.",
    },
    {
      logo: l8,
      heading: "Cell Phone Benefit",
      description:
        "Keep in touch with clients and colleagues effortlessly. Our cell phone benefit makes it easy to stay connected, anywhere, anytime.",
    },
    {
      logo: l9,
      heading: "Qualifying expenses reimbursement",
      description:
        "We’re committed to supporting your professional development. Our reimbursement program helps cover the costs of essential business expenses.",
    },
  ];
  return (
    <div>
      <div className="industries">
        <div className="c1" style={{ margin: "auto", paddingTop: "200px" }}>
          <h1 className="c1-ps" style={{ textAlign: "start" }}>
            JOIN TDG
          </h1>
          <img
            className="img-c1"
            src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/startup-business-people-teamwork-cooperation-hands-together.jpg?resize=1024%2C683"
            alt=""
          />
          <div className="cont-c1" style={{ marginTop: "85px" }}>
            <h3 style={{ fontWeight: "600" }}>
              Are you ready to make a difference?
            </h3>
            <p style={{ padding: "15px 0" }}>
              At TDG, we’re more than just an IT consulting firm. We’re a
              community of passionate individuals committed to leveraging
              technology to solve complex societal problems.
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
            Why Join Us?
          </h2>
          <div className="row service-row" style={{ margin: "0" }}>
            {services.map((e, i) => (
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div
                  className="each-service"
                  key={i}
                  style={{ height: "100%" }}
                >
                  <img src={e.logo} height={70} alt="" />
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
            ))}
          </div>
        </div>
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
            Benefits
          </h2>
          <div className="row service-row" style={{ margin: "0" }}>
            {services2.map((e, i) => (
              <div className="col-lg-4 col-md-6 mx-auto text-center">
                <div
                  className="each-service"
                  key={i}
                  style={{ height: "100%", boxShadow: "none" }}
                >
                  <img src={e.logo} height={70} alt="" />
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
            ))}
          </div>
        </div>
        <br />
        <div className="contra-top industries">
          <h2
            className="mb-3"
            style={{
              textAlign: "start",
              fontWeight: "700",
              fontSize: "2.3rem",
            }}
          >
            Ready to Join Our Team?
          </h2>
          <p>
            If you’re passionate about using technology to solve societal
            problems and want to be part of a dynamic and innovative team, we
            encourage you to apply.
          </p>
          <br />
          <br />
        </div>
        <div
          className="contra-top industries"
          style={{
            background: "rgba(248, 248, 248, 1)",
            paddingBottom: "90px",
            marginTop: "-50px",
          }}
        >
          <h2 className="mb-3" style={{ fontWeight: "600" }}>
            Job Openings
          </h2>
          <a
            className="an-role"
            href="http://www.thediallogroupllc.com/job-openings-cloud-solution-engineer/"
            target="_blank"
          >
            Cloud Solution Engineer
          </a>
          <br />
          <a
            className="an-role"
            href="http://www.thediallogroupllc.com/job-openings-senior-devops-engineer/"
            target="_blank"
          >
            Senior DevOps Engineer
          </a>
        </div>
        <br />
        <br />
        <br />
        <div className="contra-line"></div>
        <br />
        <br />
        <div>
          <h1
            style={{
              marginTop: "-60px",
              textAlign: "center",
              paddingLeft: "5%",
            }}
          >
            Let's build a better future together.
          </h1>
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

export default JoinTDG;
