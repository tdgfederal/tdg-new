import React, { useState } from "react";
import "./Devops.css";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import {FacebookShareButton, LinkedinShareButton, TwitterShareButton, MailruShareButton} from "react-share"

const Devops = () => {
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
  const shareUrl = window.location.href
  return (
    <div className="industries">
      <div className="blog-top">
        <div className="blog-top-text">
          DevOps: The Key to Successful Cloud Implementation in the Federal
          Government
        </div>
      </div>
      <div className="main-text row" style={{ margin: "0" }}>
        <div className="left-text col-lg-8 col-md-7">
          <p>
            The federal government’s increasing reliance on cloud computing has
            brought about a paradigm shift in how IT services are delivered. To
            maximize the benefits of cloud adoption, a robust DevOps model is
            essential. DevOps, a cultural and technical practice that bridges
            the gap between development and operations teams, can significantly
            accelerate cloud implementation, improve service delivery, and
            enhance overall efficiency.
          </p>
          <h5 className="fw-bold mb-3">
            Why DevOps Matters for Federal Cloud Initiatives
          </h5>
          <ol className="custom-list">
            <li className="custom-list-in">
              Accelerated Time to Market:
              <ul>
                <li>
                  <span className="fw-bold">Rapid Deployment:</span> DevOps
                  practices streamline the software development lifecycle,
                  allowing for faster deployment of cloud-based applications and
                  services.
                </li>
                <li>
                  <span className="fw-bold">Continuous Delivery:</span>{" "}
                  Automated deployment pipelines enable frequent and reliable
                  releases, ensuring that federal agencies can quickly adapt to
                  changing needs and emerging threats.
                </li>
              </ul>
            </li>
            <br />
            <li className="custom-list-in">
              Enhanced Collaboration and Efficiency:
              <ul>
                <li>
                  <span className="fw-bold">Cross-Functional Teams:</span>{" "}
                  DevOps fosters collaboration between development, operations,
                  and security teams, breaking down silos and promoting a shared
                  sense of ownership.
                </li>
                <li>
                  <span className="fw-bold">Automated Processes:</span> By
                  automating routine tasks, such as infrastructure provisioning
                  and testing, DevOps frees up teams to focus on higher-value
                  activities.
                </li>
              </ul>
            </li>
            <br />
            <li className="custom-list-in">
              Improved Security and Compliance:
              <ul>
                <li>
                  <span className="fw-bold">Shift-Left Security:</span>{" "}
                  Integrating security practices into the development process
                  helps identify and address vulnerabilities early on.
                </li>
                <li>
                  <span className="fw-bold">Compliance Automation:</span> DevOps
                  can automate compliance checks and audits, reducing the risk
                  of non-compliance and ensuring adherence to federal
                  regulations.
                </li>
              </ul>
            </li>
            <br />
            <li className="custom-list-in">
              Increased Reliability and Uptime:
              <ul>
                <li>
                  <span className="fw-bold">Continuous Monitoring:</span> DevOps
                  tools enable real-time monitoring of cloud environments,
                  allowing for proactive identification and resolution of
                  issues.
                </li>
                <li>
                  <span className="fw-bold">Automated Incident Response:</span>{" "}
                  Automated incident response procedures can minimize downtime
                  and accelerate recovery efforts.
                </li>
              </ul>
            </li>
            <br />
          </ol>
          <h5 className="fw-bold mb-3">
            Implementing DevOps in Federal Cloud Environments
          </h5>
          <p>
            To successfully implement DevOps in federal cloud initiatives,
            consider the following key steps:
          </p>
          <ol className="custom-list">
            <li className="custom-list-in">
              Cultural Transformation:
              <ul>
                <li>
                  <span className="fw-bold">Foster Collaboration:</span>{" "}
                  Encourage open communication and knowledge sharing between
                  teams.
                </li>
              </ul>
            </li>
            <br />
            <li className="custom-list-in">
              Embrace Continuous Improvement:{" "}
              <span style={{ fontWeight: "400" }}>
                Promote a culture of continuous learning and experimentation.
              </span>{" "}
            </li>
            <br />
            <li className="custom-list-in">
              Blueprint or Reference Models
              <ul>
                <li>
                  Repeatability through Easy-to-Adopt Models: Develop
                  standardized, pre-configured cloud templates tailored to the
                  agency’s specific needs and cloud environment.
                </li>
                <li>
                  Create a library of reusable components, such as virtual
                  machines, storage volumes, and network configurations.
                </li>
                <li>
                  Provide clear documentation and guidelines for deploying and
                  managing cloud resources.
                </li>
              </ul>
            </li>
            <br />
            <li className="custom-list-in">
              Adopt Automation Tools:
              <ul>
                <li>
                  <span className="fw-bold">Infrastructure as Code:</span> Use
                  tools like Terraform or CloudFormation to automate
                  infrastructure provisioning.
                </li>
                <li>
                  <span className="fw-bold">
                    Continuous Integration/Continuous Delivery (CI/CD):
                  </span>{" "}
                  Implement CI/CD pipelines to automate the build, test, and
                  deployment processes.
                </li>
              </ul>
            </li>
            <br />
            <li className="custom-list-in">
              Prioritize Security:
              <ul>
                <li>
                  <span className="fw-bold">Security by Design:</span> Integrate
                  security into every stage of the development lifecycle.
                </li>
                <li>
                  <span className="fw-bold">Regular Security Assessments:</span>{" "}
                  Conduct regular security audits and vulnerability scans.
                </li>
              </ul>
            </li>
            <br />
            <li className="custom-list-in">
              Invest in Training and Skill Development:
              <ul>
                <li>
                  <span className="fw-bold">Upskill Teams:</span> Provide
                  training on DevOps principles, tools, and best practices.
                </li>
                <li>
                  <span className="fw-bold">Hire DevOps Professionals:</span>{" "}
                  Recruit skilled DevOps engineers to drive the adoption of the
                  DevOps culture.
                </li>
              </ul>
            </li>
            <br />
          </ol>
          <p>
            By embracing DevOps, federal agencies can unlock the full potential
            of cloud computing, improve service delivery, and enhance the
            overall efficiency of government operations.
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
              <p className="mt-5 mb-4" style={{ color: "grey", fontSize: "0.85rem" }}>
                Share this post
              </p>
              <div style={{display:'flex', alignItems:"center", gap:"10px"}}>
                <div className="logo-cir"><FacebookShareButton url={shareUrl}><FaFacebook/></FacebookShareButton></div>
                <div className="logo-cir"><LinkedinShareButton url={shareUrl}><IoLogoLinkedin/></LinkedinShareButton></div>
                <div className="logo-cir"><TwitterShareButton url={shareUrl}><FaXTwitter/></TwitterShareButton></div>
                <a href="" className="logo-cir"><IoMdMail/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devops;
