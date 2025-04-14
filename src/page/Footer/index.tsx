"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Collapse } from "antd";

import "./style.scss";

import facebook from "@/assets/iconFooter/fb.svg";
import instagram from "@/assets/iconFooter/ig.svg";
import telegram from "@/assets/iconFooter/tele.svg";
import twitter from "@/assets/iconFooter/tw.svg";
import apple from "@/assets/iconFooter/apple.svg";
import android from "@/assets/iconFooter/android.svg";

//icon dropdown
import Dropdown from "@assets/iconFooter/iconDropdown.png";

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
  return (
    <footer className="footer-mobile">
      <div className="container">
        {/* Mobile */}
        <div className="mb">
          <Collapse
            ghost
            expandIconPosition="end"
            defaultActiveKey={["0", "1", "2"]}
            expandIcon={({ isActive }) => (
              <Image
                src={Dropdown}
                alt="Dropdown icon"
                style={{
                  transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s",
                  width: 16,
                  height: 16,
                }}
              />
            )}
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

          <div
            className="footer-contact"
            style={{ textAlign: "center", marginBottom: 50 }}
          >
            <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 22 }}>
              Follow Us
            </div>
            <ul className="footer-socials" style={{ justifyContent: "center" }}>
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

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="help-box">
              <div>
                <div className="help-title">Help Center</div>
                <div className="help-subtext">If you have any questions?</div>
              </div>
              <Button type="primary" className="get-answers">
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
        </div>

        {/* PC */}
        <div className="pc">
          <div className="footer-pc-wrapper">
            <div className="footer-column">
              <div className="footer-title">Help Center</div>
              <div className="footer-subtext">If you have any questions?</div>
              <Button type="primary" style={{ marginBottom: 16, width: 200 }}>
                GET ANSWERS
              </Button>
              <ul className="footer-socials">
                {socialIcons.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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

            {footerMenus.map((menu, idx) => (
              <div key={idx} className="footer-column">
                <div className="footer-title">{menu.title}</div>
                <ul className="footer-links">
                  {menu.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="white">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer-column">
              <Link href="#">
                <div className="mac-box">
                  <Image src={apple} alt="Apple" width={32} height={32} />
                  <div>
                    <div className="app-title">Bluechip App</div>
                    <div className="app-subtext">for Mac OS</div>
                  </div>
                </div>
              </Link>
              <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                {[
                  { icon: android, label: "Android" },
                  { icon: apple, label: "iOS" },
                ].map((item, idx) => (
                  <div key={idx} className="app-icon-box">
                    <Link
                      href="#"
                      className="white"
                      style={{ textAlign: "center" }}
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
          </div>
        </div>
      </div>
    </footer>
  );
};
