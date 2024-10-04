import React from "react";
import { Link } from "react-router-dom";
import Toggle from "../context/theme";
import '../Navbar/Navbar.css'

function Navbar() {
  const navbar = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/pascal",
      name: "Pascal",
    },
    {
      path: "/animation",
      name: "Animation",
    },
  ];

  return (
    <>
      <nav>
        <div className="nav">
            <Link to={'/'}>Gamers</Link>
          <div className="nav-left">
            {navbar.map((items, index) => (
              <div key={index}>
                <Link to={items.path}>{items.name}</Link>
              </div>
            ))}
            <Toggle />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
