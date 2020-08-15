import React from 'react';
import profilePic from "../../assets/images/profilePic.png"

export default function index() {
    return (
            <img
                    width="140px" 
                    height="125px" 
                    src={profilePic} 
                    alt="image-error" 
            />
    )
}
