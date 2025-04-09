"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

import "./style.scss";

interface GameCardProps {
  src: string | StaticImageData;
  alt: string;
  isHot?: boolean;
  isNews?: boolean;
  labelText?: string;
}

export const GameCard: React.FC<GameCardProps> = ({
  src,
  alt,
  isHot,
  isNews,
  labelText,
}) => {
  const className = `game-card ${isHot ? "hot" : ""} ${isNews ? "news" : ""}`;

  return (
    <div className="game-card-wrapper">
      <div className={className}>
        <Image src={src} alt={alt} className="game-image" />
        {labelText && <p className="overlay-text">{labelText}</p>}
      </div>
    </div>
  );
};
