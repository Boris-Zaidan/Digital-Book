import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <p>Desenvolvido por Boris Zaidan &copy; {currentYear}</p>
    </div>
  );
}

export default Footer;
