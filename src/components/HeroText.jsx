import React from "react";

const HeroText = ({heading,text}) => {
    return (
        <div className="hero-text-container">
            <div className="">
                <h2 className="animate-right-left">{heading}</h2>    
                <p className="animate-left-right">{text}</p>    
            </div>
        </div>
    );
};

export default HeroText;