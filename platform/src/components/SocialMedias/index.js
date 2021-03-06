import React from 'react';
import SocialMediaItem from './components/SocialMediaItem';

import gmail from "../../assets/icons/icofinder_gmail.png";
import youtube from "../../assets/icons/icofinder_youtube.png";
import instagram from "../../assets/icons/icofinder_insta.png";
import linkedin from "../../assets/icons/icofinder_linkedin.png";

export default function index() {
    return (
        <p className="social__media__itens__area">
            <SocialMediaItem SocialMediaIcon={gmail} SocialMediaLink="https://mail.google.com/mail/#search/rfc822msgid%3Aabcdefg%40gsilvaborges@gmail.com"/>
            <SocialMediaItem SocialMediaIcon={youtube} SocialMediaLink="https://www.youtube.com/channel/UCMHtsITvjsvOoA7f2gNLL0Q?view_as=subscriber"/>
            <SocialMediaItem SocialMediaIcon={instagram} SocialMediaLink="https://www.instagram.com/coderclubofficial/"/>
            <SocialMediaItem SocialMediaIcon={linkedin} SocialMediaLink="https://www.linkedin.com/in/guilherme-borges-546158150/"/>
        </p>
    )
}
