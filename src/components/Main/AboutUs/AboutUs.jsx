import React, { useState } from "react";
import "./AboutUs.css";
import aboutUsData from "../../Data/AboutUs.json";
import videoImg from "../../../assets/about-us.jpg"

const AboutUs = () => {

    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const handleVideoToggle = () => {
        setIsVideoOpen(!isVideoOpen)
    };

  return (
    <div className="aboutUs">

        <div className="container">

            <div className="content">
                
                <div className="title">
                    <span>{aboutUsData.title}</span>
                    <h3>{aboutUsData.Subtitle}</h3>
                    <p>{aboutUsData.description}</p>
                </div>

                <div className="awards">
                    {aboutUsData.awards.map((award, index) => (
                        <div className="box" key={index}>
                            <img src={require(`../../../assets/${award.image}`)} alt="" />
                            <p>{award.description}</p>
                        </div>
                    ))}
                </div>

            </div>

            <div className="videoPopUp">
                <button className="play-button" onClick={handleVideoToggle}>
                    <img src={videoImg} alt="" />
                    <i className="fa fa-play"></i>
                </button>
                {isVideoOpen && (
                    <div className="video-modal" onClick={handleVideoToggle}>
                        <div className="video-container" onClick={(e) => e.stopPropagation}>
                            <button className="close-button" onClick={handleVideoToggle}><i class="fa-solid fa-xmark"></i></button>
                            <iframe
                            className="responsive-iframe"
                            width="760"
                            height="415"
                            src={aboutUsData.videoUrl}
                            >
                            </iframe>
                        </div>
                    </div>
                )}
            </div>

        </div>

        <div className="items">
            {aboutUsData.items.map((item, index) => (
                <div className="box" key={index}>
                    <div className="icon">
                        <i className={item.icon}></i>
                    </div>
                    <div className="counter">
                        <h4>{item.counter}</h4>
                        <span>{item.label}</span>
                    </div>
                </div>
            ))}
        </div>

    </div>
  );
};

export default AboutUs;
