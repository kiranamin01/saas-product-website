import React from 'react'
import '../section2/section2.css';



const Section2 = () => {
  return ( 
    <div id='section2__main' className=''>
    <div id="heading" className='ml-100'>
        <h1 className='text-white text-5xl font-semibold font-heading'>Finding inspiration is hard. <br />Stop wasting your time.</h1>
        <p className='text-gray-300 text-lg font-heading my-4 '>You are a SaaS founder, marketing agency or video freelancer and <br />are planning to create a product video that will stand out from the crowd?</p>
        <p className='text-gray-300  text-xl my-4 '> We got you covered.</p>
    </div>
    <section id='section2__container'>

    <div className="section2__left">
        <div id="section2__info">
        <div id='section2__info_title' className=''>
            <h3 className='text-white text-xl my-5'>We did the hard work for you</h3>
            <p className='text-gray-300' >Stop wasting time searching for video inspiration.</p>
            <p className='text-gray-300' >We spent countless weeks carefully collecting the best SaaS videos from the web so you don't have to.</p>
            <p className='text-gray-300' >Our library is growing by the day.</p>
        </div>
        <div id='section2__info_title'>
        <h3 className='text-gray-300 text-xl my-5' >Filter based on your needs</h3>
            <p className='text-gray-300' >We have conveniently categorized all videos based on a number of features such as length, video type and industry so you can find videos that fit your intended use case.</p>
            <p className='text-gray-300' >Looking for action-packed 30s videos or need a 2-minute explainer demo video?</p>
            <p className='text-gray-300' >We've got you covered.</p>
        </div>
        <div id='section2__info_title'>
        <h3 className='text-gray-300 text-xl my-5' >Pay once, love forever</h3>
        <p className='text-gray-300' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quisquam repellendus debitis, vel quae aperiam, quas dignissimos , aut impedit.</p>
        </div>

        </div>
    </div>
    <div id='arrow'>
        <img  id='section2__arrow' src="{COMPONENT_NAME}" alt="arrow" srcset="" />
    </div>
    <div className="section2__right">
        <div id="section2__video">

        <span id='section2__video_bg' className='bg-gradient-to-r from-orange-500 via-fuchsia-500 to-indigo-600'>Video Here</span>

        <video autoPlay src="../section2/S2-video.mp4"></video>
        {/* <img src="../Sections/OSM-dev-top-updated-img.png" alt="section2-img" className='w-10rem h-20rem' />  */}
        </div>

    </div>

    </section>

    </div>
  )
}

export default Section2