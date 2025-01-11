import React, {useState} from "react";
import "../assets/styles/ContactUs.css";
import { LuPhone } from "react-icons/lu";
import { GrMailOption } from "react-icons/gr";
import { HiOutlineBriefcase } from "react-icons/hi";
const ContactUs = () => {
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
      <div className="industries">
        <h2 className="cont-head-last">CONTACT US</h2>
        <div className="contact-row">
          <div className="contact-box">
            <div>
              <LuPhone style={{fontSize:"2rem", marginBottom:"30px"}} />
              <p>Call</p>
              <a href="tel:571-315-2073">571-315-2073</a>
            </div>
          </div>

          <div className="contact-box">
            <div>
              <GrMailOption style={{fontSize:"2rem", marginBottom:"30px"}} />
              <p>Inquiries</p>
              <a href="mailto:info@thediallogroupllc.com">
                info@thediallogroupllc.com
              </a>
            </div>
          </div>

          <div className="contact-box">
            <div>
              <HiOutlineBriefcase style={{fontSize:"2rem", marginBottom:"30px"}} />
              <p>Business Dev</p>
              <a href="mailto:bd@thediallogroupllc.com">
                bd@thediallogroupllc.com
              </a>
            </div>
          </div>
        </div>
        <div
        className="industries"
        style={{ paddingBottom: "60px" }}
      >
      <br /><br /><br />
        <div className="contact row" style={{ margin: "0" }}>
          <div className="left-cont col-lg-7 mx-auto text-center">
            <h2 className="fw-bold">GET IN TOUCH</h2>
            <p className="fs-6" style={{ fontWeight: "400" }}>
            Do not hesitate to contact us if you have any questions, recommendations, special requests, or would like more information about our products and services. We appreciate your feedback and inquiries.
            </p>
          </div>
          <form className="form col-lg-6 col-md-6 mx-auto" onSubmit={handleSubmit}>
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
    </div>
  );
};

export default ContactUs;
