import { Col } from "antd";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import daimon from "@assets/iconButton/daimon.png";
import vip from "@assets/iconButton/VIP.png";
import promo from "@assets/iconButton/promotion.png";
import hot from "@assets/iconButton/HotMatch.png";
import p2p from "@assets/iconButton/P2PTransaction.png";
import games from "@assets/iconButton/game.png";
import providers from "@assets/iconButton/promotion.png";
import search from "@assets/iconButton/search.svg";

import './style.scss';

const listButton = [
  {
    id: 1,
    icon: search,
    title: "Search",
    path: "#",
    className: "hide-on-pc"
  },
  {
    id: 2,
    icon: daimon,
    title: "Diamond mine",
    path: "#",
    className: "hide-on-mb"
  },
  {
    id: 3,
    icon: vip,
    title: "VIP",
    path: "#",
    className: "hide-on-mb"
  },
  {
    id: 4,
    icon: promo,
    title: "Promotion",
    path: "#",
    className: "hide-on-mb"
  },
  {
    id: 5,
    icon: hot,
    title: "Hot Match",
    path: "#",
    className: "hide-on-mb"
  },
  {
    id: 6,
    icon: p2p,
    title: "P2P Transaction",
    path: "#",
    className: "hide-on-mb"
  },
  {
    id: 7,
    icon: games,
    title: "Games",
    path: "#",
    className: ""
  },
  {
    id: 8,
    icon: providers,
    title: "Providers",
    path: "#",
    className: ""
  },
];

export const MenuButton = () => {
  const renderButtons = () =>
    listButton.map((item) => (
      <Col key={item.id} className={`${item.className} button-item`}>
        <Link href={item.path}>
          <button className="custom-button">
            <Image
              src={item.icon}
              alt={item.title}
              className="icon-img"
            />
            {item.title}
          </button>
        </Link>
      </Col>
    ));

  return <div className="button-row">{renderButtons()}</div>;
};
