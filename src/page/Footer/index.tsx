import React from "react";
import { Button, Col, Row, Space } from "antd";
import Image from "next/image";

import facebook from "../../assets/iconFooter/fb.svg";
import instagram from "../../assets/iconFooter/ig.svg";
import telegram from "../../assets/iconFooter/tele.svg";
import twitter from "../../assets/iconFooter/tw.svg";
import apple from "../../assets/iconFooter/apple.svg";
import android from "../../assets/iconFooter/android.svg";

export const FooterPage = () => {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#12294A", color: "#fff" }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{ fontWeight: 600 }}>Help Center</div>
          <div>If you have any questions</div>
          <Button type="primary" style={{ marginTop: 8 }}>GET ANSWERS</Button>

          <div style={{ display: "flex", gap: "12px", marginTop: "1rem" }}>
            <Image src={facebook} alt="Facebook" width={24} height={24} />
            <Image src={instagram} alt="Instagram" width={24} height={24} />
            <Image src={telegram} alt="Telegram" width={24} height={24} />
            <Image src={twitter} alt="Twitter" width={24} height={24} />
          </div>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{ fontWeight: 600 }}>Games</div>
          <div>Game 1</div>
          <div>Game 2</div>
          <div>Game 3</div>
          <div>Game 14</div>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{ fontWeight: 600 }}>About</div>
          <div>About Us</div>
          <div>Promotions</div>
          <div>VIP</div>
          <div>Help Center</div>
          <div>Awards & Certificates</div>
          <div>App</div>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
          <div style={{ fontWeight: 600 }}>Legal Information</div>
          <div>General Terms & Conditions</div>
          <div>Responsible Gaming Policy</div>
          <div>Sports Betting Rules</div>
          <div>Privacy and Cookies Policy</div>
          <div>Payment Methods</div>
          <div>Limits</div>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <div style={{ backgroundColor: "#1A3157", padding: "10px", borderRadius: "6px", marginBottom: 8 }}>
            <Space>
              <Image src={apple} alt="Apple" width={24} height={24} />
              <span>
                Bluechip App <br /> for Mac OS
              </span>
            </Space>
          </div>

          <Space style={{ gap: 16 }}>
            <div style={{ backgroundColor: "#1A3157", padding: "10px", borderRadius: "6px" }}>
              <Image src={android} alt="Android" width={24} height={24} />
              <div>Android</div>
            </div>
            <div style={{ backgroundColor: "#1A3157", padding: "10px", borderRadius: "6px" }}>
              <Image src={apple} alt="Apple" width={24} height={24} />
              <div>iOS</div>
            </div>
          </Space>
        </Col>
      </Row>
    </div>
  );
};
