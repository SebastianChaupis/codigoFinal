import "./nav.css";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./nav.css";
import Footer from "../Footer/Footer";

const Navbar = () => {
  const [status, setStatus] = useState("menu-nav");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    status === "menu-nav"
      ? setStatus("menu-nav nav__active")
      : setStatus("menu-nav");

    //toggler
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  // const closeicon = (
  //   <CloseIcon
  //     className="icon"
  //     sx={{ color: "#fff", cursor: "pointer", marginRight: 2 }}
  //   />
  // );
  return (
    <div>
      <nav className="container">
        <div className="nav">
          <div className="logo">
            <h4>
              <Link to="/">LOGO</Link>
            </h4>
          </div>
          <div>
            <div className={status}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Productos</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li className="login">
                  <Link to="/">
                    <AccountCircleOutlinedIcon
                      sx={{ fontSize: 19, marginRight: 0.8, marginTop: 0.6 }}
                    />
                    Login
                  </Link>
                </li>
              </ul>
            </div>

          </div>
          <div className="btn-login">
            <div>
              <ShoppingBasketOutlinedIcon
                sx={{ fontSize: 30, color: "#73548B", marginRight:2 }}
              />
            </div>
          </div>
          
          <div className={toggleIcon} onClick={navToggle}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
        </div>
      </nav>
      <section>
        <Outlet />
      </section>
      <Footer/>
    </div>
  );
};

export default Navbar;
