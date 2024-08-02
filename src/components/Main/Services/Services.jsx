import React from "react";
import './Services.css';
import servicesData from "../../Data/Services.json";

const ServicesBox = ({ icon, category, title, items, form, header, description, inputs, label, button }) => {
    const getImagePath = (imageName) => {
        try {
            return require(`../../../assets/${imageName}`);
        } catch (err) {
            return null;
        }
    }

    const content = (
        <div className="box">
            {icon && (
            <div className="icon">
                <img src={getImagePath(icon)} alt="" />
            </div> 
            )}
            <div className="title">
                <span>{category}</span>
                <h3>{title}</h3>
            </div>
            {items && (
                <div className="items">
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}><i className="fa-solid fa-circle-check"></i> {item}</li>
                        ))}
                    </ul>
                </div>
            )}
            {form && (
                <>
                <div className="header">
                    <h3>{header}</h3>
                    <p>{description}</p>
                </div>
                <div className="form">
                    {inputs.map((input, index) => (
                        <input key={index} type={input.type} placeholder={input.placeholder}></input>
                    ))}
                    {label && (
                        <div className="label">
                            <input type="checkbox" />
                            <span dangerouslySetInnerHTML={{__html: label.text}} />
                        </div>
                    )}
                    {button && (
                        <div className="button">
                            <a href={button.link}>{button.text}</a>
                        </div>
                    )}
                </div>
                </>
            )}
        </div>
    )

    return content;
};

const Services = () => {
  return (
    <div className="services">
        <div className="row-box">
            {servicesData.map((box, index) => (
                <ServicesBox key={index} {...box} />
            ))}
        </div>
    </div>
  );
};

export default Services;
