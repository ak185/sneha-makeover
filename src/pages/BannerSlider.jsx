import React from "react";
import Slider from "react-slick";
import HeroText from "../components/HeroText";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import banner1 from "../images/banner-1.jpg"
import banner2 from "../images/banner-2.jpg"
import banner3 from "../images/banner-3.jpg"

import '../styles/banner.css';
function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
        <button
        style={{ ...style, 
            display: "block", 
            border: "1px solid rgb(0 0 0 / 0%)", 
            borderRadius: "5px 0px 0px 5px", 
            background: "rgb(255 255 255 / 20%)",
            color: "#ffffff",
            fontSize:"20px", 
            position: "absolute",
            right: "0rem",
            top: "50%",
            zIndex: "99",
            height: '40px' }}
        onClick={onClick}
        ><FontAwesomeIcon icon={faAngleRight} /></button>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <button
    style={{ ...style, 
        display: "block", 
        border: "1px solid rgb(0 0 0 / 0%)", 
        borderRadius: "0px 5px 5px 0px", 
        background: "rgb(255 255 255 / 20%)",
        color: "#ffffff",
        fontSize:"20px", 
        position: "absolute",
        left: "0rem",
        top: "50%",
        zIndex: "99",
        height: '40px'
    }}
    onClick={onClick}
    >
        <FontAwesomeIcon icon={faAngleLeft} />
    </button>
  );
}

const BannerSlider = () => {
    var settings = {
        dots:true,
        infinite: true,
        speed: 2000,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    let sliderData = {
        banner : {
            'banner_1' : banner1,
            'banner_2' : banner2,
            'banner_3' : banner3
        },
        heading: {
            heading_1: 'Take your Bussiness online.',
            heading_2: 'Make your avaliable to global',
            heading_3: 'Fast access to your bussiness',
        },
        bannerText: {
            text_1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
            text_2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
            text_3: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
        }   
    };
    let banners = Object.values(sliderData.banner);
    let headings = Object.values(sliderData.heading);
    let bannerText = Object.values(sliderData.bannerText);
    // console.log('headings:', headings);
    // console.log('bannerText:', bannerText);
    return (
        <Slider {...settings}>
            {banners.map((bannerImg, index) => {
                return <div>
                    <div className="slider-item" style={{ '--bg-img': `url(${bannerImg})` }}>
                        <div className="banner-dark">            
                            <HeroText heading={headings[index]} text={bannerText[index]} />
                        </div>
                    </div>
                </div>
            })}
            </Slider>
    );
};

export default BannerSlider;