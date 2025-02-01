import React, { useState } from "react";
import "./Case.css";
import cs1 from "../../assets/images/cs1.jpg";
import cs2 from "../../assets/images/cs2.jpg";

const Case1 = () => {
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
    <div className="industries">
      <div className="case-head">
        <p>Case Study</p>
        <h2>FROM LEGACY TO LEADING-EDGE: A FEDERAL IT SUCCESS STORY</h2>
      </div>
      <div className="val" id="val">
        <div className="val-h">
          <h1>70%</h1>
          <p>Reduction in ec2 instances</p>
        </div>
        <div className="val-h" style={{ margin: "0 30px" }}>
          <h1>33%</h1>
          <p>Reduction in RDS instances</p>
        </div>
        <div className="val-h">
          <h1>64%</h1>
          <p>Improvement in load balancing</p>
        </div>
        <div className="val-h">
          <h1>2</h1>
          <p>Months project timeline</p>
        </div>
      </div>
      <div style={{ backgroundColor: "#f8f8f8", paddingTop: "100px" }}>
        <h2 className="text-center fw-bold" style={{ fontSize: "2.3rem" }}>
          RESULTS AND BENEFITS
        </h2>
        <br />
        <br />
        <br />
        <br />
        <div className="all-row">
          <div className="row" style={{ margin: "0" }}>
            <div className="col-lg-6 col-md-6">
              <div className="left-align">
                <h5 style={{ fontWeight: "600" }}>Successful Migration</h5>
                <p>
                  Successfully migrated the application to a new network
                  architecture, improving performance and scalability.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="right-align">
                <h5 style={{ fontWeight: "600" }}>Enhanced Security</h5>
                <p>
                  Implemented robust security measures to comply with government
                  regulations and protect sensitive data.
                </p>
              </div>
            </div>
          </div>
          <div className="row my-4" style={{ margin: "0" }}>
            <div className="col-lg-6 col-md-6">
              <div className="left-align">
                <h5 style={{ fontWeight: "600" }}>Reduced Costs</h5>
                <p>
                  Optimized infrastructure, reduced server footprint, and
                  leveraged cost-effective cloud services.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="right-align">
                <h5 style={{ fontWeight: "600" }}>Improved Efficiency</h5>
                <p>
                  Automated infrastructure provisioning, software deployment,
                  and configuration management, reducing manual effort and
                  accelerating delivery.
                </p>
              </div>
            </div>
          </div>
          <div className="row my-4" style={{ margin: "0" }}>
            <div className="col-lg-6 col-md-6">
              <div className="left-align">
                <h5 style={{ fontWeight: "600" }}>Enhanced Collaboration</h5>
                <p>
                  Fostered collaboration between TDG and the agency’s team
                  through regular communication and knowledge sharing.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="right-align">
                <h5 style={{ fontWeight: "600" }}>Increased Agility</h5>
                <p>
                  Adopted an Agile approach to prioritize tasks, adapt to
                  changing requirements, and accelerate delivery.
                </p>
              </div>
            </div>
          </div>
          <div className="row" style={{ margin: "0" }}>
            <div className="col-lg-6 col-md-6">
              <div className="left-align">
                <h5 style={{ fontWeight: "600" }}>Improved User Experience</h5>
                <p>
                  Delivered a more reliable, secure, and performant application.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              {" "}
              <div className="right-align">
                <h5 style={{ fontWeight: "600" }}>Streamlined Processes</h5>
                <p>
                  Ability to stand up a server in a matter of minutes instead of
                  days or weeks.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="contra-top industries">
        <div className="approach row" style={{ margin: "0" }}>
          <div
            className="approach-left col-lg-6 col-md-6"
            style={{ borderRadius: "12px" }}
          >
            <img
              src={cs1}
              alt=""
              style={{ transform: "rotate(180deg)", borderRadius: "0" }}
            />
          </div>
          <div className="approach-right col-lg-6 col-md-6 my-auto">
            <h2
              className="mb-3"
              style={{ fontWeight: "700", fontSize: "2.2rem" }}
            >
              EXECUTIVE SUMMARY
            </h2>
            <p>
              TDG successfully delivered a comprehensive solution to modernize a
              legacy LAMP stack application for a federal government agency,
              significantly improving its performance, security, and
              scalability.{" "}
              <span className="fw-bold">
                By leveraging a DevOps framework, infrastructure as code, and
                cloud-native technologies, we streamlined operations, reduced
                costs, and enhanced the overall application experience.
              </span>
            </p>
          </div>
        </div>
        <div className="approach row" style={{ margin: "0" }}>
          <div className="approach-right col-lg-6 col-md-6 my-auto">
            <h2
              className="mb-3"
              style={{ fontWeight: "700", fontSize: "2.2rem" }}
            >
              CLIENT BACKGROUND
            </h2>
            <p>
              <span className="fw-bold">
                A federal government agency relied on a legacy LAMP stack
                application deployed in the cloud.
              </span>{" "}
              The application was outdated, lacked automation, and struggled to
              meet evolving security and performance requirements. The agency
              faced challenges maintaining the application, migrating to a new
              architecture, and ensuring compliance with government regulations.
            </p>
          </div>
          <div
            className="approach-left col-lg-6 col-md-6"
            style={{ borderRadius: "12px" }}
          >
            <img
              src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/12/untitled-129-copy.jpg?fit=1024%2C1024&ssl=1"
              alt=""
              style={{ transform: "scaleX(-1)", borderRadius: "0" }}
            />
          </div>
        </div>
        <div className="approach row" style={{ margin: "0" }}>
          <div
            className="approach-left col-lg-6 col-md-6"
            style={{ borderRadius: "12px" }}
          >
            <img
              src={cs2}
              alt=""
              style={{ transform: "rotate(0deg)", borderRadius: "0" }}
            />
          </div>
          <div className="approach-right col-lg-6 col-md-6 my-auto">
            <h2
              className="mb-3"
              style={{ fontWeight: "700", fontSize: "2.2rem" }}
            >
              PROJECT OVERVIEW
            </h2>
            <p>
              <div className="mb-3">
                The project aimed to transform the agency’s legacy application
                by:
              </div>
              <ol>
                <li>
                  <span className="fw-bold">
                    Modernizing the Application Architecture:{" "}
                  </span>
                  Migrating the application to a new architecture, improving its
                  performance and scalability.
                </li>
                <li>
                  <span className="fw-bold">
                    Implementing a DevOps Framework:{" "}
                  </span>
                  Automating infrastructure provisioning, software deployment,
                  and lifecycle management using Terraform and Ansible, reducing
                  deployment time and human error.
                </li>
                <li>
                  <span className="fw-bold">Optimizing the Email System: </span>
                  Replacing the legacy email system with AWS SES and AWS
                  Workmail, enhancing security and reliability.
                </li>
              </ol>
            </p>
          </div>
        </div>
        <div className="approach row" style={{ margin: "0" }}>
          <div className="approach-right col-lg-6 col-md-6 my-auto">
            <h2
              className="mb-3"
              style={{ fontWeight: "700", fontSize: "2.2rem" }}
            >
              SOLUTIONS APPROACH{" "}
            </h2>
            <p>
              <div className="mb-3">
                To address the agency’s challenges, TDG adopted a multi-faceted
                approach:
              </div>
              <ol>
                <li>
                  <span className="fw-bold">Architectural Redesign:</span>{" "}
                  Simplified the application architecture by consolidating
                  servers and databases, reducing costs and improving
                  performance.
                </li>
                <li>
                  <span className="fw-bold">
                    DevOps Framework Implementation:
                  </span>{" "}
                  Established a robust DevOps framework to automate
                  infrastructure provisioning, software deployment, and
                  configuration management.
                </li>
                <li>
                  <span className="fw-bold">Cloud-Native Technologies:</span>{" "}
                  Leveraged AWS services like SES, Workmail, and CloudFront to
                  enhance security, scalability, and performance.
                </li>
                <li>
                  <span className="fw-bold">Agile Methodology:</span> Adopted an
                  Agile approach to prioritize tasks, ensure flexibility, and
                  accelerate delivery.
                </li>
                <li>
                  <span className="fw-bold">Security and Compliance:</span>{" "}
                  Implemented stringent security measures to comply with
                  government regulations, including regular patching,
                  vulnerability scanning, and access controls.
                </li>
              </ol>
            </p>
          </div>
          <div
            className="approach-left col-lg-6 col-md-6"
            style={{ borderRadius: "12px" }}
          >
            <img
              src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/12/untitled-130-copy.jpg?w=800"
              alt=""
              style={{ transform: "scaleX(-1)", borderRadius: "0" }}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <h2
          className="mb-3 text-center"
          style={{ fontWeight: "700", fontSize: "2.2rem" }}
        >
          IMPLEMENTATION PROCESS
        </h2>
      </div>
      <div className="impl-main" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="impl">
          <div className="each-impl">
            <div>
              <h2>1</h2>
              <div className="fw-bold mb-1">Assessment and Planning:</div>
              <div>
                Conducted a thorough assessment of the existing infrastructure
                and application, identified pain points, and developed a
                detailed project plan.
              </div>
            </div>
          </div>
          <div className="each-impl">
            <div>
              <h2>2</h2>
              <div className="fw-bold mb-1">Infrastructure Modernization:</div>
              <div>
                Migrated the application to a new network architecture,
                utilizing AWS services to optimize performance and
                cost-efficiency.
              </div>
            </div>
          </div>
          <div className="each-impl">
            <div>
              <h2>3</h2>
              <div className="fw-bold mb-1">
                DevOps Framework Implementation:
              </div>
              <div>
                Implemented a robust DevOps framework to automate infrastructure
                provisioning, software deployment, and configuration management.
              </div>
            </div>
          </div>
          <div className="each-impl">
            <div>
              <h2>4</h2>
              <div className="fw-bold mb-1">Email System Redesign:</div>
              <div>
                Replaced the legacy email system with AWS SES and AWS Workmail,
                enhancing security, reliability, and scalability.
              </div>
            </div>
          </div>
          <div className="each-impl">
            <div>
              <h2>5</h2>
              <div className="fw-bold mb-1">
                Training and Knowledge Transfer:
              </div>
              <div>
                Provided comprehensive training to the agency’s team on the new
                infrastructure, DevOps practices, and cloud-native technologies.
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="contra-line"></div>
      <br />
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
  );
};

export default Case1;
