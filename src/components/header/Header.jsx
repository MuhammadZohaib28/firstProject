import React from "react";
import "./header.css";

const Header = () => {
  const navitems = [
    { name: "Home", link: "https://www.google.com" },
    { name: "Records", link: "#records" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="portfolioHeader">
      <h1 className="logo">Zohaib's Portfolio</h1>

      <div className="links">
        {navitems.map((item) => {
          return (
            <a href={item.link}>
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
