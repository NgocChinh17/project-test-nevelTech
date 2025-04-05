import { Button, Space } from "antd";
import React from "react";
import Image from "next/image";

import daimon from '../../assets/iconButton/daimon.svg';
import vip from '../../assets/iconButton/vip.svg';
import promo from '../../assets/iconButton/promotion 5.svg';
import hot from '../../assets/iconButton/hot.svg';
import p2p from '../../assets/iconButton/p2p.svg';
import games from '../../assets/iconButton/games.svg';
import providers from '../../assets/iconButton/providers.svg';

const buttons = [
  { label: "Diamond mine", icon: daimon },
  { label: "VIP", icon: vip },
  { label: "ProMotion", icon: promo },
  { label: "Hot Match", icon: hot },
  { label: "P2P Transaction", icon: p2p },
  { label: "Games", icon: games },
  { label: "Providers", icon: providers },
];

export const MenuButton = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <Space size={20} wrap>
          {buttons.map((btn, index) => (
            <Button style={{backgroundColor: "#03193A", color: "white"}} key={index}>
              <Image
                src={btn.icon}
                alt={btn.label}
                width={16}
                height={16}
                style={{ marginRight: 8 }}
              />
              {btn.label}
            </Button>
          ))}
        </Space>
      </div>
    );
  };
