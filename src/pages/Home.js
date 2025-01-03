import React, { useState, useEffect } from "react";
import "../assets/styles/Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const nav = useNavigate();
  const images = [
    "http://www.thediallogroupllc.com/wp-content/uploads/2024/11/untitled-44-2-1.png",
    "http://www.thediallogroupllc.com/wp-content/uploads/2024/11/Property-1Frame-213.png",
    "http://www.thediallogroupllc.com/wp-content/uploads/2024/11/Property-1Frame-214.png",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  const imageUrl =
    "https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/Case-study-1.png?fit=399%2C496";
  return (
    <div>
      <div
        className="div-slideshow"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="sl-inner">
          <h1 className="sl-inner-head">Efficiency Through Simplicity</h1>
          <h4 className="sl-inner-head-2">
            The Diallo Group: Your Mission, Our Solution. No matter where the
            roadblock lies, we’re here to pave the way.
          </h4>
          <p className="sl-inner-p">
            Technology is just a tool in our toolbox, but it’s a powerful one.
            We’re committed to creating simple, efficient, and elegant solutions
            that not only solve your problems but also exceed your expectations.
            Let’s work together to turn your challenges into opportunities.
          </p>
          <button className="sl-inner-btn" onClick={() => nav("/why-us")}>
            Why Us
          </button>
        </div>
      </div>
      <div className="industries">
        <h1>INDUSTRIES</h1>
        <div className="three-ind">
          <div className="each-ind">
            <div className="initial-one">Public Sector</div>
            <button className="later-one" onClick={()=>nav("/public-sector")}>Learn more</button>
          </div>
          <div className="each-ind">
            <div className="initial-one">Commercial</div>
            <button className="later-one" onClick={()=>nav("/commercial")}>Learn more</button>
          </div>
          <div className="each-ind">
            <div className="initial-one">Health</div>
            <button className="later-one" onClick={()=>nav("/health")}>Learn more</button>
          </div>
        </div>
        <div className="val">
          <div className="val-h">
            <h1>70+</h1>
            <p>Cloud Migrations</p>
          </div>
          <div className="val-h" style={{ margin: "0 30px" }}>
            <h1>200+</h1>
            <p>VPCs</p>
          </div>
          <div className="val-h">
            <h1>5,500+</h1>
            <p>Instances Deployed</p>
          </div>
        </div>
      </div>
      <div className="industries">
        <h1>CAPABILITIES</h1>
        <div className="c1" style={{ margin: "auto" }}>
          <img
            className="img-c1"
            src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/untitled-39-2.png?resize=768%2C512"
            alt=""
          />
          <div className="cont-c1">
            <h2 style={{ fontWeight: "600" }}>Program & Project Management</h2>
            <p style={{ padding: "15px 0" }}>
              Ensure your programs achieve their full potential. Our expert team
              includes experienced,{" "}
              <span className="fw-bold">
                certified PMP Project Managers and certified SAFe® Agilists.
              </span>{" "}
              TDG provides strategic guidance, robust frameworks, and tailored
              solutions to optimize your program governance and delivery. We
              help you align your initiatives with business objectives, mitigate
              risks, and deliver measurable results.
            </p>
            <button
              className="sl-inner-btn"
              style={{ padding: "7px 20px", fontSize: "0.95rem" }}
              onClick={() => nav("/program-project-management")}
            >
              Learn More
            </button>
          </div>
          <div className="line"></div>
        </div>
        <br />
        <br />
        <br />
        <div className="c2" style={{ margin: "auto" }}>
          <div className="cont-c2">
            <h2 style={{ fontWeight: "600" }}>
              Information Technology & Cloud Solutions
            </h2>
            <p style={{ padding: "15px 0" }}>
              Unlock the power of the cloud with our expert guidance.{" "}
              <span className="fw-bold">
                We provide tailored cloud solutions to help you optimize your IT
                infrastructure, improve efficiency, and drive innovation.
              </span>{" "}
              Our team of consultants will work closely with you to understand
              your unique needs and develop a roadmap for successful cloud
              adoption.
            </p>
            <button
              className="sl-inner-btn"
              style={{ padding: "7px 20px", fontSize: "0.95rem" }}
              onClick={() => nav("/information-technology-cloud-solutions")}
            >
              Learn More
            </button>
          </div>
          <img
            className="img-c2"
            src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/untitled-40.png?resize=768%2C513"
            alt=""
          />
          <div className="line-2"></div>
        </div>
        <br />
        <br />
      </div>
      <div className="industries" style={{ backgroundColor: "#f8f8f8" }}>
        <h1>CASE STUDIES</h1>
        <div className="cs">
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
              href="https://www.thediallogroupllc.com/from-legacy-to-leading-edge-a-federal-it-success-story/"
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
              href="https://www.thediallogroupllc.com/case-study-2-transforming-federal-healthcare-architecture-a-cloud-migration-success-story/"
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
      </div>
      <br />
      <br />
      <div className="industries mx-5" style={{ textAlign: "center" }}>
        <h1 id="testi">TESTIMONIALS</h1>
        <div style={{ fontStyle: "italic" }}>
          “In case we haven’t told you, just wanted you to know how much of a
          pleasure it is partnering with you on this project! You (and your TDG
          team) are inquisitive, have a high level of engagement during every
          meeting/working session and are always willing to roll up your
          sleeves, assist and advise as needed.
        </div>
        <br />
        <div style={{ fontStyle: "italic" }}>
          Please know how much I/we appreciate you!”
        </div>
        <br />
        <div className="fw-bold">Senior Advisor | Federal</div>
      </div>
      <br />
      <br />
      <div
        className="industries"
        style={{ backgroundColor: "#f8f8f8", paddingBottom: "60px" }}
      >
        <h1>CONTACT US</h1>
        <div className="contact row" style={{ margin: "0" }}>
          <div className="left-cont col-lg-6 col-md-6">
            <h2 className="fw-bold">ARE YOU READY FOR THE TRANSFORMATION?</h2>
            <p className="fs-5" style={{ fontWeight: "500" }}>
              At TDG, we're here to guide you through every step of your digital
              journey, unlocking the full potential of technology to drive
              innovation, efficiency, and lasting success.
            </p>
            <p className="fs-5" style={{ fontWeight: "500" }}>
              Get in contact with us today.
            </p>
          </div>
          <form className="form col-lg-6 col-md-6" action="">
            <label style={{ fontWeight: "600" }} htmlFor="">
              Name <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input className="in-text" type="text" placeholder="Name" />
            <br />
            <label style={{ fontWeight: "600" }} htmlFor="">
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input className="in-text" type="email" placeholder="Email" />
            <br />
            <label style={{ fontWeight: "600" }} htmlFor="">
              Organization <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input className="in-text" type="text" placeholder="" />
            <br />
            <div style={{ fontWeight: "600", marginBottom: "-20px" }}>
              Area of interest
            </div>
            <br />
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <input type="radio" name="interest" />
              <label htmlFor="" style={{ fontWeight: "500" }}>
                {" "}
                General Information
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <input type="radio" name="interest" />
              <label htmlFor="" style={{ fontWeight: "500" }}>
                {" "}
                Partnership Opportunities
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <input type="radio" name="interest" />
              <label htmlFor="" style={{ fontWeight: "500" }}>
                {" "}
                Careers
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <input type="radio" name="interest" />
              <label htmlFor="" style={{ fontWeight: "500" }}>
                {" "}
                Others
              </label>
            </div>
            <label style={{ fontWeight: "600" }} htmlFor="">
              Message
            </label>
            <br />
            <textarea
              name=""
              placeholder="Message"
              id=""
              style={{ border: "1px solid #641097" }}
            ></textarea>
            <br />
            <button className="sl-inner-btn-form" id="bt-n">
              Submit
            </button>
          </form>
        </div>
      </div>
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
  );
};

export default Home;
