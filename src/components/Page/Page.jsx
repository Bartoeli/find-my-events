import React from "react";
import bgImg from "../../assets/pageBg.jpg";
import { NavBar } from "../NavBar/NavBar.jsx";

export const Page = ({ children }) => {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
      }}
    >
      <NavBar />
      {children}
    </div>
  );
};
