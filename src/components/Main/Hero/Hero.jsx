import React from "react";
import "./Hero.css";
import ContentHero from "../../Data/ContentHero.json";
import banner from "../../../assets/banner-5-bg-1.png";

const Hero = () => {
  return (
    <div className="hero">
        <div className="row-box">

            <div className="content">
                {ContentHero.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className={section.type}>
                        {section.lines.map((line, lineIndex) => (
                            <div key={lineIndex}>{line}</div>
                        ))}
                    </div>
                ))}

                <div className="buttons">
                    <a href="#" className="trail">{ContentHero.buttons.StartTrial}</a>
                    <p>{ContentHero.buttons.signInText} <a href="#" className="sign">{ContentHero.buttons.signInLink}</a></p>
                </div>
            </div>

            <div className="image">
                <img src={banner} alt="" />
            </div>

        </div>
    </div>
  );
};

export default Hero;
