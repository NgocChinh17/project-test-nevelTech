"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

// Assets
import Evolution from "@assets/allProviders/1.svg";
import spribe from "@assets/allProviders/spribe.svg";
import veliplays from "@assets/allProviders/veliplay.svg";
import turboGames from "@assets/allProviders/turboGames.svg";
import smartSoft from "@assets/allProviders/SmartSoft.svg";
import HP from "@assets/allProviders/100HP.svg";
import BGgaming from "@assets/allProviders/BGgaming.svg";
import Wazdan from "@assets/allProviders/Wazdan.svg";

const providers = [
  { id: 1, name: "Evolution", games: 312, logo: Evolution },
  { id: 2, name: "Spribe", games: 12, logo: spribe },
  { id: 3, name: "VeliPlay", games: 9, logo: veliplays },
  { id: 4, name: "Turbo Games", games: 36, logo: turboGames },
  { id: 5, name: "SmartSoft", games: 37, logo: smartSoft },
  { id: 6, name: "100HP Gaming", games: 7, logo: HP },
  { id: 7, name: "BGaming", games: 166, logo: BGgaming },
  { id: 8, name: "Wazdan", games: 199, logo: Wazdan },
];

export const AllProviders = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 6.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4.5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3.5 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 3 },
      },
    ],
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {providers.map((provider) => (
          <div key={provider.id}>
            <div className="box">
              <div className="topSection">
                <Image
                  src={provider.logo}
                  alt={provider.name}
                  width={93}
                  height={30}
                  className="logo-image"
                />
              </div>
              <div className="bottomSection">
                <div className="title">{provider.name}</div>
                <div className="games">{provider.games} games</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
