import React, { useState, useEffect } from "react";
import "../assets/styles/Scoop.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Scoop = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios
      .get("https://tdg-new-backend.onrender.com/getBlogs")
      .then((blogs) => setBlog(blogs.data))
      .catch((error) => console.log(error));
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: ".",
    interest: ".",
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
        alert("Form Successfully Submitted!");
        window.location.reload();
      }
    } catch (error) {
      // console.log(error);
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
          {blog
            .filter((e, i) => e.category == "Cloud")
            .map((e, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="each-blog" style={{ height: "100%" }}>
                  <h4>{e.title}</h4>
                  <img src={e.image} alt="" />
                  <p>{e.description.slice(0, 159)}...</p>
                  <Link to={"/blog-details"} state={{ blogDetails: e }}>
                    <button>Read More</button>
                  </Link>
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
            {blog
              .filter((e, i) => e.category === "Project")
              .map((e, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div className="each-blog" style={{ height: "100%" }}>
                    <h4>{e.title}</h4>
                    <img src={e.image} alt="" />
                    <p>{e.description.slice(0, 159)}...</p>
                    <Link to={"/blog-details"} state={{ blogDetails: e }}>
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
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />
              <br />
              <input
                className="my-3"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <br />
              <textarea
                name="message"
                placeholder="Message"
                id=""
                onChange={handleChange}
              ></textarea>
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
