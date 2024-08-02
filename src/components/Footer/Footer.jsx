import React from "react";
import "./Footer.css";
import FooterData from "../Data/Footer.json";

const imagePath = (imageName) => {
  try {
    return require(`../../assets/${imageName}`);
  } catch (err) {
    return null;
  }
};

const Footer = () => {
  const logoSrc = imagePath(FooterData.logo.image);

  return (
    <div className="footer">
      <div className="box-container">

        <div className="box">
          <div className="logo">
            {logoSrc && <img src={logoSrc} alt="Logo"></img>}
            <p>{FooterData.logo.description}</p>
          </div>

          <div className="call-us">
            <a href={`tel:${FooterData.contact.phone}`} className="call">
              <i class="fa-solid fa-phone"></i> {FooterData.contact.phone}
            </a>
            <a href={FooterData.contact.enquireLink} className="enquire">Enquire Now</a>
          </div>
        </div>

        {FooterData.sections.map((section, index) => (
          <div className="box" key={index}>
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx}><a href={link.url}>{link.text}</a></li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      <div className="sub-footer">
        <div className="copyright">
          <p>{FooterData.subFooter.copyright.text}<a href={FooterData.subFooter.copyright.companyUrl}> {FooterData.subFooter.copyright.companyName}</a> . All Rights Reserved.</p>
        </div>

        <div className="social">
          <ul>
            {FooterData.subFooter.socialLinks.map((link, index) => (
              <li key={link.url}>
                <a href={link.url}>
                  <i className={`fa-brands fa-${link.platform}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
