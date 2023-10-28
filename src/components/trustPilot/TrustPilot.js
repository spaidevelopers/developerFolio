import React, {useContext, useEffect} from 'react';
import {Fade, Slide} from "react-reveal";
import {credibilityInfo, socialMediaLinks} from "../../portfolio";
import "./TrustPilot.scss";
import StyleContext from "../../contexts/StyleContext";

const TrustpilotWidget = () => {
    useEffect(() => {
        // Create a script element and set its attributes
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
        script.async = true;

        // Append the script element to the document's head
        document.head.appendChild(script);

        return () => {
            // Clean up the script when the component unmounts
            document.head.removeChild(script);
        };
    }, []);

    const {isDark} = useContext(StyleContext);

    return (
        <div>
            <Fade left duration={1000}>
                <div className="trustpilot-card">

                    <div className="trustpilot-card-left">
                        <div className='trustpilot-profile'>
                            <div className="trustpilot-widget"
                                 data-locale="en-US"
                                 data-template-id="5419b6a8b0d04a076446a9ad"
                                 data-businessunit-id="6527f2278860e2ce4e38998f"
                                 data-style-height="34px"
                                 data-style-width="250px"
                                 data-theme="ligt"
                                 data-min-review-count="10"
                                 data-style-alignment="center"
                            >
                                <a href="https://www.trustpilot.com/review/tousif.me" target="_blank" rel="noopener">Trustpilot</a>
                            </div>
                        </div>
                    </div>
                    <div className="trustpilot-card-right">
                        <h5 className="trustpilot-text-school">{credibilityInfo.cred3.name}</h5>

                        <div className="trustpilot-text-details">
                            <h5
                                className={
                                     isDark
                                         ? "dark-mode education-text-subHeader"
                                         :
                                    "trustpilot-text-subHeader"
                                }
                            >
                                {credibilityInfo.cred3.subHeader}
                            </h5>
                        </div>
                    </div>
                </div>
            </Fade>
            <Slide left duration={2000}>
                <div className="trustpilot-card-border"></div>
            </Slide>
        </div>









    );
};

export default TrustpilotWidget;
