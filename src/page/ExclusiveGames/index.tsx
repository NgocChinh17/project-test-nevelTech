"use client";
import React from "react";
import { Row, Col } from "antd";
import seeAll from "../../assets/iconButton/seeAll.svg";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";

import HPGaming from "../../assets/iconButton/100HPGaming.jpg";
import veliplay from "../../assets/iconButton/veliplay.jpg";
import evolution from "../../assets/iconButton/evolution.jpg";
import launch from "../../assets/iconButton/launch.jpg";
import onlypkay from "../../assets/iconButton/onlypkay.jpg";
import deepdive from "../../assets/iconButton/deepdive.jpg";
// import xMatch from "../../assets/iconButton/xmatch1jpg.jpg";
import funry from "../../assets/iconButton/funry.jpg";
import cuoi from "../../assets/iconButton/cuoi1.png";
import { AllProviders } from "@/page/AllProviders";



export const ExclusiveGames = () => {
  return (
    <div style={{ marginTop: 50, overflowX: "hidden" }}>
      <Row gutter={[16, 16]} justify="space-between" align="middle">
        <Col
          xs={18}
          sm={16}
          md={16}
          style={{ display: "flex", alignItems: "center" }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "18px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Exclusive Games
          </p>
        </Col>
        <Col
          xs={6}
          sm={8}
          md={8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <p
            className="see-all-text"
            style={{
              margin: 0,
              fontSize: "16px",
              color: "white",
              paddingRight: 10,
            }}
          >
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
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={HPGaming} alt="HPGaming" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={veliplay} alt="veliplay" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={evolution} alt="evolution" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={launch} alt="launch" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={onlypkay} alt="onlypkay" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={deepdive} alt="deepdive" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Image style={{background: "#00370600"}} src={xMatch} alt="xMatch" />
        </SwiperSlide> */}
        <SwiperSlide>
          <Image src={funry} alt="funry" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cuoi} alt="cuoi" />
        </SwiperSlide>
      </Swiper>

      <Row gutter={[16, 16]} justify="space-between" align="middle">
        <Col
          xs={18}
          sm={16}
          md={16}
          style={{ display: "flex", alignItems: "center" }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "18px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            ALL Providers
          </p>
        </Col>
        <Col
          xs={6}
          sm={8}
          md={8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <p
            className="see-all-text"
            style={{
              margin: 0,
              fontSize: "16px",
              color: "white",
              paddingRight: 10,
            }}
          >
            SEE ALL
          </p>
          <Image src={seeAll} alt="seeAll" width={20} height={20} />
        </Col>
      </Row>

      <AllProviders/>
    </div>
  );
};
