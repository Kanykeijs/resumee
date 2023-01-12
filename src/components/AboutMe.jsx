import React from "react";

const AboutMe = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <img
        style={{ marginLeft: "100px", marginTop: "80px", borderRadius: "100%" }}
        src="https://w7.pngwing.com/pngs/318/451/png-transparent-female-computer-icons-woman-business-internal-communications-avatar-mammal-heroes-people.png"
        alt=""
        width="200px"
      />
      <div>
        <h2 style={{ color: "gray", marginLeft: "100px", marginTop: "100px" }}>
          Kanykei
        </h2>
        <h1
          style={{
            color: "orange",
            marginLeft: "100px",
            fontSize: "50px",
            letterSpacing: "3px",
          }}
        >
          Alisherova
        </h1>
        <h3 style={{ color: "gray", marginLeft: "100px" }}>Front-end Expert</h3>
      </div>

      {/* <div>
          icons
      </div> */}

      {/* <hr style={{ backgroundColor: "gray", marginLeft: "100px" }} /> */}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginRight: "100px", marginTop: "100px" }}>
          <h5>Location</h5>
          <p>Kyrgyzstan, Bishkek</p>
        </div>
        <div style={{ marginRight: "100px", marginTop: "100px" }}>
          <h5>Phone</h5>
          <p>221 221 795</p>
        </div>
        <div style={{ marginRight: "100px", marginTop: "100px" }}>
          <h5>Web</h5>
          <p>ruventhemes.com</p>
        </div>
        <div style={{ marginRight: "100px", marginTop: "100px" }}>
          <h5>Email</h5>
          <p>hello@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
