import React from "react";
import './Team.css';
import TeamData from "../../Data/Team.json";

const imagePath = (imageName) => {
    try {
        return require (`../../../assets/${imageName}`);
    }  catch (err) {
        return null;
    }
};

const Team = () => {
  return (
    <div className="team">
        <div className="title">
            <h2>{TeamData.title}</h2>
            <p>{TeamData.description}</p>
        </div>

        <div className="box-container">
            {TeamData.members.map((member, index) => {
                const imgSrc = imagePath(member.image);
                return (
                    <div className="box" key={index}>
                        <div className="image">
                            {imgSrc && <img src={imgSrc} alt="" />}
                        </div>
                        <div className="name">
                            <h4>{member.name}</h4>
                            <span>{member.position}</span>
                        </div>
                    </div>
                )
            })}
        </div>

        <div className="button">
            <a href={TeamData.button.link}>{TeamData.button.text}</a>
        </div>
    </div>
  );
};

export default Team;
