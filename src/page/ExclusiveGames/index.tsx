"use client";
import React from "react";
import Slider from "react-slick";

import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assets
import HPGaming from "@assets/ImageSlider/BlueChipSpace.png";
import veliplay from "@assets/ImageSlider/BluechipSpicyJackpot.png";
import evolution from "@assets/ImageSlider/DeepDive.png";
import launch from "@assets/ImageSlider/FuryBalloon.png";
import deepdive from "@assets/ImageSlider/LaunchX.png";
import funry from "@assets/ImageSlider/Roulette.png";
import cuoi from "@assets/ImageSlider/TrdubleJet.png";
import BlueChipSpace from "@assets/ImageSlider/Xmatch.png";

// Components
import { AllProviders } from "@/page/AllProviders";
import { GameCard } from "@/components/TagCard";
import { SectionHeader } from "@/components/TitleComponentss";

export const ExclusiveGames = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3.5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2.5 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3 },
      },
    ],
  };

  const gameList = [
    {
      id: 1,
      src: HPGaming,
      alt: "HPGaming",
      labelText: "100HP GAMING",
      isHot: true,
    },
    {
      id: 2,
      src: veliplay,
      alt: "veliplay",
      labelText: "VELIPLAY",
      isHot: true,
    },
    {
      id: 3,
      src: evolution,
      alt: "evolution",
      labelText: "EVOLUTION",
      isNews: true,
    },
    { id: 4, src: launch, alt: "launch", labelText: "LAUNCH", isNews: true },
    { id: 5, src: deepdive, alt: "deepdive", labelText: "DEEPDIVE" },
    { id: 6, src: funry, alt: "funry", labelText: "FUNRY", isHot: true },
    { id: 7, src: cuoi, alt: "cuoi", labelText: "VELIPLAY", isHot: true },
    {
      id: 8,
      src: BlueChipSpace,
      alt: "BlueChipSpace",
      labelText: "VELIPLAY",
      isHot: true,
    },
  ];

  return (
    <div className="exclusive-games-wrapper">
      <SectionHeader title="Exclusive Games" />
      <Slider className="exclusive-games-slider" {...settings}>
        {gameList.map((game) => (
          <div key={game.id}>
            <GameCard
              src={game.src}
              alt={game.alt}
              labelText={game.labelText}
              isHot={game.isHot}
              isNews={game.isNews}
            />
          </div>
        ))}
      </Slider>
      <SectionHeader title="All Providers" />
      <AllProviders />
    </div>
  );
};
