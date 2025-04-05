"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner from "../../assets/image/HR banner.png";
import Image from "next/image";

export const SliderPage = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="slider-container" style={{ padding: "40px" }}>
      <Slider {...settings}>
        <div>
          <Image src={banner} alt="banner" />
        </div>
        <div>
          <Image src={banner} alt="banner" />
        </div>
        <div>
          <Image src={banner} alt="banner" />
        </div>
        <div>
          <Image src={banner} alt="banner" />
        </div>
        <div>
          <Image src={banner} alt="banner" />
        </div>
        <div>
          <Image src={banner} alt="banner" />
        </div>
      </Slider>
    </div>
  );
};
