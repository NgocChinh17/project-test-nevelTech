"use client";
import Image from "next/image";
import React, { useState, useMemo, useEffect } from "react";
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
import { CloseOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import Link from "next/link";

// image
import White_logo from "@assets/image/White_logo.svg";

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

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          padding: "0 10px",
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
        padding: isLargeScreen ? "16px 240px" : "10px 20px",
        boxSizing: "border-box",
        marginBottom: isLargeScreen ? 55.17 : 0,
        borderBottom: "1px solid #12294A",
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
              title={<span style={{ color: "white" }}>Menu</span>}
              placement={placement}
              width={300}
              onClose={onClose}
              open={open}
              closeIcon={<CloseOutlined style={{ color: "white" }} />}
              bodyStyle={{
                backgroundColor: "#03193A",
              }}
              headerStyle={{
                backgroundColor: "#03193A",
                borderBottom: "1px solid #12294A",
              }}
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
                      color: activeItem === item.id ? "#00C4B4" : "white",
                      textDecoration: "none",
                      transition: "color 0.3s",
                      fontSize: "16px",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "#00C4B4")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color =
                        activeItem === item.id ? "#00C4B4" : "white")
                    }
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </Drawer>

            <Link href="#">
              <Image src={White_logo} alt="logo" width={80} height={30} />
            </Link>
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
              open={showSearch}
            >
              <div>
                <SearchOutlined
                  onClick={() => setShowSearch(!showSearch)}
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
            <Link href="#">
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
            </Link>

            <Link href="#">
              <Button
                style={{
                  backgroundColor: "#01AF70",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                REGISTRATION
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};
