import React, {useState} from "react";
import "../assets/styles/ProgramProjectManagement.css";
import l1 from "../assets/images/1.png";
import l2 from "../assets/images/2.png";
import l3 from "../assets/images/3.png";
import l4 from "../assets/images/4.png";
import l5 from "../assets/images/5.png";
import l6 from "../assets/images/6.png";
import whi from "../assets/images/whi.png";

const ProgramProjectManagement = () => {
  const services = [
    {
      logo: l1,
      heading: "Program Strategy and Planning",
      description:
        "Develop comprehensive program plans that align with your organization's goals, whether that is moving to the cloud or developing a new application.",
    },
    {
      logo: l2,
      heading: "Governance Framework Development",
      description:
        "Develop comprehensive program plans that align with your organization's goals, whether that is moving to the cloud or developing a new application.",
    },
    {
      logo: l3,
      heading: "Program Strategy and Planning",
      description:
        "Implement a PMO to centralize program management activities and improve efficiency.",
    },
    {
      logo: l4,
      heading: "Agile Transformation",
      description:
        "Transition your organization to an agile way of working to increase flexibility and responsiveness",
    },
    {
      logo: l5,
      heading: "Risk Management",
      description:
        "Identify, assess, and mitigate risks to protect your programs from disruptions.",
    },
    {
      logo: l6,
      heading: "Performance Measurement and Reporting",
      description: "Track program progress and report on key metrics.",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://tdg-new-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (data.success) {
        alert("From Submitted Successfully!");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      alert("Failed! Try again.");
    }
  };
  return (
    <div>
      <div className="contra-top industries">
        <h2
          className="mb-3"
          style={{ textAlign: "start", fontWeight: "700", fontSize: "2.75rem" }}
        >
          PROGRAM & PROJECT MANAGEMENT
        </h2>
        <p style={{ fontSize: "1.4rem", fontWeight: "500" }}>
          Driving Positive Change
        </p>
        <p>
          TDG believes that effective program governance and delivery are
          essential for driving positive change and addressing complex societal
          challenges. Our team of experienced professionals, including certified
          PMP Project Managers and SAFe® Agilists, is dedicated to helping you
          optimize your programs and achieve your mission.
        </p>
      </div>
      <div className="contra-top industries">
        <div className="approach row" style={{ margin: "0" }}>
          <div
            className="approach-left col-lg-6 col-md-6"
            style={{ borderRadius: "12px" }}
          >
            <img
              src={whi}
              alt=""
            />
          </div>
          <div className="approach-right col-lg-6 col-md-6">
            <h2 className="mb-5" style={{ fontWeight: "600" }}>
              Our Approach
            </h2>
            <ul>
              <li>
                <p>
                  <span className="fw-bold">Strategic Alignment:</span> Ensure
                  your programs are aligned with your organization’s strategic
                  goals and objectives.
                </p>
              </li>
              <li>
                <p>
                  <span className="fw-bold">Risk Mitigation:</span> Identify and
                  address potential risks to ensure program success.
                </p>
              </li>
              <li>
                <p>
                  <span className="fw-bold">Agile Delivery:</span> Leverage
                  agile methodologies to deliver programs efficiently and
                  effectively.
                </p>
              </li>
              <li>
                <p>
                  <span className="fw-bold">Measurable Outcomes:</span> Track
                  program performance and measure results against key
                  performance indicators (KPIs).
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="contra-top industries"
        style={{ background: "rgba(248, 248, 248, 1)" }}
      >
        <h2
          className="mb-3"
          style={{ textAlign: "start", fontWeight: "600", fontSize: "2.3rem" }}
        >
          Our Services
        </h2>
        <div className="row service-row" style={{ margin: "0" }}>
          {services.map((e, i) => (
            <div className="col-lg-4 col-md-6">
              <div className="each-service" key={i} style={{ height: "350px" }}>
                <img src={e.logo} height={50} alt="" />
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
      <div className="contra-top industries">
        <div className="approach row" style={{ margin: "0" }}>
          <div className="approach-right col-lg-6 col-md-6">
            <h2 className="mb-5" style={{ fontWeight: "600" }}>
              Why Choose Us
            </h2>
            <ul>
              <li>
                <p>
                  <span className="fw-bold">Experienced Team:</span> Our team of
                  certified professionals has a proven track record of
                  delivering successful programs.
                </p>
              </li>
              <li>
                <p>
                  <span className="fw-bold">Customized Solutions:</span> We
                  tailor our services to meet your organization’s unique needs
                  and challenges.
                </p>
              </li>
              <li>
                <p>
                  <span className="fw-bold">Focus on Societal Impact:</span> We
                  are committed to using our expertise to drive positive change
                  and address complex societal problems.
                </p>
              </li>
              <li>
                <p>
                  <span className="fw-bold">Proven Track Record:</span> We’ve
                  performed over{" "}
                  <span className="fw-bold">60 cloud migrations</span>,
                  implemented over <span className="fw-bold">100 VPCs</span>,
                  and deployed over{" "}
                  <span className="fw-bold">4,500 instances</span> for our
                  clients.
                </p>
              </li>
            </ul>
          </div>
          <div
            className="approach-left col-lg-6 col-md-6"
            style={{ borderRadius: "12px" }}
          >
            <img
              src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/untitled-126.jpg?w=653"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="contra-line"></div>
      <div
        className="industries"
        style={{ backgroundColor: "", paddingBottom: "60px" }}
      >
        <div className="contact row" style={{ margin: "0" }}>
          <div className="left-cont col-lg-6 col-md-6">
            <h2 className="fw-bold">LET'S WORK TOGETHER</h2>
            <p className="" style={{ fontWeight: "" }}>
              Ready to optimize your programs and drive positive change? Contact
              us today to learn more about how our program governance and
              delivery services can help you achieve your goals.
            </p>
            <img
              className="mb-4"
              src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/untitled-127.jpg?resize=1024%2C683&ssl=1"
              alt=""
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </div>
          <form className="form col-lg-6 col-md-6" onSubmit={handleSubmit}>
            <label style={{ fontWeight: "600" }} htmlFor="">
              Name <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              className="in-text"
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <br />
            <label style={{ fontWeight: "600" }} htmlFor="">
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              className="in-text"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <br />
            <label style={{ fontWeight: "600" }} htmlFor="">
              Organization <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              className="in-text"
              type="text"
              placeholder=""
              name="organization"
              onChange={handleChange}
            />
            <br />
            <div style={{ fontWeight: "600", marginBottom: "-20px" }}>
              Area of interest
            </div>
            <br />
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <input type="radio" name="interest" onChange={handleChange} />
              <label htmlFor="" style={{ fontWeight: "500" }}>
                {" "}
                General Information
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <input type="radio" name="interest" onChange={handleChange} />
              <label htmlFor="" style={{ fontWeight: "500" }}>
                {" "}
                Partnership Opportunities
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <input type="radio" name="interest" onChange={handleChange} />
              <label htmlFor="" style={{ fontWeight: "500" }}>
                {" "}
                Careers
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <input type="radio" name="interest" onChange={handleChange} />
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
              name="message"
              onChange={handleChange}
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

export default ProgramProjectManagement;
