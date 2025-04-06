"use client";
import React from "react";
import { Button, Col, Collapse, Grid, Row } from "antd";
import Image from "next/image";

import "./style.scss";

import facebook from "../../assets/iconFooter/fb.svg";
import instagram from "../../assets/iconFooter/ig.svg";
import telegram from "../../assets/iconFooter/tele.svg";
import twitter from "../../assets/iconFooter/tw.svg";
import apple from "../../assets/iconFooter/apple.svg";
import android from "../../assets/iconFooter/android.svg";

const { useBreakpoint } = Grid;
const { Panel } = Collapse;

export const FooterPage = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <div
      className="footer-mobile"
      style={{ backgroundColor: "#12294A", color: "#fff", padding: "2rem" }}
    >
      {isMobile ? (
        <>
          <Collapse
            ghost
            accordion
            expandIconPosition="end"
            style={{ backgroundColor: "transparent", color: "white" }}
          >
            <Panel header="Games" key="1">
              <div className="white">Game 1</div>
              <div className="white">Game 2</div>
              <div className="white">Game 3</div>
              <div className="white">Game 14</div>
            </Panel>
            <Panel header="About" key="2">
              <div className="white">About Us</div>
              <div className="white">Promotions</div>
              <div className="white">VIP</div>
              <div className="white">Help Center</div>
              <div className="white">Awards & Certificates</div>
              <div className="white">App</div>
            </Panel>
            <Panel header="Legal Information" key="3">
              <div className="white">General Terms & Conditions</div>
              <div className="white">Responsible Gaming Policy</div>
              <div className="white">Sports Betting Rules</div>
              <div className="white">Privacy and Cookies Policy</div>
              <div className="white">Payment Methods</div>
              <div className="white">Limits</div>
            </Panel>
          </Collapse>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <div style={{ marginBottom: 8 }}>Follow Us</div>
            <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
              <Image src={telegram} alt="Telegram" width={24} height={24} />
              <Image src={facebook} alt="Facebook" width={24} height={24} />
              <Image src={instagram} alt="Instagram" width={24} height={24} />
              <Image src={twitter} alt="Twitter" width={24} height={24} />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginTop: "2rem",
            }}
          >
            {/* Help Center */}
            <div
              style={{
                backgroundColor: "#1A3157",
                padding: "16px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontWeight: 50, fontSize: 15 }}>Help Center</div>
                <div style={{ fontSize: 13, fontWeight: 400, color: "#90A2BD" }}>
                  If you have any questions?
                </div>
              </div>
              <Button
                type="primary"
                style={{
                  backgroundColor: "#2D5BFF",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: 400,
                  fontSize: 13,
                }}
              >
                GET ANSWERS
              </Button>
            </div>

            {/* App download section */}
            <div style={{ display: "flex", gap: 12 }}>
              {/* Android */}
              <div
                style={{
                  backgroundColor: "#1A3157",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <Image src={android} alt="Android" width={28} height={28} />
                <div>
                  <div style={{ fontWeight: 500, fontSize: 12 }}>Bluechip App</div>
                  <div style={{ fontSize: 12, color: "#90A2BD" }}>
                    for Android
                  </div>
                </div>
              </div>

              {/* iOS */}
              <div
                style={{
                  backgroundColor: "#1A3157",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <Image src={apple} alt="iOS" width={28} height={28} />
                <div>
                  <div style={{ fontWeight: 500, fontSize: 12 }}>Bluechip App</div>
                  <div style={{ fontSize: 12, color: "#90A2BD" }}>for iOS</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <div style={{ fontWeight: 600, fontSize: 16 }}>Help Center</div>
            <div style={{ marginBottom: 8 }}>If you have any questions?</div>
            <Button type="primary" style={{ marginBottom: 16 }}>
              GET ANSWERS
            </Button>
            <div style={{ display: "flex", gap: 16 }}>
              <Image src={telegram} alt="Telegram" width={24} height={24} />
              <Image src={facebook} alt="Facebook" width={24} height={24} />
              <Image src={instagram} alt="Instagram" width={24} height={24} />
              <Image src={twitter} alt="Twitter" width={24} height={24} />
            </div>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Games</div>
            <div>Game 1</div>
            <div>Game 2</div>
            <div>Game 3</div>
            <div>Game 14</div>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>About</div>
            <div>About Us</div>
            <div>Promotions</div>
            <div>VIP</div>
            <div>Help Center</div>
            <div>Awards & Certificates</div>
            <div>App</div>
          </Col>

          <Col xs={24} sm={12} md={12} lg={5} xl={5}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>
              Legal Information
            </div>
            <div>General Terms & Conditions</div>
            <div>Responsible Gaming Policy</div>
            <div>Sports Betting Rules</div>
            <div>Privacy and Cookies Policy</div>
            <div>Payment Methods</div>
            <div>Limits</div>
          </Col>

          <Col xs={24} sm={12} md={12} lg={5} xl={5}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  backgroundColor: "#1A3157",
                  padding: "10px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Image src={apple} alt="Apple" width={24} height={24} />
                <div>
                  <div style={{ fontWeight: 600 }}>Bluechip App</div>
                  <div style={{ fontSize: 12 }}>for Mac OS</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <div
                  style={{
                    backgroundColor: "#1A3157",
                    padding: "10px",
                    borderRadius: "8px",
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  <Image src={android} alt="Android" width={24} height={24} />
                  <div>Android</div>
                </div>
                <div
                  style={{
                    backgroundColor: "#1A3157",
                    padding: "10px",
                    borderRadius: "8px",
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  <Image src={apple} alt="Apple" width={24} height={24} />
                  <div>iOS</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};
