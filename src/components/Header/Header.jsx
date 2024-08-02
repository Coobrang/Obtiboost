import React, { useState } from "react";
import './Header.css';
import Logo from "../../assets/logo.png";
import MenuData from "../Data/MenuData.json";
import ExtraLink from "../Data/ExtraLink.json";

const Header = () => {

  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave= () => {
    setActiveMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header">
      <div className="row-wrapper">

        <div className="left-side">

          {/* Logo */}
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          {/* Menu */}
          <div className="menu">
            <ul>
              {MenuData.map((item, index) => (
                <li
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                >
                  <a href={item.link}>
                    {item.name}
                    {item.iconClass && <i className={item.iconClass}></i>}
                  </a>

                  {item.subMenu && activeMenu === index && (
                    <div className="dropdown">
                      <ul>
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a href={subItem.link}>{subItem.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu */}
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <i className={isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}> </i>
          </button>

          <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              {MenuData.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>
                    {item.name}
                    {item.iconClass && <i className={item.iconClass}></i>}
                  </a>

                  {/* {item.subMenu && (
                    <ul className="mobile-submenu">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a href={subItem.link}>{subItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  )} */}
                </li>
              ))}
            </ul>
          </div>

        </div>
        

          {/* Button */}
          <div className="button">
              {ExtraLink.link.map((link, index) => (
                <div key={index}>
                  <a href={link.url}>
                    <i className={link.iconClass}></i> {link.name}
                  </a>
                </div>
              ))}
          </div>

      </div>
    </div>
  );
};

export default Header;
