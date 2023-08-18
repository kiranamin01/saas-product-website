import '../section5/section5.css';


const Section5 = () => {


  return ( 
    <>
    <div className=' section5__main '>
        <div className="section5__container flex ">
          <div className='section5__left w-3/5'>
            <div className='section5__left_info'>
              <h2 className='section5__left_info_title font-heading text-4xl font-bold my-8 '>Learn from a growing library of product videos</h2>
                <div className='section5__left_info_title-point my-50'>
                  <h4 className='text-lg font-semibold my-50'>134+ product video examples</h4>
                  <p className='text-sm mb-50px '>Full access to hundreds of product video examples for inspiration.</p>
                  <h4 className='text-lg font-semibold '>Tools and Tutorials</h4>
                  <p>Get access to tools and tutorials (soon) on how you can easily create your own engaging product videos with little effort. </p>
                  <h4 className='text-lg font-semibold '>Pay once, love forever</h4>
                  <p>Not another annoying subscription. Get lifetime access to our library of high quality product videos for single one-time payment. ROI guaranteed.</p>
                </div> 
            </div>

          </div>
          <div className='section5__right w-2/5'>
            <div className='section5__right_card rounded-lg bg-sky-950 w-11/12 h-full content-center text-center justify-center'>
              <button className=' bg-sky-950 font-semibold rounded-lg w-1/3 h-2/8 bg-gradient-to-r from-orange-500 via-fuchsia-500 to-indigo-600 mt-6'>LIFETIME ACCESS</button>
              <h1 className='text-6xl font-semibold mt-2 mb-2 bg-sky-950'>$29</h1>
              <h3 className='bg-sky-950 '>One-time payment, access forever! <br />Discounted price. Increases to $49 soon.</h3>
              <h2 className='text-center my-5 bg-sky-950'>Forever full access <br />Unlimited views and access.</h2>
              <button className=' section5__right_btn font-bold rounded-full bg-black border-2 border-fuchsia-600 '>Get access Forever!</button>
              <h3 className='font-semibold bg-sky-950 mt-3'>14 Days Money Back Guarantee</h3>
              <h4 className='text-sm mt-3 bg-sky-950 ml-2 px-10 font-semibold text-gray-500'>Buy clicking the purchase button above you agree with our terms.</h4>
            </div>
          </div>

        </div>
          <div className='section5__quote bg-white justify-center content-center mx-4/5 px-4/5' >
            <h3 className=' mt-20 px-24 text-2xl font-headin leading-9 text-gray-200 text-center'>
            Discovering Product Video Examples was a game-changer for our product launch! The platform saved us countless hours searching for inspiring videos. With their incredible library, we found the perfect inspiration for our Product Hunt launch in no time. Product Video Examples is truly the ultimate site for creative SaaS video inspiration!"
            </h3>
          </div>
    </div>
    </>
  ) }

   

    



export default Section5;

// className='bg-gradient-to-r from-orange-500 via-fuchsia-500 to-indigo-600'  