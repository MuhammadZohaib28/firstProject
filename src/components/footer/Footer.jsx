import React from "react";
import './footer.css'

const Footer = () => {
  const footerData = [
    {
      name: "Facebook",
      link: "https://www.facebook.com",
    },
    {
      name: "Github",
      link: "https://github.com/MuhammadZohaib28",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com",
    },
  ];

  return (
    <footer>
      <h3>Zohaib's Portfolio Website</h3>

      <div className="data">
        {footerData.map((data, index) => (
          <div>
            <a href={data.link}>
              <h2>{data.name}</h2>
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
