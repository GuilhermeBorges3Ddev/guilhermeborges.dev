import React from 'react';
import { Card, CardImg } from 'reactstrap';

export default function index() {
    return (
        <div>
            <Card>
                <CardImg 
                    width="70px" 
                    height="60px" 
                    src="../../assets/images/profilePic.png" 
                    alt="image" 
            />
            </Card>
    </div>
    )
}
