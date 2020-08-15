import React from 'react';
import "./SocialMediaItem.css";

export default function index(props) {
    return (
            <div className="social__media__item">
                <a href={props.SocialMediaLink} target="_blank" rel="noopener noreferrer">
                    <img src={props.SocialMediaIcon} className="social__media__images" alt="social-media-img" />
                </a>
            </div> 
    )
}
