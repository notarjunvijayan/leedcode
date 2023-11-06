// Navbar.js
import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import TokenContext, { TokenProvider } from "../context/AuthProvider";

const Navbar = () => {
  const location = useLocation();
  const { token,setToken } = useContext(TokenContext);
  const navigate = useNavigate();


  // Conditionally render the navbar except on the /question route
  const renderNavbar = location.pathname !== "/question";

  const handleLogout = async() => {
    if(token){
      setToken(null)
      localStorage.removeItem("token")
      localStorage.setItem("status","logged out")
      localStorage.removeItem("Username")
      navigate("/")
    }

  }

  function Button() {
    if (token) {
      <Link to="/student">Dashboard</Link>;
    } else {
      <Link to="/login">Login</Link>;
    }
  }

  return (
    <div>
      {renderNavbar && (
        <nav className="navbar">
          <ul>
            <li>
              <h2>LeedCode</h2>&nbsp;
              <p>( Pun Intended )</p>
            </li>
            <li>
              <Link to="/question">Code Editor (Only for now)</Link>
            </li>
            <li>
              <Link to="/generate">Generate Questions</Link>
            </li>
            <li className="login">
              {token ? (  
                <Link to="/student">{localStorage.getItem("Username")}</Link>
              ) : (
                <Link to="/login">Login</Link>  
              )}
            </li>
            {token &&
              (
              <li className="login">
                <input type="button" onClick={handleLogout} value="logout" name="logout"></input>
              </li>
              )
              }
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
