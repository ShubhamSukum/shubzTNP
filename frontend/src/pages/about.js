import React from "react";
import "../components/navbar/navbar.css";

export const About = () => {
  return (
    <>
      <div className="align-text-center">
        <h2 className="fw-bold" style={{ padding: "5px" }}>
          <span className="red" style={{ marginRight: "10px" }}>
            MADE BY
          </span>
          <span className="black">Shubham Sukum</span>
        </h2>
      </div>

      <div className="TrackTNP-motive">
        <hr />
        <h3>
          The <span className="black fw-bold">sole purpose</span> of{" "}
          <span className="red fw-bold">TrackTNP</span>
        </h3>
        <h3>
          is to <span className="red fw-bold">provide</span> a{" "}
          <span className="black fw-bold">meaningful insights</span> about
        </h3>

        <h3>
          <span className="black fw-bold">placements</span> to{" "}
          <span className="red fw-bold">college students</span>.
        </h3>
        <hr />
      </div>

      <div className="TrackTNP-motive">
        <h3>
          I will request the{" "}
          <span className="black fw-bold">placed & interviewed</span> students
          to share their <span className="red fw-bold">experiences</span> in
          <span className="black fw-bold"> FeedXP</span> section.
        </h3>
      </div>

      <div className="TrackTNP-motive">
        <hr />
        <h3>
          <span className="red fw-bold">TrackTNP</span> is for a{" "}
          <span className="black fw-bold">Student</span>
        </h3>
        <h3>
          <span className="red fw-bold">TrackTNP</span> by a{" "}
          <span className="black fw-bold">Student</span>
        </h3>
        <h3>
          <span className="red fw-bold">TrackTNP</span> of the{" "}
          <span className="black fw-bold">Student</span>
        </h3>
        <hr />
      </div>
    </>
  );
};
