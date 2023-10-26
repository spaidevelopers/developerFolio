import React, {useContext} from "react";
import "./Podcast.scss";
import {podcastSection, splashScreen} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import stackOverFlowIcon from "../../animation_stackoverflow_small.gif";
import StackoverflowCard from "../../components/stackOverFlow/StackoverflowCard";
import FiverrSellerWidget from "../../components/fiverr/FiverrSellerWidget";

export default function Podcast() {
  const {isDark} = useContext(StyleContext);

  if (!podcastSection)
    console.error("podcastSection object for Podcast section is missing");

  if (!podcastSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title} <img src={stackOverFlowIcon} height="40px;" /> </h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>
      <div className="podcast-main-div">
        <StackoverflowCard />
        {/*<FiverrSellerWidget />*/}
      </div>
      </div>
    </Fade>
  );
}
