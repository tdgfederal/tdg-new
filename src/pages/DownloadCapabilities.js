import React from "react";
import "../assets/styles/DownloadCapabilities.css";

const DownloadCapabilities = () => {
  return (
    <div>
      <div className="contra-top industries">
        <div className="approach row" style={{ margin: "0" }}>
          <div
            className="approach-left col-lg-6 col-md-6"
            style={{
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/cloud-system-tablet-background-smart-technology-remixed-media-1.png?w=609"
              alt=""
            />
          </div>
          <div
            className="approach-right col-lg-6 col-md-6"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <h2
                className=""
                style={{ fontWeight: "700", fontSize: "2.3rem" }}
              >
                DOWNLOAD OUR
              </h2>
              <h2
                className=""
                style={{
                  fontWeight: "700",
                  fontSize: "2.3rem",
                  marginTop: "-12px",
                }}
              >
                CAPABILITY STATEMENT
              </h2>
              <button className="sl-inner-btn my-5" style={{fontSize:"1rem"}}>Download</button>
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
          <form className="form col-lg-6 col-md-6" action="">
            <label style={{ fontWeight: "600" }} htmlFor="">
              Name <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input className="in-text" type="text" placeholder="Name" />
            <br />
            <label style={{ fontWeight: "600" }} htmlFor="">
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input className="in-text" type="email" placeholder="Email" />
            <br />
            <label style={{ fontWeight: "600" }} htmlFor="">
              Organization <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input className="in-text" type="text" placeholder="" />
            <br />
            <div style={{ fontWeight: "600", marginBottom: "-20px" }}>
              Area of interest
            </div>
            <br />
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <input type="radio" name="interest" />
              <label htmlFor="" style={{ fontWeight: "500" }}>
                {" "}
                General Information
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <input type="radio" name="interest" />
              <label htmlFor="" style={{ fontWeight: "500" }}>
                {" "}
                Partnership Opportunities
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <input type="radio" name="interest" />
              <label htmlFor="" style={{ fontWeight: "500" }}>
                {" "}
                Careers
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <input type="radio" name="interest" />
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
              name=""
              placeholder="Message"
              id=""
              style={{ border: "1px solid #641097" }}
            ></textarea>
            <br />
            <button className="sl-inner-btn-form">Submit</button>
          </form>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default DownloadCapabilities;
