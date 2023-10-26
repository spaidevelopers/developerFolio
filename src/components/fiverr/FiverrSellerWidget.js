import React, { useEffect } from 'react';

const FiverrSellerWidget = (isDark) => {
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

    return (
        <div className={isDark ? "dark-mode fiverr-card" : "fiverr-card"}>
            <div className="fiverrWidgetContainer">
                <div className="fiverr-card">
                <div itemScope itemType="http://schema.org/Person" className="fiverr-seller-widget"
                     style={{display: 'inline-block'}}>
                    <a itemProp="url" href="https://www.fiverr.com/tousifkhan" rel="nofollow" target="_blank"
                       style={{display: 'inline-block'}}>
                        <div className="fiverr-seller-content"
                             id="fiverr-seller-widget-content-57b60842-af88-4b4c-9f0f-f9f1a12d157f"
                             itemProp="contentURL" style={{display: 'none'}}></div>
                        <div id="fiverr-widget-seller-data" style={{display: 'none'}}>
                            <div itemProp="name">tousifkhan</div>
                            <div itemScope itemType="http://schema.org/Organization"><span itemProp="name">Fiverr</span>
                            </div>
                            <div itemProp="jobtitle">Seller</div>
                            <div itemProp="description">
                                Done my BS in computer science from one of the best University.
                                Having 9+ Years of Experience in Enterprise Application Development including Business
                                Process Management, Microservices architecture, and Business Intelligence.
                                I am really good to discuss business ideas and find the loopholes before going to
                                implement.
                                I am a passionate and funny person by nature, who Loves to Code and be humble with
                                everyone
                            </div>
                        </div>
                    </a>
                    <div className="fiverr-detail-div">
                        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                            Fiverr Seller Widget
                        </h5>
                        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                            This is the description for fiverr only
                        </p>
                    </div>
                    <div className="fiverr-card-footer">

                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default FiverrSellerWidget;