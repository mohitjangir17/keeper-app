import React from "react";
import "../App.css";

function Footer() {
  const date = new Date();

  const cy = date.getFullYear();
  return (
    <div className="Footer">
      <p>All rights are Reserved </p>
      <p>Copyright {cy} </p>
    </div>
  );
}
export default Footer;
