import React from "react";

const Intro = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <div>
        <h4
          style={{
            marginTop: "100px",
            fontSize: "60px",
            textShadow: "5px 1px red",
          }}
        >
          INTRO
        </h4>
      </div>
      <div>
        <p
          style={{
            marginTop: "80px",
            marginLeft: "100px",
            marginRight: "100px",
            fontSize: "20px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          molestiae aut ex dicta ad quas voluptates? Eum voluptate corporis ea
          libero ab error vel rerum, assumenda porro. Enim{" "}
          <mark>Accusamus,</mark> quibusdam perferendis quam corporis omnis
          corrupti consectetur dolores quidem nisi rem optio nostrum incidunt
          tempora, temporibus ad provident officia vel. Fugit, ducimus. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          laboriosam. <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            molestiae nostrum velit incidunt cumque amet. Ipsa minima assumenda
            reprehenderit nisi a, modi molestias, ut repudiandae possimus natus
            laudantium, illum dicta.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Intro;
