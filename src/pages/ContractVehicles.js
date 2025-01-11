import React, { useState } from "react";
import "../assets/styles/ContractVehicles.css";

const ContractVehicles = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };
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
    <div>
      <div className="contra-top industries">
        <h2 className="mb-3" style={{ textAlign: "start", fontWeight: "700" }}>
          CONTRACT VEHICLES
        </h2>
        <p>
          Navigating government procurement can be complex. That’s why we’ve
          made it our mission to streamline the process for you. With a variety
          of contract vehicles, including 8(a) sole sources and GSA MAS,
          accessing our innovative solutions has never been easier. No matter
          your agency’s specific needs, we’re ready to provide efficient and
          cost-effective solutions.
        </p>
      </div>
      <div className="contra-acc industries">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                onClick={() => handleAccordionToggle("collapseOne")}
              >
                <span style={{ marginRight: "25px", fontSize: "1.75rem" }}>
                  {openAccordion === "collapseOne" ? "-" : "+"}
                </span>{" "}
                8(a) Sole Source
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <img
                  className="acc-body-img"
                  src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/8aCertified.png?resize=919%2C1024&ssl=1"
                  alt=""
                />
                <div className="acc-body-text">
                  <p className="fw-bold">
                    How to Sole Source a Contract with Us
                  </p>
                  <ol>
                    <li>
                      <p>
                        <span className="fw-bold">
                          Identify Your Agency’s Contracting Officer:
                        </span>{" "}
                        Determine the appropriate contracting officer within
                        your agency who is responsible for the specific
                        procurement.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fw-bold">
                          Review Our Capabilities:
                        </span>{" "}
                        Familiarize yourself with our company’s capabilities and
                        expertise. You can find more information on our website,
                        or reach out to our business development team for a
                        detailed overview.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fw-bold">
                          Determine Sole Source Eligibility:
                        </span>{" "}
                        Consult with your agency’s legal counsel to confirm that
                        sole source contracting is appropriate for your specific
                        procurement and that our company meets the necessary
                        criteria.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fw-bold">Procurement Process:</span>{" "}
                        Your contracting officer will initiate the sole source
                        procurement process by issuing a solicitation directly
                        to our company.
                      </p>
                    </li>
                  </ol>
                  <p className="fw-bold mt-5 mb-3">
                    Expiration Date: 01/21/2031
                  </p>
                  <p className="fw-bold">Sole Source Threshold</p>
                  <p className="" style={{ lineHeight: "0px" }}>
                    $7 million manufacturing NAICS
                  </p>
                  <p className="">$4.5 million all other contract NAICS</p>
                  <p className="fw-bold mt-5">Contact Us:</p>
                  <p className="fw-bold">Djibril Diallo</p>
                  <p className="fw-bold">bd@thediallogroupllc.com</p>
                  <p className="fw-bold">571-315-2073</p>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                onClick={() => handleAccordionToggle("collapseTwo")}
              >
                <span style={{ marginRight: "25px", fontSize: "1.75rem" }}>
                  {openAccordion === "collapseTwo" ? "-" : "+"}
                </span>{" "}
                GSA Multiple Award Schedule (MAS)
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <img
                  className="acc-body-img"
                  src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/GSAMAS.png?resize=768%2C768&ssl=1"
                  alt=""
                />
                <div className="acc-body-text">
                  <p className="fw-bold">Why Choose TDG’s GSA MAS?</p>
                  <ul>
                    <li>
                      <p>
                        <span className="fw-bold">Simplified Procurement:</span>{" "}
                        As a GSA MAS contractor, we offer streamlined
                        procurement processes, reducing administrative burdens
                        and accelerating contract awards.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fw-bold">Competitive Pricing:</span>{" "}
                        Our competitive pricing ensures that you receive the
                        best value for your federal dollars.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fw-bold">Proven Performance:</span>{" "}
                        With a strong track record of delivering high-quality
                        solutions, we are committed to exceeding your
                        expectations.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fw-bold">
                          Extensive Product and Service Offerings:
                        </span>{" "}
                        Our comprehensive portfolio includes:
                        <p>
                          <span className="fw-bold">- 518210C:</span> Cloud
                          Computing and Cloud Related IT Professional Services
                        </p>
                        <p>
                          <span className="fw-bold">- 54151S:</span> Information
                          Technology Professional Services
                        </p>
                        <p>
                          <span className="fw-bold">- OLM:</span> Order Level
                          Materials
                        </p>
                      </p>
                    </li>
                  </ul><br />
                  <p className="fw-bold">How to Purchase Through GSA MAS</p>
                  <ol>
                    <li>
                      <p>
                        <span className="fw-bold">
                        Identify Your Agency’s Contracting Officer:
                        </span>{" "}
                        Determine the appropriate contracting officer within your agency who is responsible for the specific procurement.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fw-bold">
                        Review Our GSA Schedule Contract:
                        </span>{" "}
                        Familiarize yourself with our GSA Schedule contract number and the specific products and services we offer.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fw-bold">
                        Place a Purchase Order:
                        </span>{" "}
                        Your agency’s contracting officer can place a purchase order directly with us, utilizing the GSA MAS contract number.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fw-bold">Receive Your Products or Services:</span>{" "}
                        We will deliver your products or services as outlined in the purchase order.
                      </p>
                    </li>
                  </ol>
                  <p className="fw-bold mt-5">Contact Us:</p>
                  <p className="fw-bold">Djibril Diallo</p>
                  <p className="fw-bold">bd@thediallogroupllc.com</p>
                  <p className="fw-bold">571-315-2073</p>
                  <p className="fw-bold">Contract Number: 47QTCA23D00BR</p>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                onClick={() => handleAccordionToggle("collapseThree")}
              >
                <span style={{ marginRight: "25px", fontSize: "1.75rem" }}>
                  {openAccordion === "collapseThree" ? "-" : "+"}
                </span>{" "}
                NAICS Codes
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{display:"block"}}>
                <p><span className="fw-bold">518210</span> - Computing Infrastructure Providers, Data Processing, Web Hosting, And Related Services (Primary)</p>
                <p><span className="fw-bold">541330</span> - Engineering Services</p>
                <p><span className="fw-bold">541511</span> - Custom Computer Programming Services</p>
                <p><span className="fw-bold">541512</span> - Computer Systems Design Services</p>
                <p><span className="fw-bold">541611</span> - Administrative Management And General Management Consulting Services</p>
                <p><span className="fw-bold">541614</span> - Process, Physical Distribution, And Logistics Consulting Services</p>
                <p><span className="fw-bold">541618</span> - Other Management Consulting Services</p>
                <p><span className="fw-bold">541990</span> - All Other Professional, Scientific, And Technical Services</p>
                <p><span className="fw-bold">611420</span> - Computer Training</p>
              </div>
            </div>
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
            Ready to optimize your programs and drive positive change? Contact us today to learn more about how our program governance and delivery services can help you achieve your goals.
            </p>
            <img className="mb-4" src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/untitled-127.jpg?resize=1024%2C683&ssl=1" alt="" style={{width:"100%", borderRadius:"12px"}} />
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
    </div>
  );
};

export default ContractVehicles;
