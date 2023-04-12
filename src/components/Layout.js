import React from "react";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {children}
        {/* Content of each page, will inyect this later on */}
      </div>
      <footer>
        <p>Copyright 2023 Rummel Audio</p>
      </footer>
    </div>
  );
}
