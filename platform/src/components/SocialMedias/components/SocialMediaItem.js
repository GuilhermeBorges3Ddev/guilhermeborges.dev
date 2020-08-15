import React from 'react';
import "./SocialMediaItem.css";

export default function index(props) {
    return (
            <div className="social__media__item">
                <a href={props.SocialMediaLink} target="_blank">
                    <img src={props.SocialMediaIcon} className="social__media__images" />
                </a>
            </div> 
    )
}
