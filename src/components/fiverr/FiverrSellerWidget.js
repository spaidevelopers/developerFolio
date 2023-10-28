import React, { useEffect, useContext, createRef } from 'react';
import "./FiverrSellerWidget.scss";
import {Fade, Slide} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {credibilityInfo} from "../../portfolio";


function GetDescBullets({ descBullets }) {
    return descBullets
        ? descBullets.map((item, i) => (
            <li key={i} className="subTitle">
                {item}
            </li>
        ))
        : null;
}


const FiverrSellerWidget = () => {
    useEffect(() => {
        // Load the Fiverr seller widget script
        const script = document.createElement('script');
        script.id = 'fiverr-seller-widget-script-57b60842-af88-4b4c-9f0f-f9f1a12d157f';
        script.src = 'https://widgets.fiverr.com/api/v1/seller/tousifkhan?widget_id=57b60842-af88-4b4c-9f0f-f9f1a12d157f';
        script.setAttribute('data-config', JSON.stringify({
            category_name: 'Programming & Tech',
        }));
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);

        return () => {
            // Clean up the script when the component is unmounted
            document.body.removeChild(script);
        }
    }, []);

    const {isDark} = useContext(StyleContext);
    return (
        <div>
        <Fade left duration={1000}>
            <div className="fiverr-card">
                    <div className="fiverr-card-left">

                        <div itemScope itemType="http://schema.org/Person" className="fiverr-seller-widget"
                             style={{display: 'inline-block'}}>
                            <a itemProp="url" href="https://www.fiverr.com/tousifkhan" rel="nofollow" target="_blank"
                               style={{display: 'inline-block'}}>
                                <div className="fiverr-seller-content"
                                     id="fiverr-seller-widget-content-57b60842-af88-4b4c-9f0f-f9f1a12d157f"
                                     itemProp="contentURL" style={{display: 'none'}}></div>
                                <div id="fiverr-widget-seller-data" style={{display: 'none'}}>
                                    <div itemProp="name">tousifkhan</div>
                                    <div itemScope itemType="http://schema.org/Organization"><span
                                        itemProp="name">Fiverr</span></div>
                                    <div itemProp="jobtitle">Seller</div>
                                    <div itemProp="description">
                                        Done my BS in computer science from one of the best University.
                                        Having 9+ Years of Experience in Enterprise Application Development including
                                        Business Process Management, Microservices architecture, and Business
                                        Intelligence.
                                        I am really good to discuss business ideas and find the loopholes before going
                                        to implement.
                                        I am a passionate and funny person by nature, who Loves to Code and be humble
                                        with everyone
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                <div className="fiverr-card-right">
                    <h5 className="fiverr-text-school">{credibilityInfo.cred2.name}</h5>

                    <div className="fiverr-text-details">
                        <h5
                            className={
                                isDark
                                    ? "dark-mode fiverr-text-subHeader"
                                    : "fiverr-text-subHeader"
                            }
                        >
                            {credibilityInfo.cred2.subHeader}
                        </h5>

                        <p className="fiverr-text-desc">Achievements</p>
                        <div className="fiverr-text-bullets">
                            <ul>
                                {credibilityInfo.cred2.descBullets.map((bullet, index) => (
                                    <li key={index}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    <Slide left duration={2000}>
        <div className="fiverr-card-border"></div>
    </Slide>
        </div>













    );
};

export default FiverrSellerWidget;