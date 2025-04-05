"use client";

import Image from "next/image";
import React, { useState, useMemo } from "react";
import {
  Button,
  Drawer,
  DrawerProps,
  Input,
  Row,
  Col,
  Dropdown,
  Menu,
} from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";

// image
import White_logo from "../../assets/image/White_logo.svg";

// Menu list
const menuList = [
  { id: 1, title: "HOME", path: "#" },
  { id: 2, title: "GAME", path: "#" },
  { id: 3, title: "INFO", path: "#" },
  { id: 4, title: "NEWS", path: "#" },
  { id: 5, title: "PROMOTIONS", path: "#" },
  { id: 6, title: "VIP", path: "#" },
];

export const HeaderPage = () => {
  const [open, setOpen] = useState(false);
  const [placement] = useState<DrawerProps["placement"]>("left");
  const [showSearch, setShowSearch] = useState(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleMenuClick = (id: number) => {
    setActiveItem(id);
  };

  const renderMenu = useMemo(() => {
    return menuList.map((item) => (
      <a
        key={item.id}
        href={item.path}
        onClick={() => handleMenuClick(item.id)}
        style={{
          margin: "0 10px",
          color: activeItem === item.id ? "#00C4B4" : "white",
          textDecoration: "none",
          fontSize: "14px",
        }}
      >
        {item.title}
      </a>
    ));
  }, [activeItem]);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleSearchBlur = () => {
    setShowSearch(false);
  };

  const searchMenu = (
    <Menu>
      <Menu.Item>
        {showSearch ? (
          <Input
            autoFocus
            placeholder="Search..."
            onBlur={handleSearchBlur}
            style={{ width: 250, maxWidth: 300 }}
          />
        ) : (
          <SearchOutlined
            onClick={handleSearchClick}
            style={{ fontSize: "20px" }}
          />
        )}
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{
        backgroundColor: "#03193A",
        color: "white",
        height: "67.8px", 
        width: "100%",
        padding: "10px 20px",
        boxSizing: "border-box",
      }}
    >
      <Row align="middle" justify="space-between" gutter={[16, 16]}>
        <Col xs={8} sm={6} md={4} lg={4} xl={3}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MenuOutlined
              onClick={showDrawer}
              style={{ fontSize: "20px", marginRight: "10px", color: "white" }}
            />
            <Drawer
              title="Menu"
              placement={placement}
              width={300}
              onClose={onClose}
              open={open}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {menuList.map((item) => (
                  <a
                    key={item.id}
                    href={item.path}
                    onClick={() => handleMenuClick(item.id)}
                    style={{
                      color: activeItem === item.id ? "#00C4B4" : "black",
                      textDecoration: "none",
                    }}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </Drawer>

            <Image src={White_logo} alt="logo" width={80} height={30} />
          </div>
        </Col>

        <Col xs={0} sm={12} md={14} lg={14} xl={16}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 20,
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Dropdown
              overlay={searchMenu}
              trigger={["click"]}
              placement="bottomCenter"
              onVisibleChange={(visible) => setShowSearch(visible)}
            >
              <div>
                <SearchOutlined
                  style={{ fontSize: "20px", cursor: "pointer" }}
                />
              </div>
            </Dropdown>
            <div style={{ display: "flex", alignItems: "center" }}>
              {renderMenu}
            </div>
          </div>
        </Col>

        <Col xs={8} sm={6} md={6} lg={5} xl={4}>
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
          >
            <Button
              style={{
                backgroundColor: "#12294A",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              LOGIN
            </Button>
            <Button
              style={{
                backgroundColor: "#01AF70",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              REGISTER
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
