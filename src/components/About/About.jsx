import React from 'react'
import './About.css'
import './AboutMedia.css'
import { images } from '../../CommonData/Common'
function About() {
    return (
        <div>
            <div className=' w-full   xl:bg-zinc-300 xl:text-center xl:flex xl:flex-row xl:pt-44 xl:static md:bg-black'>
                <img src="Images/image-1.png" alt="" className=' hidden xl:block xl:h-80 xl:object-cover xl:absolute xl:-left-10 xl:top-2' />
                <div className=' text-center xl:flex xl:flex-col xl:justify-center xl:items-center'>
                    <div className='xl:text-lg xl:font-mono xl:tracking-widest xl:p-2'>
                        <h4 className="font-serif pt-7 underline">ABOUT RESTAURANT</h4>
                    </div>
                    <div>
                        <h1 className=' text-xl p-2 font-mono xl:font-thin xl:font-mono xl:p-3 xl:text-4xl '>ENJOY AN EXCEPTIONAL JOURNEY OF TASTE</h1>
                    </div>

                    <div>
                        <p className=' text-sm font-serif p-1 xl:text-sm xl:p-5 xl:font-bold xl:text-gray-600'>Our buzzy food-hall style concept is inspired by international dining styles, especially in Asia. Explore the following fast-action food stations as busy chefs perform.</p>
                        <p className='  text-sm p-2 font-semibold xl:text-sm xl:font-bold xl:text-gray-600 xl:m-0 xl:pl-40 xl:pr-40 ' >Enjoy a verdant Garden to Glass experience. It’s in the view, it’s reflected in the design, and it infuses many drinks. In fact, all our delicious fresh ingredients are sustainably picked from our Jemima’s Kitchen Garden. Our flourishing range of cocktails, spirits, beers and wines are all made with integrity and offer something for every guest.</p>
                    </div>

                    <div className=' xl:w-40  xl:m-4 xl:items-center xl:mt-10'>
                        <button className=" p-3 w-26 m-3 border-2 border-black hover:bg-black hover:text-white  xl:border-2 xl:border-black xl:p-3 xl:m-1 xl:w-40 xl:hover:transition-all xl:duration-500 xl:hover:bg-black xl:hover:text-cyan-50">BOOK A TABLE</button>
                        <hr />
                    </div>

                </div>

            </div>

            <div className='Image-div'>
                {
                    images.map((data, index, arr) => {
                        const { id, image } = data;
                        return (
                            <div className='images'>
                                <img src={image} alt=""  />
                                <div className='middle'>
                                   <img src="./Images/insta-image.png" alt="" />

                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default About