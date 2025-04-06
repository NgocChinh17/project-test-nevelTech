import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.scss";

//all providers
import Evolution from "../../assets/allProviders/1.svg";
import spribe from "../../assets/allProviders/spribe.svg";
import veliplays from "../../assets/allProviders/veliplay.svg";
import turboGames from "../../assets/allProviders/turboGames.svg";
import smartSoft from "../../assets/allProviders/SmartSoft.svg";
import HP from "../../assets/allProviders/100HP.svg";
import BGgaming from "../../assets/allProviders/BGgaming.svg";
import Wazdan from "../../assets/allProviders/Wazdan.svg";

export const AllProviders = () => {
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  swipeToSlide: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        swipeToSlide: true,
      },
    },
  ],
};
  

  return (
    <Slider {...settings}>
      <div>
        <div className="box">
          <div className="topSection">
            <Image src={Evolution} alt="Evolution" />
          </div>
          <div className="bottomSection">
            <div className="title">Evolution</div>
            <div className="games">312 games</div>
          </div>
        </div>
      </div>
      <div>
        <div className="box">
          <div className="topSection">
            <Image src={spribe} alt="spribe" />
          </div>
          <div className="bottomSection">
            <div className="title">Spribe</div>
            <div className="games">12 games</div>
          </div>
        </div>
      </div>
      <div>
        <div className="box">
          <div className="topSection">
            <Image src={veliplays} alt="veliplay" />
          </div>
          <div className="bottomSection">
            <div className="title">VeliPlay</div>
            <div className="games">9 games</div>
          </div>
        </div>
      </div>
      <div>
        <div className="box">
          <div className="topSection">
            <Image src={turboGames} alt="turboGames" />
          </div>
          <div className="bottomSection">
            <div className="title">Turbo Games</div>
            <div className="games">36 games</div>
          </div>
        </div>
      </div>
      <div>
        <div className="box">
          <div className="topSection">
            <Image src={smartSoft} alt="smartSoft" />
          </div>
          <div className="bottomSection">
            <div className="title">SmartSoft</div>
            <div className="games">37 games</div>
          </div>
        </div>
      </div>
      <div>
        <div className="box">
          <div className="topSection">
            <Image src={HP} alt="HP" />
          </div>
          <div className="bottomSection">
            <div className="title">100HP Gaming</div>
            <div className="games">7 games</div>
          </div>
        </div>
      </div>
      <div>
        <div className="box">
          <div className="topSection">
            <Image src={BGgaming} alt="BGgaming" />
          </div>
          <div className="bottomSection">
            <div className="title">BGaming</div>
            <div className="games">166 games</div>
          </div>
        </div>
      </div>
      <div>
        <div className="box">
          <div className="topSection">
            <Image src={Wazdan} alt="Wazdan" />
          </div>
          <div className="bottomSection">
            <div className="title">Wazdan</div>
            <div className="games">199 games</div>
          </div>
        </div>
      </div>
    </Slider>
  );
};
