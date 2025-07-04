import React from "react";

const HeroText = ({heading,text}) => {
    return (
        <div className="hero-text-container">
            <div className="">
                <h4 className="animate-right-left">{heading}</h4>    
                <p className="animate-left-right">{text}</p>    
            </div>
        </div>
    );
};

export default HeroText;