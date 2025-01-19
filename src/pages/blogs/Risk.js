import React, { useState } from "react";
import "./Devops.css";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  MailruShareButton,
} from "react-share";

const Risk = () => {
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
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Failed! Try again.");
    }
  };
  const shareUrl = window.location.href;
  return (
    <div className="industries">
      <div
        className="blog-top"
        style={{
          backgroundImage: `url("https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/12/untitled-92-copy.png?resize=1024%2C683")`,
        }}
      >
        <div className="blog-top-text">
          Risk Management: A Critical Component of Federal Health Project
          Management
        </div>
      </div>
      <div className="main-text row" style={{ margin: "0" }}>
        <div className="left-text col-lg-8 col-md-7">
          <p>
            In the complex landscape of federal health projects, effective risk
            management is essential to ensure project success, minimize
            potential disruptions, and protect public health. By proactively
            identifying, assessing, and mitigating risks, project managers can
            safeguard critical initiatives and achieve optimal outcomes.
          </p>
          <h5 className="fw-bold mb-3">Why Risk Management Matters</h5>
          <ul className="custom-list">
            <li className="">
              <span className="fw-bold">Protecting Public Health:</span> Federal
              health projects often involve sensitive data and critical
              infrastructure. Effective risk management can help prevent data
              breaches, system failures, and other incidents that could
              compromise public health.
            </li>
            <br />
            <li className="">
              <span className="fw-bold">Ensuring Project Success:</span> By
              identifying and addressing potential risks early on, project
              managers can avoid costly delays, rework, and project failures.
            </li>
            <br />
            <li className="">
              <span className="fw-bold">
                Adhering to Regulatory Compliance:
              </span>{" "}
              Federal health projects are subject to stringent regulatory
              requirements. Risk management can help ensure compliance with
              these regulations and avoid penalties.
            </li>
            <br />
            <li className="">
              <span className="fw-bold">Optimizing Resource Allocation:</span>{" "}
              By prioritizing risks and allocating resources accordingly,
              project managers can maximize the efficiency and effectiveness of
              their projects.
            </li>
            <br />
          </ul>
          <h5 className="fw-bold mb-3">
            Key Risk Management Strategies for Federal Health Projects
          </h5>
          <ol className="custom-list">
            <li className="custom-list-in">
              Risk Identification:
              <ul>
                <li>
                  <span className="fw-bold">Brainstorming Techniques:</span> Use
                  techniques like SWOT analysis, brainstorming, and checklists
                  to identify potential risks.
                </li>
                <li>
                  <span className="fw-bold">Expert Input:</span> Consult with
                  subject matter experts to gain insights into potential risks.
                </li>
              </ul>
            </li>
            <br />
            <li className="custom-list-in">
              Risk Assessment:
              <ul>
                <li>
                  <span className="fw-bold">Risk Prioritization:</span> Evaluate
                  the likelihood and impact of each risk to determine its
                  priority.
                </li>
                <li>
                  <span className="fw-bold">
                    Quantitative and Qualitative Analysis:
                  </span>{" "}
                  Use both quantitative and qualitative methods to assess risks.
                </li>
              </ul>
            </li>
            <br />
            <li className="custom-list-in">
              Risk Response Planning
              <ul>
                <li>
                  <span className="fw-bold">Risk Mitigation:</span> Develop
                  strategies to reduce the likelihood or impact of risks.
                </li>
                <li>
                  <span className="fw-bold">Risk Transfer:</span> Transfer risk
                  to a third party, such as through insurance or outsourcing.
                </li>
                <li>
                  <span className="fw-bold">Risk Acceptance:</span> Accept the
                  risk if it is low-impact or cannot be mitigated or
                  transferred.
                </li>
                <li>
                  <span className="fw-bold">Risk Avoidance:</span> Avoid the
                  risk altogether by changing the project scope or approach.
                </li>
              </ul>
            </li>
            <br />
            <li className="custom-list-in">
              Risk Monitoring and Control:
              <ul>
                <li>
                  <span className="fw-bold">Regular Risk Reviews:</span> Conduct
                  periodic reviews to assess the status of identified risks.
                </li>
                <li>
                  <span className="fw-bold">Contingency Planning:</span> Develop
                  contingency plans to respond to unforeseen events.
                </li>
                <li>
                  <span className="fw-bold">Real-time Monitoring:</span> Use
                  project management tools to monitor project progress and
                  identify emerging risks.
                </li>
              </ul>
            </li>
            <br />
          </ol>
          <h5 className="fw-bold mb-3">Conclusion</h5>
          <p>
            By implementing a robust risk management framework, federal health
            agencies can significantly improve the success of their projects. By
            proactively identifying, assessing, and mitigating risks, project
            managers can ensure that these critical initiatives are delivered on
            time, within budget, and with minimal disruption to public health.
          </p>
        </div>
        <div className="right-text col-lg-4 col-md-5">
          <div className="scoop-bottom sticky">
            <div
              className="scoop-form"
              style={{ padding: "30px 30px 50px 30px", textAlign: "start" }}
            >
              <h4 style={{ fontWeight: "600" }}>Send Us A Message</h4>
              <p style={{ marginTop: "0", fontSize: "0.8rem" }}>
                Let us know what you think
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  style={{ padding: "10px 15px", fontSize: "0.75rem" }}
                />
                <br />
                <input
                  className="my-3"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  style={{ padding: "10px 15px", fontSize: "0.75rem" }}
                />
                <br />
                <textarea
                  name="message"
                  placeholder="Message"
                  id=""
                  onChange={handleChange}
                  style={{ padding: "10px 15px", fontSize: "0.75rem" }}
                ></textarea>
                <button>Send</button>
              </form>
            </div>
            <div>
              <p
                className="mt-5 mb-4"
                style={{ color: "grey", fontSize: "0.85rem" }}
              >
                Share this post
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div className="logo-cir">
                  <FacebookShareButton url={shareUrl}>
                    <FaFacebook />
                  </FacebookShareButton>
                </div>
                <div className="logo-cir">
                  <LinkedinShareButton url={shareUrl}>
                    <IoLogoLinkedin />
                  </LinkedinShareButton>
                </div>
                <div className="logo-cir">
                  <TwitterShareButton url={shareUrl}>
                    <FaXTwitter />
                  </TwitterShareButton>
                </div>
                <a href="" className="logo-cir">
                  <IoMdMail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Risk;
