import React, { useState } from "react";
import "./Jobs.css";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Devops = () => {
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
      if (data.success) {
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
  };
  return (
    <div className="industries">
      {click ? (
        <div className="modal-baap">
          <div className="modal-chota text-center">
            <h2>Thank You for Applying!</h2>
            <h5>Your Application Has Been Received</h5>
            <br />
            <button
              className="sl-inner-btn-form"
              id="bt-n"
              style={{ width: "max-content", padding: "8px 70px" }}
              onClick={handleClick}
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="job-head">
        <h3 className="" style={{ fontWeight: "600" }}>
          Position: Senior DevOps Engineer
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
        <p>
          TDG is looking for smart, high-energy candidates who are driven to
          make a big impact but above all are passionate about helping our teams
          and partners succeed with their missions!
        </p>
        <p>
          Job Type: <span className="fw-bold">Full-time employee</span>
        </p>
        <p>
          Location(s): <span className="fw-bold">Remote</span>
        </p>
        <br />
        <p className="fw-bold">Job Overview:</p>
        <p>
          The Diallo Group, LLC is seeking a talented and experienced Senior
          DevOps Engineer to join our dynamic team. The ideal candidate will be
          responsible for designing, implementing, and maintaining our cloud
          infrastructure and automation processes. This role will play a crucial
          part in ensuring the reliability, scalability, and security of our
          systems.
        </p>
        <br />
        <p className="fw-bold">Responsibilities:</p>
        <ul>
          <li>
            Design and implement scalable, reliable, and secure cloud
            infrastructure
          </li>
          <li>
            Develop and maintain automation scripts for deployment, monitoring,
            and maintenance
          </li>
          <li>
            Collaborate with cross-functional teams to troubleshoot and resolve
            infrastructure issues
          </li>
          <li>
            Implement best practices for continuous integration and continuous
            deployment
          </li>
          <li>Monitor system performance and implement improvements</li>
          <li>
            Stay up-to-date on industry trends and best practices in DevOps
          </li>
        </ul>
        <br />
        <p className="fw-bold">Requirements:</p>
        <ul>
          <li>
            Bachelor’s degree in Computer Science, Engineering, or related field
          </li>
          <li>5+ years of experience in DevOps or a related field</li>
          <li>Proficiency in cloud platforms such as AWS or Azure</li>
          <li>
            Experience with configuration management tools such as Ansible,
            Chef, or Puppet
          </li>
          <li>Strong scripting skills in Python, Bash, or similar languages</li>
          <li>
            Knowledge of containerization technologies such as Docker or
            Kubernetes
          </li>
          <li>Excellent communication and collaboration skills</li>
        </ul>
        <br />
        <p className="fw-bold">
          **Note:**{" "}
          <span style={{ fontWeight: "400" }}>
            The Diallo Group, LLC is an equal opportunity employer and does not
            discriminate against any employee or applicant for employment based
            on race, color, religion, sex, national origin, age, disability, or
            genetic information. We comply with all applicable laws regarding
            non-discrimination and will not inquire about an applicant’s
            criminal history during the hiring process.
          </span>
        </p>
        <br />
        <p>
          If you are a passionate and experienced DevOps Engineer looking to
          make a difference, we would love to hear from you! Apply now to join
          our team at The Diallo Group, LLC.
        </p>
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

export default Devops;
