"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Collapse, Grid, Row, Col } from "antd";

import "./style.scss";

import facebook from "@/assets/iconFooter/fb.svg";
import instagram from "@/assets/iconFooter/ig.svg";
import telegram from "@/assets/iconFooter/tele.svg";
import twitter from "@/assets/iconFooter/tw.svg";
import apple from "@/assets/iconFooter/apple.svg";
import android from "@/assets/iconFooter/android.svg";

const { useBreakpoint } = Grid;
const { Panel } = Collapse;

const footerMenus = [
  {
    title: "Games",
    links: [
      { name: "Game 1", href: "#" },
      { name: "Game 2", href: "#" },
      { name: "Game 3", href: "#" },
      { name: "Game 14", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "About Us", href: "#" },
      { name: "Promotions", href: "#" },
      { name: "VIP", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Awards & Certificates", href: "#" },
      { name: "App", href: "#" },
    ],
  },
  {
    title: "Legal Information",
    links: [
      { name: "General Terms & Conditions", href: "#" },
      { name: "Responsible Gaming Policy", href: "#" },
      { name: "Sports Betting Rules", href: "#" },
      { name: "Privacy and Cookies Policy", href: "#" },
      { name: "Payment Methods", href: "#" },
      { name: "Limits", href: "#" },
    ],
  },
];

const socialIcons = [
  { icon: telegram, alt: "Telegram", href: "#" },
  { icon: facebook, alt: "Facebook", href: "#" },
  { icon: instagram, alt: "Instagram", href: "#" },
  { icon: twitter, alt: "Twitter", href: "#" },
];

export const FooterPage = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <footer
      className="footer-mobile"
      style={{
        backgroundColor: "#12294A",
        color: "#fff",
        padding: isMobile ? "2rem" : "60px 55px 100px 240px",
      }}
    >
      {isMobile ? (
        <>
          <Collapse
            ghost
            expandIconPosition="end"
            defaultActiveKey={["0", "1", "2"]}
          >
            {footerMenus.map((menu, idx) => (
              <Panel
                header={menu.title}
                key={String(idx)}
                style={{
                  backgroundColor: "#1A3157",
                  borderRadius: 10,
                  marginBottom: 16,
                  overflow: "hidden",
                }}
              >
                <ul style={{ paddingLeft: 16 }}>
                  {menu.links.map((link, index) => (
                    <li key={index} style={{ marginBottom: 20 }}>
                      <Link href={link.href} className="white">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Panel>
            ))}
          </Collapse>

          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 22 }}>
              Follow Us
            </div>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 44.33,
                padding: 0,
                listStyle: "none",
              }}
            >
              {socialIcons.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      className="social-icon"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginTop: "2rem",
            }}
          >
            <div className="help-box">
              <div>
                <div className="help-title">Help Center</div>
                <div className="help-subtext">If you have any questions?</div>
              </div>
              <Button
                type="primary"
                style={{
                  backgroundColor: "#2D5BFF",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: 13,
                }}
              >
                GET ANSWERS
              </Button>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              {[
                { icon: android, label: "Android" },
                { icon: apple, label: "iOS" },
              ].map((app, idx) => (
                <div key={idx} className="app-box">
                  <Image
                    src={app.icon}
                    alt={app.label}
                    width={28}
                    height={28}
                  />
                  <div>
                    <div className="app-title">Bluechip App</div>
                    <div className="app-subtext">for {app.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={24} md={12} lg={6}>
            <div style={{ fontWeight: 600, fontSize: 16 }}>Help Center</div>
            <div style={{ marginBottom: 8 }}>If you have any questions?</div>
            <Button type="primary" style={{ marginBottom: 16, width: 200 }}>
              GET ANSWERS
            </Button>
            <ul style={{ display: "flex", gap: 16 }}>
              {socialIcons.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      className="social-icon"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {footerMenus.map((menu, idx) => (
            <Col key={idx} xs={12} sm={12} md={6} lg={4}>
              <div style={{ fontWeight: 600, marginBottom: 20 }}>
                {menu.title}
              </div>
              <ul>
                {menu.links.map((link, index) => (
                  <li
                    key={index}
                    style={{ marginBottom: 12, color: "#90A2BD" }}
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
          ))}

          <Col xs={24} sm={12} md={12} lg={6}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div className="mac-box">
                <Image src={apple} alt="Apple" width={32} height={32} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>
                    Bluechip App
                  </div>
                  <div style={{ fontSize: 12 }}>for Mac OS</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { icon: android, label: "Android" },
                  { icon: apple, label: "iOS" },
                ].map((item, idx) => (
                  <div key={idx} className="app-icon-box">
                    <Link
                      href="#"
                      style={{ textAlign: "center", color: "#fff" }}
                    >
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={24}
                        height={24}
                      />
                      <div style={{ fontSize: 12 }}>{item.label}</div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      )}
    </footer>
  );
};
