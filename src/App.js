import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Content from "./components/Content";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <SideBar />
        <Content />
      </div>
    </div>
  );
}
