import React from "react";

export const FeedXP = () => {
  return (
    <>
      <div
        style={{
          marginTop: "2.5vh",
          height: "85vh",
          width: "100vw",
          // border: "1px black solid",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1>
          Working on Feed{" "}
          <span style={{ color: "red", fontWeight: "700" }}>XP</span>
        </h1>
        <br />
        <h3>
          Placed or Interviewed Students can share thier e
          <span style={{ color: "red", fontWeight: "700" }}>XP</span>erience
        </h3>
        <br />
        <h5>
          which can{" "}
          <span style={{ color: "blue", fontWeight: "700", fontSize: "30px" }}>
            HELP
          </span>{" "}
          each other{" "}
          <span style={{ color: "green", fontWeight: "700", fontSize: "30px" }}>
            GROW
          </span>
        </h5>
      </div>
    </>
  );
};
