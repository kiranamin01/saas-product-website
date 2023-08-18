import '../section4/section4.css';


const Section4 = () => {


  return ( 
    <div id='section4__main' className=' w-full h-full bg-blue  '>
    <div id="heading" className='my-100'>
        <h1 className='text-white text-5xl font-semibold font-heading'>
        People <span> love </span> to watch videos</h1>
        <p className= ' text-base font-heading justify-center w-1/4 '>
        SaaS businesses use video as an important component of their interactions with customers. Video is a powerful tool for building trust, educating, and engaging with your audience.
        </p>

        <div className="section4__info_container flex justify-center content-centre bg-red w-full h-auto ">
          <div className="section4__info_left flex-row justify-center content-center ">

          <div className="section4__info_left_box  flex-row text-center ">

            <h1 className='text-6xl font-bold content-center '>202%</h1>
            <h3 className=' text-lg font-semibold text-cente '> Video Consumption Rate </h3>
            <p className=' text-sm w-80 text-center'>More people are watching videos online than ever 
              before. In fact, their video consumption has more 
              than doubled since 2018.</p>

          </div>

          </div>
        
          <hr height="20%" color="white" size="500px" align="left" />

          <div className="section4__info_right flex-row justify-center content-center mr-30 ">

            <div className="section4__info_right_box flex-row text-center">

          <h1 className=' text-6xl font-bold content-center '>87%</h1>
            <h3 className='text-lg font-semibold '>Marketers report a positive ROI </h3>
            <p className='text-sm w-80 text-center'>Marketers are extremely optimistic about the return 
              on investment provided by video, due to its big 
              influence on traffic, sales, and education..</p>

            </div>

          </div>


        </div>

    </div>
    

    </div>
  )
}

export default Section4;