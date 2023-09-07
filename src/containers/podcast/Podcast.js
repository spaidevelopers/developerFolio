import React, {useContext} from "react";
import "./Podcast.scss";
import {podcastSection, splashScreen} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import stackOverFlowIcon from "../../animation_stackoverflow_small.gif";

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
          <a href="https://stackoverflow.com/users/1830063/tousif">
            <img src="https://stackoverflow.com/users/flair/1830063.png?theme=default"
                 width="208" height="58"
                 alt="profile for Tousif at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                 title="profile for Tousif at Stack Overflow, Q&amp;A for professional and enthusiast programmers" />
            </a>
        </div>
      </div>
    </Fade>
  );
}
