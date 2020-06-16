import React from "react";
import { Icon } from "antd";

import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div>
      <footer className="page-footer font-small blue ">
        <div className="footer-copyright text-center py-3">
          © {currentYear} Copyright:
          <a href="https://soo7379.github.io/"> See Soojung Kwak's Resume!!!</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
