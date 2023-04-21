import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}made by ❤️ Ravi M</p>
    </footer>
  );
}

export default Footer;
