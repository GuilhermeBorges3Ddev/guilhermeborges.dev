import React from 'react';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

//Internal style and profile picture
import "./ProfilePictureCard.css";
import profilePic from "../../assets/images/profilePic.png"

//Social Medias component
import SocialMedias from "../SocialMedias/index";

export default function index() {
    return (
            <div>
                <Card className="profile__pic__card">
                    <CardImg top className="profile__pic" width="140px" height="125px" src={profilePic} alt="image-error" />
                    <CardBody>
                        <CardTitle className="profile__media">
                            <p>Mídias Sociais</p>
                            <SocialMedias 
                            
                            />
                        </CardTitle> 
                    </CardBody>
                </Card>
            </div>
            )
}
