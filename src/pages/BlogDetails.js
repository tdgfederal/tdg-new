import React, { useState } from "react";
import "../assets/styles/Devops.css";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  MailruShareButton,
} from "react-share";
import { useLocation } from "react-router-dom";

const Cloud = () => {
  const location = useLocation();
  const blog = location.state.blogDetails;

  function parseContentString(inputString) {
    const contentData = [];
    const sections = inputString.split(/(?=\d\.\s)/); // Split by section numbers (e.g., "1.", "2.")

    sections.forEach((section) => {
      const [titleLine, ...contentLines] = section.split(/:\s*/); // Split section into title and content
      const title = titleLine.replace(/^\d\.\s*/, "").trim(); // Remove section number from title

      const items = [];
      const content = contentLines.join(": "); // Recombine content lines
      const subheadingRegex =
        /([A-Z][A-Za-z\s]+?):\s*([^:]*?)(?=(?:[A-Z][A-Za-z\s]+?:|$))/g; // Match subheading and stop before the next subheading or end of content

      let match;
      while ((match = subheadingRegex.exec(content)) !== null) {
        const subheading = match[1].trim(); // Extract subheading (before the colon)
        const description = match[2].trim(); // Extract description (between this subheading and the next one)
        items.push({ subheading, description });
      }

      if (title || items.length > 0) {
        contentData.push({ title, items });
      }
    });

    return contentData;
  }
  const res = parseContentString(blog.matterDesc);
  const matterDesc = [];
  matterDesc.push(res);
  const res2 = parseContentString(blog.implementationDesc);
  const implementationDesc = [];
  implementationDesc.push(res2);
  // console.log("here: ", implementationDesc);
  

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
        alert("From Submitted Successfully!");
        window.location.reload();
      }
    } catch (error) {
      // console.log(error);
      alert("Failed! Try again.");
    }
  };
  const shareUrl = window.location.href;
  return (
    <div className="industries">
      <div
        className="blog-top"
        style={{
          backgroundImage: `url(${blog.image})`,
        }}
      >
        <div className="blog-top-text">{blog.title}</div>
      </div>
      <div className="main-text row" style={{ margin: "0" }}>
        <div className="left-text col-lg-8 col-md-7">
          <p>{blog.description}</p>
          <h5 className="fw-bold mb-3">{blog.matter}:</h5>
          <ol className="custom-list">
            {matterDesc.map((innerArray, i) =>
              innerArray.map((e, j) => (
                <li className="custom-list-in" key={`${i}-${j}`}>
                  {e.title}:
                  <ul>
                    {e.items.map((elem, ind) => (
                      <>
                        <li>
                          <span className="fw-bold" key={ind}>
                            {elem.subheading}:
                          </span>{" "}
                          {elem.description}
                        </li>
                      </>
                    ))}{" "}
                    <br />
                  </ul>
                </li>
              ))
            )}
          </ol>
          <h5 className="fw-bold mb-3">{blog.implementation}:</h5>
          <ol className="custom-list">
            {implementationDesc.map((innerArray, i) =>
              innerArray.map((e, j) => (
                <li className="custom-list-in" key={`${i}-${j}`}>
                  {e.title}:
                  <ul>
                    {e.items.map((elem, ind) => (
                      <>
                        <li>
                          <span className="fw-bold" key={ind}>
                            {elem?.subheading}:
                          </span>{" "}
                          {elem.description}
                        </li>
                      </>
                    ))}{" "}
                    <br />
                  </ul>
                </li>
              ))
            )}
          </ol>
          <h5 className="fw-bold mb-3">Conclusion</h5>
          <p>{blog.conslusion}</p>
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
              <p
                className="mt-5 mb-4"
                style={{ color: "grey", fontSize: "0.85rem" }}
              >
                Share this post
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div className="logo-cir">
                  <FacebookShareButton url={shareUrl}>
                    <FaFacebook />
                  </FacebookShareButton>
                </div>
                <div className="logo-cir">
                  <LinkedinShareButton url={shareUrl}>
                    <IoLogoLinkedin />
                  </LinkedinShareButton>
                </div>
                <div className="logo-cir">
                  <TwitterShareButton url={shareUrl}>
                    <FaXTwitter />
                  </TwitterShareButton>
                </div>
                <a href="" className="logo-cir">
                  <IoMdMail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
