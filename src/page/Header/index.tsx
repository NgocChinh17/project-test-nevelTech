"use client";

import React, { useState } from "react";
import { Dropdown, Input } from "antd";
import Image from "next/image";

import search from "@assets/iconButton/search.svg"
import drawers from "@assets/image/drawer.svg";
import White_logo from "@assets/image/White_logo.svg";

import "./style.scss";
import Link from "next/link";

const listMenu = [
  { id: 1, name: "HOME", path: "#" },
  { id: 2, name: "GAMES", path: "#" },
  { id: 3, name: "INFO", path: "#" },
  { id: 4, name: "NEWS", path: "#" },
  { id: 5, name: "PROMOTIONS", path: "#" },
  { id: 6, name: "VIP", path: "#" },
];

export const HeaderPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const searchDropdown = (
    <div className="dropdown-search-wrapper">
      <Input
        type="text"
        className="dropdown-search-input"
        value={searchValue}
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );

  return (
    <div className="header-wrapper">
      <div className="container">
        <header className="header">
          <div className="left-menu">
            <div className="logo">
              <Image
                src={drawers}
                alt="drawer"
                width={35}
                className="drawer-icon"
                onClick={toggleDrawer}
              />
              <Image src={White_logo} alt="logo" />
            </div>

            <div className="pc">
              <nav className="nav">
                <Dropdown
                  overlay={searchDropdown}
                  trigger={["click"]}
                  placement="bottomLeft"
                >
                  <Image src={search} alt="search" className="search-icon"/>
                </Dropdown>

                {listMenu.map((item) => (
                  <a key={item.id} href={item.path}>
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="right-menu">
            <Link href="#">
              <button className="login">LOGIN</button>
            </Link>

            <Link href="#">
              <button className="register">REGISTRATION</button>
            </Link>
          </div>
        </header>

        <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
          <div className="drawer-header">
            <span className="close" onClick={toggleDrawer}>
              &times;
            </span>
          </div>
          <div className="drawer-content">
            {listMenu.map((item) => (
              <a key={item.id} href={item.path} onClick={toggleDrawer}>
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {isDrawerOpen && (
          <div className="drawer-overlay" onClick={toggleDrawer} />
        )}
      </div>
    </div>
  );
};
