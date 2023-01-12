import React from "react";

const Skills = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h4
          style={{
            marginTop: "100px",
            fontSize: "60px",
          }}
        >
          SKILLS
        </h4>
      </div>
      <div style={{ marginTop: "150px", marginRight: "200px" }}>
        <div class="skills">
          <div class="skills__block">
            <div class="skills__block_div">
              <h4>80%</h4>
              <h5>PHOTOSHOP</h5>
            </div>
            <div class="skills__block_div">
              <h4>75%</h4>
              <h5>ILLUSTRATOR</h5>
            </div>
          </div>
          <div class="skills__block">
            <div class="skills__block_div">
              <h4>70%</h4>
              <h5>GIT</h5>
            </div>
            <div class="skills__block_div">
              <h4>65%</h4>
              <h5>AFTER EFFECTS</h5>
            </div>
          </div>
          <div class="skills__block">
            <div class="skills__block_div">
              <h4>90%</h4>
              <h5>SKETCH</h5>
            </div>
            <div class="skills__block_div">
              <h4>50%</h4>
              <h5>CSS3 ANIMATION</h5>
            </div>
          </div>
          <div class="skills__block">
            <div class="skills__block_div">
              <h4>85%</h4>
              <h5>PAGESPEED INSIGHTS</h5>
            </div>
            <div class="skills__block_div">
              <h4>95%</h4>
              <h5>SEO</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
