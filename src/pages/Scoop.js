import React, {useState} from "react";
import "../assets/styles/Scoop.css";
import {Link} from "react-router-dom"

const Scoop = () => {
  const cloudBlog = [
    {
      heading:
        "DevOps: The Key to Successful Cloud Implementation in the Federal Government",
      img: "https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/12/untitled-93.png?resize=1024%2C683",
      description:
        "The federal government's increasing reliance on cloud computing has brought about a paradigm shift in how IT services are delivered.",
      link: "/blogs/devops",
    },
    {
      heading:
        "Cloud Computing: A Lifeline for Federal Public Health in Disaster Recovery",
      img: "https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/12/untitled-92.png?resize=1024%2C683",
      description:
        "In today's world of frequent natural disasters and global health emergencies, federal public health agencies face unprecedented challenges.",
      link: "/blogs/cloud",
      },
  ];
  const projectBlog = [
    {
      heading:
        "Risk Management: A Critical Component of Federal Health Project Management",
      img: "https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/12/untitled-92-copy.png?resize=1024%2C683",
      description:
        "In the complex landscape of federal health projects, effective risk management is essential to ensure project success, minimize potential disruptions, and protect public health.",
      link: "http://www.thediallogroupllc.com/2024/12/10/risk-management-a-critical-component-of-federal-health-project-management/",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization:".",
    interest:".",
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
      <div className="scoop-top industries row" style={{ margin: "0" }}>
        <div className="col-lg-6 col-md-6">
          <p
            id="bt-scoop"
            style={{ marginBottom: "-2px", borderTop: "1px solid white" }}
          >
            Scoop:
          </p>
          <p>The Latest from TDG</p>
        </div>
        <div id="nbt" className="col-lg-6 col-md-6">
          Welcome to the TDG Scoop, your go-to source for the latest news,
          insights, and updates from TDG. We’re dedicated to fostering
          innovation and driving positive change. Explore our latest projects,
          partnerships, and thought leadership to see how we’re making a
          difference.
        </div>
      </div>
      <div className="industries">
        <div className="blogs-head">
          <h2>Cloud Series Blogs</h2>
          <div className="blog-line"></div>
        </div>
        <div className="blogs row" style={{ margin: "0" }}>
          {cloudBlog.map((e, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="each-blog" style={{height:"100%"}}>
                <h4>{e.heading}</h4>
                <img src={e.img} alt="" />
                <p>{e.description}</p>
                <a href={e.link}>
                  <button>Read More</button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <div style={{ paddingBottom: "70px", backgroundColor: "#f8f8f8" }}>
          <div className="blogs-head">
            <h2>Project Management Series Blogs</h2>
            <div className="blog-line"></div>
          </div>
          <div className="blogs row" style={{ margin: "0" }}>
            {projectBlog.map((e, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="each-blog">
                  <h4>{e.heading}</h4>
                  <img src={e.img} alt="" />
                  <p>{e.description}</p>
                  <Link to={e.link}>
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
        <div className="scoop-bottom">
          <div className="scoop-form">
            <h1 style={{ fontWeight: "600" }}>Send Us A Message</h1>
            <p>Let us know what you think</p>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" name="name"  onChange={handleChange}/>
              <br />
              <input className="my-3" type="email" placeholder="Email" name="email"  onChange={handleChange}/>
              <br />
              <textarea name="message" placeholder="Message" id="" onChange={handleChange}></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Scoop;
