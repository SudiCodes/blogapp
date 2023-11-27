import React from "react";
import "./Coverpage.css";

const Coverpage = () => {
  return (
    <div>
      <header class="header">
        <h1 class="logo">Logo</h1>
        <ul class="nav">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <a href="#">Free Trial</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Coverpage;
