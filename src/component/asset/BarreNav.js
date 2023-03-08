import React from "react";
import { Link } from "react-router-dom";

function BarreNav() {
  return (
    <div className="Nav">
      <nav>
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
      </nav>
      <nav>
        <Link to="/page1">
          <button className="btn">Page Cocktail</button>
        </Link>
      </nav>
    </div>
  );
}

export default BarreNav;
