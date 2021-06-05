import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {currYear}</p>
      <p>Dedicate to Shaurya Sir ❤</p>
    </footer>
  );
}

export default Footer;
