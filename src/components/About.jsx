import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by developers all over the world</h2>
                <p className='text-3xl py-6 text-gray-500'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
            </div>
            {/* class="cursor-pointer hover:bg-white hover:text-green hover:scale-110 delay-200 duration-700 px-4 py-2" */}
            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl cursor-pointer
                 hover:bg-white hover:scale-150 delay-200 duration-700 '>
                    <p className='text-6xl font-bold text-indigo-600 '>100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl  cursor-pointer
                 hover:bg-white hover:scale-150 delay-200 duration-700'>
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl cursor-pointer
                 hover:bg-white hover:scale-150 delay-200 duration-700'>
                    <p className='text-6xl font-bold text-indigo-600'>100K</p>
                    <p className='text-gray-400 mt-2'>Transaction</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About