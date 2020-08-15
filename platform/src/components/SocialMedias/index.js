import React from 'react';
import SocialMediaItem from './components/SocialMediaItem';

import gmail from "../../assets/icons/icofinder_gmail.png";
import youtube from "../../assets/icons/icofinder_youtube.png";
import instagram from "../../assets/icons/icofinder_insta.png";
import linkedin from "../../assets/icons/icofinder_linkedin.png";

export default function index() {
    return (
        <p className="social__media__itens__area">
            <SocialMediaItem SocialMediaIcon={gmail} SocialMediaName="gsilvaborges@gmail.com"/>
            <SocialMediaItem SocialMediaIcon={youtube} SocialMediaName="youtube.com/coderclub"/>
            <SocialMediaItem SocialMediaIcon={instagram} SocialMediaName="@coderclubofficial"/>
            <SocialMediaItem SocialMediaIcon={linkedin} SocialMediaName="guilherme_borges"/>
        </p>
    )
}
