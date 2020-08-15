import React from 'react';
import "./SocialMediaItem.css";

export default function index(props) {
    return (
            <span className="social__media__item">
                <img src={props.SocialMediaIcon} />
                {props.SocialMediaName}
            </span> 
    )
}
