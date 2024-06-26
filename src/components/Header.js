import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">ne izlesem ?</Link>
          </div>

          <ul className="nav-links">

            <li>
              <Link to="/watched">izlediklerim</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Ekle
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
