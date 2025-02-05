import React, {useState} from "react";
import "../assets/styles/Contact.css";
import { LuPhone } from "react-icons/lu";
import { GrMailOption } from "react-icons/gr";
import { HiOutlineBriefcase } from "react-icons/hi";

const Contact = ({setCont}) => {
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
        alert("Thank you for reaching out!");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      alert("Failed! Try again.");
    }
  };
  return (
    <div className="contact-modal">
      <form className="modal-in" onSubmit={handleSubmit}>
        <div className="cross" onClick={()=>setCont(false)}>x</div>
        <h1>Contact us today</h1>
        <label style={{ fontWeight: "600" }} htmlFor="">
          Name <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <input className="in-text" type="text" placeholder="Name" name="name" onChange={handleChange}/>
        <br />
        <label style={{ fontWeight: "600" }} htmlFor="">
          Email <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <input className="in-text" type="email" placeholder="Email" name="email" onChange={handleChange} />
        <br />
        <label style={{ fontWeight: "600" }} htmlFor="">
          Organization <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <input className="in-text" type="text" placeholder="" name="organization" onChange={handleChange}/>
        <br />
        <div style={{ fontWeight: "600", marginBottom: "-20px" }}>
          Area of interest
        </div>
        <br />
        <select name="interest" id="" onChange={handleChange}>
          <option value="General Information">General Information</option>
          <option
            value="Partnership Opportunities"
          >
            Partnership Opportunities
          </option>
          <option value="Careers">Careers</option>
          <option value="Others">Others</option>
        </select>
        <label style={{ fontWeight: "600" }} htmlFor="">
          Message
        </label>
        <br />
        <textarea name="message" placeholder="Message" id="" onChange={handleChange}></textarea>
        <br />
        <button className="sl-inner-btn-form">Submit</button>
        <div className="my-5" style={{border:"1px solid grey", width:"100%", padding:"0"}}></div>
        <div>
            <p className="fw-bold text-center">The Diallo Group</p>
            <div className="contact-last-form" style={{display:"flex", alignItems:"center", justifyContent:"space-around", flexWrap:"wrap"}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"5px"}}>
                    <LuPhone/>
                    <a href="tel:571-315-2073">571-315-2073</a>
                </div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"5px"}}>
                    <GrMailOption/>
                    <a href="mailto:info@thediallogroupllc.com">info@thediallogroupllc.com</a>
                </div>
              </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
