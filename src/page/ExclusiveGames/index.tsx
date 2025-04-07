"use client";
import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import seeAll from "../../assets/iconButton/seeAll.svg";
import HPGaming from "../../assets/iconButton/100HPGaming.jpg";
import veliplay from "../../assets/iconButton/veliplay.jpg";
import evolution from "../../assets/iconButton/evolution.jpg";
import launch from "../../assets/iconButton/launch.jpg";
import onlypkay from "../../assets/iconButton/onlypkay.jpg";
import deepdive from "../../assets/iconButton/deepdive.jpg";
import funry from "../../assets/iconButton/funry.jpg";
import cuoi from "../../assets/iconButton/cuoi1.png";

import { AllProviders } from "@/page/AllProviders";
import { GameCard } from "@/components/TagCard";
import "./styles.scss";

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

  return (
    <div className="exclusive-games-wrapper" style={{ marginTop: 50, overflowX: "hidden" }}>
      <Row gutter={[16, 16]} justify="space-between" align="middle">
        <Col xs={18} sm={16} md={16}>
          <p style={{ margin: 0, fontSize: "18px", fontWeight: "bold", color: "white" }}>
            Exclusive Games
          </p>
        </Col>
        <Col xs={6} sm={8} md={8} style={{ display: "flex", justifyContent: "flex-end" }}>
          <p className="see-all-text" style={{ margin: 0, fontSize: "16px", color: "white", paddingRight: 10 }}>
            SEE ALL
          </p>
          <Image src={seeAll} alt="seeAll" width={20} height={20} />
        </Col>
      </Row>

      <Slider {...settings}>
        <div>
          <GameCard src={HPGaming} alt="HPGaming" isHot labelText="100HP GAMING" />
        </div>
        <div>
          <GameCard src={veliplay} alt="veliplay" isHot labelText="VELIPLAY" />
        </div>
        <div>
          <GameCard src={evolution} alt="evolution" isNews labelText="EVOLUTION" />
        </div>
        <div>
          <GameCard src={launch} alt="launch" isNews labelText="LAUNCH" />
        </div>
        <div>
          <GameCard src={onlypkay} alt="onlypkay" labelText="ONLYPKAY" />
        </div>
        <div>
          <GameCard src={deepdive} alt="deepdive" labelText="DEEPDIVE" />
        </div>
        <div>
          <GameCard src={funry} alt="funry" isHot labelText="FUNRY" />
        </div>
        <div>
          <GameCard src={cuoi} alt="cuoi" isHot labelText="VELIPLAY" />
        </div>
      </Slider>

      <Row gutter={[16, 16]} justify="space-between" align="middle">
        <Col xs={18} sm={16} md={16}>
          <p style={{ margin: 0, fontSize: "18px", fontWeight: "bold", color: "white" }}>
            ALL Providers
          </p>
        </Col>
        <Col xs={6} sm={8} md={8} style={{ display: "flex", justifyContent: "flex-end" }}>
          <p className="see-all-text" style={{ margin: 0, fontSize: "16px", color: "white", paddingRight: 10 }}>
            SEE ALL
          </p>
          <Image src={seeAll} alt="seeAll" width={20} height={20} />
        </Col>
      </Row>

      <AllProviders />
    </div>
  );
};
