"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner from "@assets/image/HR banner1.png";
import bannerMobile from "@assets/image/bannerMobile.png";

import "./style.scss";

export const SliderPage = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20%",
    slidesToShow: 1,
    speed: 1000,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0%",
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="custom-slide">
            <div className="image-wrapper">
              <picture>
                <source media="(max-width: 768px)" srcSet={bannerMobile.src} />
                <Image
                  src={banner}
                  alt={`Banner ${index + 1}`}
                  priority={index === 0}
                />
              </picture>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
