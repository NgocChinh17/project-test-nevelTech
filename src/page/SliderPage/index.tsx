"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner from "../../assets/image/HR banner.png";
import Image from "next/image";
import './style.scss';

export const SliderPage = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {[...Array(6)].map((_, index) => (
          <div key={index}>
            <div className="image-wrapper">
              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                layout="responsive"
                width={1000}
                height={500}
                objectFit="cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
