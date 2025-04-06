import { Button, Col, Row } from "antd";
import React from "react";
import Image from "next/image";

import daimon from "../../assets/iconButton/daimon.svg";
import vip from "../../assets/iconButton/vip.svg";
import promo from "../../assets/iconButton/promotion 5.svg";
import hot from "../../assets/iconButton/hot.svg";
import p2p from "../../assets/iconButton/p2p.svg";
import games from "../../assets/iconButton/games.svg";
import providers from "../../assets/iconButton/providers.svg";
import search from "../../assets/iconButton/search.svg";

const buttonStyle = {
  backgroundColor: "#03193A",
  color: "white",
  padding: "16px 50px",
  fontSize: "13px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const MenuButton = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Row 
        style={{
          display: "flex", 
          flexWrap: "wrap",
        }} 
        gutter={[16, 16]} 
        justify="center"
      >
        <Col xs={8} sm={6} md={0} lg={0}>
          <Button style={buttonStyle}>
            <Image src={search} alt="Search" />
            Search
          </Button>
        </Col>

        <Col xs={0} sm={0} md={3} lg={3}>
          <Button style={buttonStyle}>
            <Image src={daimon} alt="Diamond mine" />
            Diamond mine
          </Button>
        </Col>

        <Col xs={0} sm={0} md={3} lg={3}>
          <Button style={buttonStyle}>
            <Image src={vip} alt="VIP" />
            VIP
          </Button>
        </Col>

        <Col xs={0} sm={0} md={3} lg={3}>
          <Button style={buttonStyle}>
            <Image src={promo} alt="ProMotion" />
            ProMotion
          </Button>
        </Col>

        <Col xs={0} sm={0} md={3} lg={3}>
          <Button style={buttonStyle}>
            <Image src={hot} alt="Hot Match" />
            Hot Match
          </Button>
        </Col>

        <Col xs={0} sm={0} md={3} lg={3}>
          <Button style={buttonStyle}>
            <Image src={p2p} alt="P2P Transaction" />
            P2P Transaction
          </Button>
        </Col>

        <Col xs={8} sm={6} md={3} lg={3}>
          <Button style={buttonStyle}>
            <Image src={games} alt="Games" />
            Games
          </Button>
        </Col>

        <Col xs={8} sm={6} md={3} lg={3}>
          <Button style={buttonStyle}>
            <Image src={providers} alt="Providers" />
            Providers
          </Button>
        </Col>
      </Row>
    </div>
  );
};
