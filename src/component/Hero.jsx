import React from 'react'
import '../css/hero.css';
// import HeroVideoTab from './HeroVideoTab'; 

const Hero = () => {
  return (
    <>
    <div id="hero__container">
        <div id="hero__left_section">
            <div id="hero__bange">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=390583&theme=dark&period=daily" alt="" srcset="" />
            </div>
            <span id='hero__bange-info'>Get inspired & unlock the full potential of video marketing</span>
            <h1 id='hero__left_title'> Create product <br /> videos that <br /> <span id='hero__left_title-color'> convert </span> </h1>
            <p id='hero__left_title-info' > Learn from more than 100+ hand selected videos of companies <br />that create engaging, shareable product 
                videos that not only <br />boost brand awareness but also convert customers. </p>

            <div id="hero__left_btns">
                <button id='hero__left_btns-color'>Get access to 100+ videos now</button>
                <button id='hero__left_btns-trans'>Learn more</button>    
            </div>

            <div id="hero__left_customer_review">
                <p>
                “I am about to launch a new product and needed <br />inspiration for creating our new Product Hunt launch 
                <br />video. This site has been an amazing resource for us.”
                </p>
                <h3> Alex Styl, founder of Composables </h3>
            </div>    

        </div>
        <div id="hero__right_section">
            <div className="hero__right_section-videotab1">
                <video controls autoPlay src="../files/demo_vid_01_optim - 02.mp4"></video>
                <video controls autoPlay src="../files/demo_vid_01_optim - 02.mp4"></video>
                <video controls autoPlay src="../files/demo_vid_01_optim - 02.mp4"></video>

                
             </div>
                <div className="hero__right_section-videotab2">
                    <video controls autoPlay src="../files/demo_vid_01_optim - 02.mp4"></video>
                    <video controls autoPlay src="../files/demo_vid_01_optim - 02.mp4"></video>
                    <video controls autoPlay src="../files/demo_vid_01_optim - 02.mp4"></video>
                    <video controls autoPlay src="../files/demo_vid_01_optim - 02.mp4"></video>
                </div>

        </div>

    </div>
    </>
  )
}

export default Hero

 /* dnddn 
    
 Create product videos that convert
Learn from more than 100+ hand selected videos of companies that create engaging, shareable product videos that not only boost brand awareness but also convert customers.

Get access to 100+ videos now
Learn more

“I am about to launch a new product and needed inspiration for creating our new Product Hunt launch video. This site has been an amazing resource for us.”

Alex Styl, founder of Composables



 
 */ 