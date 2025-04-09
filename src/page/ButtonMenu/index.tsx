import { Button, Col } from "antd";
import React from "react";
import Image from "next/image";

import daimon from "@assets/iconButton/daimon.svg";
import vip from "@assets/iconButton/vip.svg";
import promo from "@assets/iconButton/promotion 5.svg";
import hot from "@assets/iconButton/hot.svg";
import p2p from "@assets/iconButton/p2p.svg";
import games from "@assets/iconButton/games.svg";
import providers from "@assets/iconButton/providers.svg";
import search from "@assets/iconButton/search.svg";

import './style.scss';

const buttonStyle = {
  backgroundColor: "#12294A",
  color: "white",
  fontSize: "13px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "17px 30.7px",
};

const listButton = [
  {
    id: 1,
    icon: search,
    title: "Search",
    isDisable: true,
    showOn: { xs: true, md: false },
  },
  {
    id: 2,
    icon: daimon,
    title: "Diamond mine",
    showOn: { md: true },
  },
  {
    id: 3,
    icon: vip,
    title: "VIP",
    showOn: { md: true },
  },
  {
    id: 4,
    icon: promo,
    title: "Promotion",
    showOn: { md: true },
  },
  {
    id: 5,
    icon: hot,
    title: "Hot Match",
    showOn: { md: true },
  },
  {
    id: 6,
    icon: p2p,
    title: "P2P Transaction",
    showOn: { md: true },
  },
  {
    id: 7,
    icon: games,
    title: "Games",
    showOn: { xs: true, md: true },
  },
  {
    id: 8,
    icon: providers,
    title: "Providers",
    showOn: { xs: true, md: true },
  },
];

export const MenuButton = () => {
  const renderButtons = () =>
    listButton.map((item) => {
      const colProps = {
        xs: item.showOn?.xs ? 8 : 0,
        sm: item.showOn?.xs ? 6 : 0,
        md: item.showOn?.md ? 3 : 0,
        lg: item.showOn?.md ? 3 : 0,
      };

      return (
        <Col key={item.id} {...colProps}>
          <Button style={buttonStyle} disabled={item.isDisable}>
            <Image
              src={item.icon}
              alt={item.title}
              className="icon-img"
              style={{ marginRight: 6 }}
            />
            {item.title}
          </Button>
        </Col>
      );
    });

  return (
    <div className="responsive-padding" style={{ overflowX: "hidden" }}>
      <div className="button-row">
        {renderButtons()}
      </div>
    </div>
  );
};
