import React from "react";
import "./NotFound.scss"; // Assume you create a separate CSS file for styling

const NotFound = () => (
    <div className="NotFound">
        <im src={require("../../assets/images/404-page.gif")} alt="Lost in Space" />
        <h1>🚀 Whoops! Lost in the Digital Void: A Space Oddity</h1>
        <p>Remember, in space, no one can hear you scream... but on the internet, everyone can see your 404 error. Let’s keep this our little secret, shall we?</p>
        <a href="/">Or, Take Me to the Homepage</a>
    </div>
);

export default NotFound;