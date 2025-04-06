"use client";
import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
import "./styles.scss";
import { GameCard } from "@/components/TagCard";

export const ExclusiveGames = () => {
  return (
    <div style={{ marginTop: 50, overflowX: "hidden" }}>
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

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={false}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 10 },
          480: { slidesPerView: 3, spaceBetween: 15 },
          640: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 50 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <GameCard src={HPGaming} alt="HPGaming" isHot />
        </SwiperSlide>
        <SwiperSlide>
          <GameCard src={veliplay} alt="veliplay" isHot />
        </SwiperSlide>
        <SwiperSlide>
          <GameCard src={evolution} alt="evolution" isNews />
        </SwiperSlide>
        <SwiperSlide>
          <GameCard src={launch} alt="launch" isNews />
        </SwiperSlide>
        <SwiperSlide>
          <GameCard src={onlypkay} alt="onlypkay" />
        </SwiperSlide>
        <SwiperSlide>
          <GameCard src={deepdive} alt="deepdive" />
        </SwiperSlide>
        <SwiperSlide>
          <GameCard src={funry} alt="funry" isHot />
        </SwiperSlide>
        <SwiperSlide>
          <GameCard src={cuoi} alt="cuoi" />
        </SwiperSlide>
      </Swiper>

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
