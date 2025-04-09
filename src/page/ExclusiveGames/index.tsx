"use client";
import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import Slider from "react-slick";

import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assets
import seeAll from "@assets/iconButton/seeAll.svg";
import HPGaming from "@assets/ImageSlider/BlueChipSpicyJackpot.jpg";
import veliplay from "@assets/ImageSlider/DeepDive.jpg";
import evolution from "@assets/ImageSlider/FuryBalloon.jpg";
import launch from "@assets/ImageSlider/LaunchX.jpg";
import deepdive from "@assets/ImageSlider/Roulette.jpg";
import funry from "@assets/ImageSlider/TrdubleJet.jpg";
import cuoi from "@assets/ImageSlider/XMatch.jpg";
import BlueChipSpace from "@assets/ImageSlider/BlueChipSpace.jpg";

// Components
import { AllProviders } from "@/page/AllProviders";
import { GameCard } from "@/components/TagCard";

export const ExclusiveGames = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
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
    <div className="exclusive-games-wrapper" style={{ overflowX: "hidden" }}>
      <Row
        className="exclusive-games-header"
        gutter={[16, 16]}
        justify="space-between"
        align="middle"
      >
        <Col xs={18} sm={16} md={16}>
          <p style={{ color: "white" }}>Exclusive Games</p>
        </Col>
        <Col
          xs={6}
          sm={8}
          md={8}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <p
            className="see-all-text"
            style={{ fontSize: "15px", color: "white", paddingRight: 10 }}
          >
            SEE ALL
          </p>
          <Image src={seeAll} alt="seeAll" width={20} height={20} />
        </Col>
      </Row>

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

      <Row
        className="all-providers-header"
        gutter={[16, 16]}
        justify="space-between"
        align="middle"
        style={{ marginTop: "24px" }}
      >
        <Col xs={18} sm={16} md={16}>
          <p style={{ color: "white" }}>ALL Providers</p>
        </Col>
        <Col
          xs={6}
          sm={8}
          md={8}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <p
            className="see-all-text"
            style={{ fontSize: "15px", color: "white", paddingRight: 10 }}
          >
            SEE ALL
          </p>
          <Image src={seeAll} alt="seeAll" width={20} height={20} />
        </Col>
      </Row>

      <AllProviders />
    </div>
  );
};
