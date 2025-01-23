import React, { useState } from "react";

const Create = () => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    image: "",
    description: "",
    matter: "",
    matterDesc: "",
    implementation: "",
    implementationDesc: "",
    conslusion: "",
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
        "https://tdg-new-backend.onrender.com/api/create-blog",
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
      // console.log(error);
      alert("Failed! Try again.");
    }
  };
  // console.log("form:", formData);

  return (
    <div className="industries">
      <h1>CREATE BLOG</h1>
      <div className="right-text col-lg-8 col-md-10 mx-auto">
        <div className="scoop-bottom sticky">
          <div
            className="scoop-form"
            style={{ padding: "30px 30px 50px 30px", textAlign: "start" }}
          >
            <h4 style={{ fontWeight: "600" }}>Create Blog</h4>
            <p style={{ marginTop: "0", fontSize: "0.8rem" }}>
              Let us know what you think
            </p>
            <form onSubmit={handleSubmit}>
              <select
                name="category"
                className="mb-3"
                id=""
                style={{ padding: "8px", fontSize: "0.75rem" }}
                onChange={handleChange}
              >
                <option value="">--Select Category--</option>
                <option value="Cloud">Cloud</option>
                <option value="Project">Project</option>
              </select>
              <br />
              <input
                type="text"
                placeholder="Enter your blog title here"
                name="title"
                onChange={handleChange}
                style={{ padding: "10px 15px", fontSize: "0.75rem" }}
              />
              <br />
              <input
                className="my-3"
                type="text"
                placeholder="Enter the URL for your blog's featured image"
                name="image"
                onChange={handleChange}
                style={{ padding: "10px 15px", fontSize: "0.75rem" }}
              />
              <br />
              <textarea
                name="description"
                placeholder="e.g., A brief overview of the blog's topic"
                id=""
                onChange={handleChange}
                style={{ padding: "10px 15px", fontSize: "0.75rem" }}
              ></textarea>
              <input
                className="mb-3"
                name="matter"
                type="text"
                placeholder="e.g., Why DevOps Matters"
                id=""
                onChange={handleChange}
                style={{ padding: "10px 15px", fontSize: "0.75rem" }}
              />
              <textarea
                name="matterDesc"
                placeholder="e.g.,
                1.Accelerated Time to Market:
Rapid Deployment: DevOps practices streamline the software development lifecycle, allowing for faster deployment of cloud-based applications and services.
Continuous Delivery: Automated deployment pipelines enable frequent and reliable releases, ensuring that federal agencies can quickly adapt to changing needs and emerging threats.
2.Enhanced Collaboration and Efficiency:
Functional Teams: DevOps fosters collaboration between development, operations, and security teams, breaking down silos and promoting a shared sense of ownership.
Automated Processes: By automating routine tasks, such as infrastructure provisioning and testing, DevOps frees up teams to focus on higher-value activities."
                id=""
                onChange={handleChange}
                style={{
                  padding: "10px 15px",
                  fontSize: "0.75rem",
                  minHeight: "220px",
                }}
              ></textarea>
              <input
                className="mb-3"
                type="text"
                name="implementation"
                placeholder="e.g., Implementing DevOps in Federal Cloud Environments:"
                id=""
                onChange={handleChange}
                style={{ padding: "10px 15px", fontSize: "0.75rem" }}
              ></input>
              <textarea
                name="implementationDesc"
                placeholder="e.g.,
                1.Accelerated Time to Market:
Rapid Deployment: DevOps practices streamline the software development lifecycle, allowing for faster deployment of cloud-based applications and services.
Continuous Delivery: Automated deployment pipelines enable frequent and reliable releases, ensuring that federal agencies can quickly adapt to changing needs and emerging threats.
2.Enhanced Collaboration and Efficiency:
Functional Teams: DevOps fosters collaboration between development, operations, and security teams, breaking down silos and promoting a shared sense of ownership.
Automated Processes: By automating routine tasks, such as infrastructure provisioning and testing, DevOps frees up teams to focus on higher-value activities."
                id=""
                onChange={handleChange}
                style={{
                  padding: "10px 15px",
                  fontSize: "0.75rem",
                  minHeight: "220px",
                }}
              ></textarea>
              <textarea
                name="conslusion"
                placeholder="e.g., In conclusion, here's what you should remember.."
                id=""
                onChange={handleChange}
                style={{ padding: "10px 15px", fontSize: "0.75rem" }}
              ></textarea>
              <button>Create</button>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Create;
