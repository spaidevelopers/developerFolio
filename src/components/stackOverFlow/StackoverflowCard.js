import React, { Component,createRef, useContext } from 'react';
import "./StackoverflowCard.scss";
import {socialMediaLinks} from "../../portfolio";
import {credibilityInfo} from "../../portfolio";
import {Fade, Slide} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const GetDescBullets = ({descBullets}) => {
    return descBullets
        ? descBullets.map((item, i) => (
            <li key={i} className="subTitle">
                {item}
            </li>
        ))
        : null;
};

export default class StackoverflowCard extends React.Component {
    constructor(props) {
        super(props);

        fetch('https://api.stackexchange.com/2.2/users/1830063?site=stackoverflow')
            .then((res) => res.json())
            .then((json) => {
                this.setState({ userData: json.items[0] });
            });

        this.state = {
            userData: {
                user_id: null,
                profile_image: '',
                display_name: '',
                location: '',
                reputation: 0,
                badge_counts: {
                    gold: 0,
                    silver: 0,
                    bronze: 0
                }
            }
        };

    }


    render() {
        let {userData} = this.state;

        if (!userData.user_id) {
            return <div className='stackoverflow-profile-loading'><span>Loading...</span></div>;
        }

        return (

            <div>
                <Fade left duration={1000}>
                    <div className="stackoverflow-card">

                            <div className="stackoverflow-card-left">
                                <div className='stackoverflow-profile'>
                                    <a
                                        href={socialMediaLinks.stackoverflow}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="stackoverflow-icon"></div>
                                        <img className='profile-photo' src={userData.profile_image} />
                                        <div className='top'>
                                            <div className='profile-info'>
                                                <div className='profile-name'>{userData.display_name}</div>
                                                <div className='profile-location'>{userData.location}</div>
                                                <div className='profile-stats-repo'>{userData.reputation}</div>
                                            </div>
                                        </div>
                                        <div className='bottom'>
                                            <div className='profile-stats-badge-gold'>1</div>
                                            <div className='profile-stats-badge-silver'>{userData.badge_counts.silver}</div>
                                            <div className='profile-stats-badge-bronze'>{userData.badge_counts.bronze}</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        <div className="stackoverflow-card-right">
                            <h5 className="stackoverflow-text-school">{credibilityInfo.cred1.name}</h5>

                            <div className="stackoverflow-text-details">
                                <h5>
                                    {credibilityInfo.cred1.subHeader}
                                </h5>
                                <p className="stackoverflow-text-desc">{credibilityInfo.cred1.desc}</p>
                                {/*<div className="stackoverflow-text-bullets">*/}
                                {/*    <ul>*/}
                                {/*        <GetDescBullets descBullets={credibilityInfo.cred1.descBullets} />*/}
                                {/*    </ul>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </Fade>
                <Slide left duration={2000}>
                    <div className="stackoverflow-card-border"></div>
                </Slide>
            </div>





        );
    }
}