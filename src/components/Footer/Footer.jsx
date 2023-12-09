import React from "react";
import Contactus from "./Contactus";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <Contactus />
      </div>
      <p>Copyright ⓒ {year} IDA. All rights reserved</p>
    </footer>
  );
}

export default Footer;
