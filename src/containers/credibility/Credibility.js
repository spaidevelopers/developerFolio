import React from "react";
import "./Credibility.scss";
import {credibilityInfo} from "../../portfolio";
import StackoverflowCard from "../../components/stackOverFlow/StackoverflowCard";
import FiverrSellerWidget from "../../components/fiverr/FiverrSellerWidget";
import TrustPilot from "../../components/trustPilot/TrustPilot";
import TrustpilotWidget from "../../components/trustPilot/TrustPilot";
import TrustpilotReviewCollector from "../../components/trustPilot/TrustPilot";

export default function Credibility() {
  if (credibilityInfo.display) {
    return (
      <div className="credibility-section" id="credibility">
        <h1 className="credibility-heading">Credibility</h1>
        <div className="credibility-card-container">


            <FiverrSellerWidget />
            <TrustpilotReviewCollector />
            <StackoverflowCard />

        </div>
      </div>
    );
  }
  return null;
}
