import React from "react";

import "../styles/navigation.css";

export const Navigation = (props) => {
  return (
    <nav className="navigation-container">
      <ul className="navigation-menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Characters</a>
        </li>
        <li>
          <a href="#">Locations</a>
        </li>
        <li>
          <a href="#">Episodes</a>
        </li>
      </ul>
    </nav>
  );
};
