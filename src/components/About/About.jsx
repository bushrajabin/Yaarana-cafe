import React from 'react'

function About() {

    const images = [
        {
            id: 1,
            image: "Images/res-3.jpg"
        },
        {
            id: 2,
            image: "Images/res-1.jpg"
        },
        {
            id: 3,
            image: "Images/res-2.jpg"
        },
        {
            id: 4,
            image: "Images/res-4.jpg"
        }
    ]
    return (
        <div>


            <div className='xl:bg-zinc-300 xl:text-center xl:flex xl:flex-row xl:pt-44 xl:static '>
                <img src="Images/image-1.png" alt="" className='xl:w-80 xl:h-80 xl:object-cover xl:absolute xl:-left-10 xl:top-2' />
                <div className='xl:flex xl:flex-col xl:justify-center xl:items-center'>
                    <div className='xl:text-lg xl:font-mono xl:tracking-widest xl:p-2'>
                        <h4>ABOUT RESTAURANT</h4>
                    </div>
                    <div>
                        <h1 className='xl:font-thin xl:font-mono xl:p-3 xl:text-4xl '>ENJOY AN EXCEPTIONAL JOURNEY OF TASTE</h1>
                    </div>

                    <div>
                        <p className='xl:text-sm xl:p-5 xl:font-bold xl:text-gray-600'>Our buzzy food-hall style concept is inspired by international dining styles, especially in Asia. Explore the following fast-action food stations as busy chefs perform.</p>
                        <p className='xl:text-sm xl:font-bold xl:text-gray-600 xl:m-0 xl:pl-40 xl:pr-40 ' >Enjoy a verdant Garden to Glass experience. It’s in the view, it’s reflected in the design, and it infuses many drinks. In fact, all our delicious fresh ingredients are sustainably picked from our Jemima’s Kitchen Garden. Our flourishing range of cocktails, spirits, beers and wines are all made with integrity and offer something for every guest.</p>
                    </div>

                    <div className=' xl:w-40  xl:m-4 xl:items-center xl:mt-10'>
                        <button className=" xl:border-2 xl:border-black xl:p-3 xl:m-1 xl:w-40">BOOK A TABLE</button>
                        <hr />
                    </div>

                </div>

            </div>

            <div className=' xl:flex xl:flex-row xl:justify-between'>
                {
                    images.map((data, index, arr) => {
                        const { id, image } = data;
                        return (
                            <div className=''>
                                <img src={image} alt="" className='xl:w-96 xl:h-96 xl:object-cover xl:p-4 ' />
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default About