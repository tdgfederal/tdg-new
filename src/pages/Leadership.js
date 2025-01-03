import React from "react";
import "../assets/styles/Leadership.css";

const Leadership = () => {
  return (
    <div>
      <div className="contra-top industries">
        <h2
          className="mb-3"
          style={{ textAlign: "start", fontWeight: "700", fontSize: "2.75rem" }}
        >
          Leadership
        </h2>
      </div>
      <div className="contra-top industries">
        <div className="limgt">
          <div className="">
            <img
              className="limg"
              src="https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/11/untitled-96.jpg?w=480"
              alt=""
              style={{
                borderRadius: "1000px",
              }}
            />
          </div>
          <div
            className="approach-right"
            style={{ width: "100%" }}
          >
            <h2 className="mb-5" style={{ fontWeight: "600" }}>
              A Visionary Leader Driving Technological Change
            </h2>
            <p>
              Djibril Diallo founded TDG with a clear vision: to harness the
              power of technology to solve real-world problems. Driven by a
              passion for positive change, Djibril leverages his extensive
              experience in IT consulting to bridge the gap between complex
              technical solutions and practical business needs.
            </p>
            <p>
              With a proven track record at industry leaders such as GDIT, CGI,
              and Blackboard, Djibril has honed his skills in leading complex
              projects and delivering innovative solutions. His background,
              coupled with a Bachelor’s degree from American University’s Kogod
              School of Business, provides a solid foundation for driving growth
              and innovation at TDG.
            </p>
          </div>
        </div>
      </div>
      <div className="contra-top industries">
        <div className="limgt">
          <div className="" style={{borderLeft: "3.5px solid #30216e", fontSize:"2rem", fontWeight:"600", paddingLeft:"15px", lineHeight:"35px"}}>
          Bridging the Gap Between Tech and Business
          </div>
          <div
            className="approach-right"
            style={{ width: "100%" }}
          >
            <p>
            Having worked closely with government agencies, Djibril understands the challenges of translating complex technical concepts into actionable business solutions. He is committed to making technology accessible and understandable, ensuring that TDG’s solutions are tailored to the specific needs of its clients. By breaking down barriers and fostering effective communication, Djibril empowers TDG to deliver impactful results.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Leadership;
