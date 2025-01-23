import React, {useState} from "react";

const Create = () => {
  const [formData, setFormData] = useState({
    category:"",
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
              <select name="category" id="" style={{padding:"8px"}} onChange={handleChange}>
                <option value="" disabled>Select Category</option>
                <option value="Cloud">Cloud</option>
                <option value="Project">Project</option>
              </select>
              <br />
              <input
                type="text"
                placeholder="Enter the title of the blog"
                name="title"
                onChange={handleChange}
                style={{ padding: "10px 15px", fontSize: "0.75rem" }}
              />
              <br />
              <input
                className="my-3"
                type="text"
                placeholder="Image URL"
                name="image"
                onChange={handleChange}
                style={{ padding: "10px 15px", fontSize: "0.75rem" }}
              />
              <br />
              <textarea
                name="description"
                placeholder="Description"
                id=""
                onChange={handleChange}
                style={{ padding: "10px 15px", fontSize: "0.75rem" }}
              ></textarea>
              <textarea
                name="matter"
                placeholder="Enter the heading for the matter"
                id=""
                onChange={handleChange}
                style={{ padding: "10px 15px", fontSize: "0.75rem" }}
              ></textarea>
              <textarea
                name="matterDesc"
                placeholder="Enter matter's description"
                id=""
                onChange={handleChange}
                style={{ padding: "10px 15px", fontSize: "0.75rem" }}
              ></textarea>
              <textarea
                name="implementation"
                placeholder="Enter the heading of the implementation"
                id=""
                onChange={handleChange}
                style={{ padding: "10px 15px", fontSize: "0.75rem" }}
              ></textarea>
              <textarea
                name="implementationDesc"
                placeholder="Enter implementation's description"
                id=""
                onChange={handleChange}
                style={{ padding: "10px 15px", fontSize: "0.75rem" }}
              ></textarea>
              <textarea
                name="conslusion"
                placeholder="Enter conslusion"
                id=""
                onChange={handleChange}
                style={{ padding: "10px 15px", fontSize: "0.75rem" }}
              ></textarea>
              <button>Create</button>
            </form>
          </div>
        </div>
      </div><br /><br /><br /><br />
    </div>
  );
};

export default Create;
