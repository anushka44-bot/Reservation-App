import "./navbar.css";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="logo">SwiftStay</span>
          </Link>
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default navbar;
