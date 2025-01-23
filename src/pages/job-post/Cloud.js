import React, { useActionState, useState } from "react";
import "./Jobs.css";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Cloud = () => {
  const nav = useNavigate();
  const [click, setClick] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    cover: "",
  });
  const [fileBase64, setFileBase64] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFile = async (e) => {
    const file = e.target.files[0];
    const size = file.size / 1024 / 1024;
    const limit = 2;
    if (size > limit) {
      alert("File size exceeds the maximum limit of 2 MB.");
      e.target.value = "";
    } else handleFileUpload(e);
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result.split(",")[1]; // Extract the base64 part
      setFileBase64(base64String); // Save the Base64 string in state
      setFormData({
        ...formData,
        [e.target.name]: base64String,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://tdg-new-backend.onrender.com/api/resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if(data.success) {
        setClick(true);
      }
      
    } catch (error) {
      // console.log(error);
      alert("Failed! Try again.");
    }
    // window.location.reload();
  };
  const handleClick = (e) => {
    setClick(false);
    nav("/join-tdg");
  }
  return (
    <div className="industries">
      {click?<div className="modal-baap">
        <div className="modal-chota text-center">
          <h2>Thank You for Applying!</h2>
          <h5>Your Application Has Been Received</h5><br />
          <button
            className="sl-inner-btn-form"
            id="bt-n"
            style={{ width: "max-content", padding:"8px 70px" }}
            onClick={handleClick}
          >
            Close
          </button>
        </div>
      </div>:""}
      <div className="job-head">
        <h3 className="" style={{ fontWeight: "600" }}>
          Position: Cloud Solution Engineer
        </h3>
        <div className="btn-flex">
          <a
            className="sl-inner-btn-form"
            id="bt-n"
            style={{
              width: "max-content",
              padding: "10px 50px",
              fontSize: "1.2rem",
              textDecoration: "none",
            }}
            href="#form-line"
          >
            Apply
          </a>
          <button className="share-job">
            <IoMdMail />
            <div>Share this job</div>
          </button>
        </div>
      </div>
      <div className="job-desc">
        <p className="fw-bold">Our Culture</p>
        <p>
          We are looking for smart, high-energy candidates who are driven to
          make a big impact but above all are passionate about helping our teams
          and partners succeed with their missions!
        </p>
        <br />
        <p className="fw-bold">Benefits</p>
        <ul>
          <li>Health Insurance</li>
          <li>Paid holidays & PTO</li>
          <li>401(k) Plan</li>
          <li>Corporate discount purchase programs</li>
          <li>Flexible work arrangement</li>
        </ul>
        <p className="fw-bold"> About the role</p>
        <p>
          TDG is looking for a Cloud Solution Engineer that is experienced in
          developing and supporting AWS cloud environments. The Solution
          Engineer will play a strategic role in supporting implementation of
          customer projects, supporting program level activities for growth. You
          will lead the design, implementation, and optimization of cloud
          infrastructure and provider elevated support to maintaining cloud
          systems
        </p>
        <ul>
          <li>
            This role works directly to implement cloud related projects that
            meet customers’ requirements. You will plan, design, implement, and
            deliver solutions as well as provide maintenance and support.
          </li>
          <li>
            This role provides technical leadership, support and technical
            governance, expertise related to cloud architectures, DevOps, and
            Operations.
          </li>
          <li>
            Participate and provide technical solutioning as required by the
            proposal teams
          </li>
        </ul>
        <br />
        <p className="fw-bold">Basic Qualifications</p>
        <ul>
          <li>Proficient in research, writing, and good oral communication</li>
          <li>
            Proficient in creating and producing proposed cloud solutions
            architecture diagrams
          </li>
          <li>
            Experience with networking technologies (Software-defined
            Networking, Routing, DNS, Load balancing)
          </li>
          <li>
            Experience with cloud security best practices, identity and access
            management (IAM), encryption, network security, and compliance
            frameworks.
          </li>
          <li>
            Experience with designing, developing, deploying, or testing in
            Amazon Web Services and using tools, including EC2, S3, ELBs, RDS,
            VPCs, security groups, CloudTrail, CloudWatch, or IAM permissions
          </li>
          <li>
            Significant experience in Cloud Technologies (specifically AWS) and
            understanding of Agile, DevOps and Infrastructure as Code (IaC)
          </li>
          <li>
            Familiarity with DevOps practices, continuous integration/continuous
            deployment (CI/CD) pipelines, infrastructure as code (IaC), and
            configuration management tools.Working knowledge of terraform,
            Ansible platform, Chef, Puppet, GitHub, Gitlab, Git, Docker,
            Kubernetes.
          </li>
          <li>
            Strong demonstrated troubleshooting skills with expert knowledge of
            Linux and UNIX
          </li>
          <li>
            Required Certification(s): AWS Certified Solutions Architect or AWS
            DevOps Engineer Professional or equivalent
          </li>
          <li>
            Experience with scripting/programming like Python, PowerShell,
            and/or Bash
          </li>
        </ul>
        <br />
        <br />
        <ul>
          <li>
            Minimum Clearance to Start:{" "}
            <span className="fw-bold">Public Trust</span>
          </li>
          <li>
            Work Status Allowable: <span className="fw-bold">US Citizen</span>
          </li>
        </ul>
        <br />
        <br />
      </div>
      <br />
      <div className="contra-line" id="form-line"></div>
      <div
        className="industries"
        style={{ backgroundColor: "", paddingBottom: "60px" }}
      >
        <div className="contact" id="job-form">
          <h2 className="" style={{ fontWeight: "600" }}>
            To apply, please upload your resume
          </h2>
          <br />
          <form className="form" onSubmit={handleSubmit} method="POST">
            <label style={{ fontWeight: "600" }} htmlFor="">
              Name <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              className="in-text"
              type="text"
              //   placeholder="Name"
              name="name"
              onChange={handleChange}
              required
            />
            <br />
            <label style={{ fontWeight: "600" }} htmlFor="">
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              className="in-text"
              type="email"
              //   placeholder="Email"
              name="email"
              onChange={handleChange}
              required
            />
            <br />
            <label style={{ fontWeight: "600" }} htmlFor="">
              Resume (Max 2MB) <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              className="in-text"
              type="file"
              placeholder=""
              name="resume"
              accept=".pdf"
              onChange={handleFile}
              required
            />
            <br />
            <label style={{ fontWeight: "600" }} htmlFor="">
              Cover Letter (optional)
            </label>
            <input
              className="in-text"
              type="file"
              placeholder=""
              name="cover"
              accept=".pdf"
              onChange={handleFile}
            />
            <button className="sl-inner-btn-form" id="bt-n">
              Apply
            </button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Cloud;
