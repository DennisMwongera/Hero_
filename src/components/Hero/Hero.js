import React from 'react'
import { Button } from '../Button/Button'
import '../../App.css'
import './Hero.css'

function Hero() {
  return (
    <div className='hero-container'>
        <video autoPlay loop muted>
        <source
            src="./video-1.mp4"
             type="video/mp4"
        />
    </video>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button
                className='btns'
                buttonSize='btn--large'
                buttonStyle='btn--outline'
            >
            GET STARTED
            </Button>
            <Button
                className='btns'
                buttonSize='btn--large'
                buttonStyle='btn--primary'
            >
            WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default Hero

