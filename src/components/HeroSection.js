import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
export default function HeroSection() {
    return (
        <div className='hero-container'>
            
            <video src={process.env.PUBLIC_URL + '/videos/video-2.mp4'} autoPlay loop muted/>

            
            <h1>ENDLESS OPPURTUNITY</h1>
            <p>It all starts with a cube</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    VIEW MODELS
                </Button>

                <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>

            
        </div>
    );
}


