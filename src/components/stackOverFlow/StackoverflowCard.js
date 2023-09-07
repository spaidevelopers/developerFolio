import React, { Component } from 'react';
import "./StackoverflowCard.scss";

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
            <div className='stackoverflow-profile'>
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
            </div>
        );
    }
}