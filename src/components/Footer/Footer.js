import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="content">
          <h4 className="logo_footer">LOGO</h4>

          <div className="social">
            <ul className="ul-footer">
                <li><a href="https://www.facebook.com/" target="__blank">facebok</a></li>
                <li><a>twitter</a></li>
                <li><a>instagram</a></li>

            </ul>
          </div>
          <div>
              <a href="#">Terminos / condiciones</a>
          </div>

          
        </div>
        <div>
            <p className="copyright">Copyright © 2022 Todos los derechos reservados Lima-Perú</p>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
