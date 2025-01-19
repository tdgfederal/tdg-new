import React, { useState } from "react";
import "./Case.css";

const Case2 = () => {
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
  return (
    <div className="industries">
      <div className="case-head">
        <p>Case Study</p>
        <h2>
          TRANSFORMING FEDERAL HEALTHCARE ARCHITECTURE: A CLOUD MIGRATION
          SUCCESS STORY
        </h2>
      </div>
      <div className="val" id="val">
        <div className="val-h">
          <h1>$100M</h1>
          <p>In annual savings</p>
        </div>
        <div className="val-h" style={{ margin: "0 30px" }}>
          <h1>50%</h1>
          <p>More web traffic handled</p>
        </div>
        <div className="val-h">
          <h1>20%</h1>
          <p>Reduction in security incidents</p>
        </div>
        <div className="val-h">
          <h1>30%</h1>
          <p>Faster feature implementation</p>
        </div>
      </div>
      <div style={{ backgroundColor: "#f8f8f8", paddingTop: "100px" }}>
        <h2 className="text-center fw-bold" style={{ fontSize: "2.3rem" }}>
          RESULTS AND BENEFITS
        </h2>
        <div className="row new-row" style={{ margin: "0" }}>
          <div className="col-lg-6 col-md-6 my-auto new-row-col">
            By successfully supporting the execution of this complex cloud
            migration, TDG demonstrated its expertise in delivering innovative
            solutions that drive digital transformation.
          </div>
          <div className="col-lg-6 col-md-6 new-row-col-2">
            <ul>
              <li className="fs-4" style={{fontWeight:"600"}}>Significant Cost Savings</li>
            </ul>
            <p>
              <span className="fw-bold">Reduced operational costs by $100 million annually</span> through
              optimized resource utilization and cloud cost efficiencies.
            </p><br />
            <ul>
              <li className="fs-4" style={{fontWeight:"600"}}>Improved Performance</li>
            </ul>
            <p>
            Enhanced system performance and responsiveness, <span className="fw-bold">leading to a 30% faster user experience.</span>
            </p><br />
            <ul>
              <li className="fs-4" style={{fontWeight:"600"}}>Enhanced Security</li>
            </ul>
            <p>
            Strengthened security posture through advanced security measures and compliance with industry standards, <span className="fw-bold">resulting in a 20% reduction in security incidents.</span>
            </p><br />
            <ul>
              <li className="fs-4" style={{fontWeight:"600"}}>Increased Scalability</li>
            </ul>
            <p>
            Enabled the platform to handle <span className="fw-bold"> 50% more traffic during peak enrollment periods.</span>
            </p><br />
            <ul>
              <li className="fs-4" style={{fontWeight:"600"}}>Accelerated Innovation</li>
            </ul>
            <p>
            Adopted a DevOps approach to accelerate development and deployment cycles,<span className="fw-bold"> leading to a 30% reduction in time to market for new features.</span>
            </p><br />
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
              src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/untitled-136.png?w=800"
              alt=""
              style={{ transform: "rotate(0deg)", borderRadius: "0" }}
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
              TDG played a pivotal role in the successful cloud migration of a
              Centers for Medicare and Medicaid Services (CMS) healthcare
              platform.
              <span className="fw-bold">
                This complex project involved migrating over 50 applications
                across 13 CMS centers from on-premise data centers to a
                multi-cloud environment (AWS & Azure).
              </span>{" "}
              Through strategic planning, expert execution, and a focus on cost
              optimization, the project team delivered significant benefits to
              CMS, including substantial cost savings, improved efficiency, and
              enhanced scalability.
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
                The Centers for Medicare and Medicaid Services (CMS)
              </span>{" "}
              is a federal agency within the U.S. Department of Health and Human
              Services. CMS oversees Medicare, Medicaid, the Children’s Health
              Insurance Program (CHIP), and the Health Insurance Marketplace.
              The agency’s healthcare.gov platform is a critical component of
              the Affordable Care Act, facilitating enrollment in health
              insurance plans.
            </p>
          </div>
          <div
            className="approach-left col-lg-6 col-md-6"
            style={{ borderRadius: "12px" }}
          >
            <img
              src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/12/untitled-139-scaled.jpg?w=800"
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
              src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/12/untitled-138-scaled.jpg?w=800"
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
                The project aimed to modernize the healthcare platform by
                migrating it to a cloud-native architecture. Key objectives
                included:
              </div>
              <ol>
                <li>
                  <span className="fw-bold">Cost Reduction: </span>
                  Lowering operational costs and optimizing resource
                  utilization.
                </li>
                <li>
                  <span className="fw-bold">Improved Performance: </span>
                  Enhancing system performance and responsiveness.
                </li>
                <li>
                  <span className="fw-bold">Enhanced Security: </span>
                  Strengthening security measures to protect sensitive health
                  information.
                </li>
                <li>
                  <span className="fw-bold">Increased Scalability: </span>
                  Enabling the platform to handle fluctuating workloads,
                  especially during peak enrollment periods.
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
                To achieve these objectives, TDG supported the prime contractor
                in employing a comprehensive approach:
              </div>
              <ol>
                <li>
                  <span className="fw-bold">Strategic Planning:</span> Developed
                  a detailed migration plan, including risk assessments, cost
                  estimates, and timelines.
                </li>
                <li>
                  <span className="fw-bold">Cloud Platform Selection:</span>{" "}
                  Evaluated AWS and Azure to determine the optimal cloud
                  platform for each application, considering factors like
                  security, compliance, and cost.
                </li>
                <li>
                  <span className="fw-bold">Infrastructure Modernization:</span>{" "}
                  Migrated on-premise infrastructure to cloud-native services,
                  including virtual machines, databases, and storage.
                </li>
                <li>
                  <span className="fw-bold">DevOps Implementation:</span>{" "}
                  Adopted DevOps practices to automate infrastructure
                  provisioning, application deployment, and configuration
                  management.
                </li>
                <li>
                  <span className="fw-bold"> Security and Compliance:</span>{" "}
                  Implemented robust security measures to protect sensitive
                  data, including encryption, access controls, and regular
                  security assessments.
                </li>
                <li>
                  <span className="fw-bold"> Performance Optimization:</span>{" "}
                  Optimized the platform’s performance through load testing,
                  capacity planning, and performance monitoring.
                </li>
              </ol>
            </p>
          </div>
          <div
            className="approach-left col-lg-6 col-md-6"
            style={{ borderRadius: "12px" }}
          >
            <img
              src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/12/untitled-137-scaled.jpg?w=800"
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
                and identified migration candidates.
              </div>
            </div>
          </div>
          <div className="each-impl">
            <div>
              <h2>2</h2>
              <div className="fw-bold mb-1">Cloud Migration:</div>
              <div>
                Migrated applications and data to the target cloud environment,
                ensuring minimal downtime and data integrity.
              </div>
            </div>
          </div>
          <div className="each-impl">
            <div>
              <h2>3</h2>
              <div className="fw-bold mb-1">Infrastructure Optimization:</div>
              <div>
                Optimized cloud resources to reduce costs and improve
                performance.
              </div>
            </div>
          </div>
          <div className="each-impl">
            <div>
              <h2>4</h2>
              <div className="fw-bold mb-1">DevOps Implementation:</div>
              <div>
                Implemented a DevOps pipeline to automate deployment and
                configuration management.
              </div>
            </div>
          </div>
          <div className="each-impl">
            <div>
              <h2>5</h2>
              <div className="fw-bold mb-1">Security and Compliance: </div>
              <div>
                Established security controls and implemented continuous
                monitoring.
              </div>
            </div>
          </div>
          <div className="each-impl">
            <div>
              <h2>6</h2>
              <div className="fw-bold mb-1">Performance Tuning: </div>
              <div>
                Fine-tuned the platform to optimize performance and
                responsiveness.
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

export default Case2;
