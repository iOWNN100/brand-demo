import React from 'react'
import supportImg from '../assets/2.jpg'

import { 
    HiOutlinePhone,
    HiOutlineArrowSmRight,
    HiChip,
    HiSupport
} from "react-icons/hi";


const Support = () => {
  return (
    <div name='support' className='w-full  mt-24'>
        
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
          <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
        </div>

        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-3xl  text-slate-300'> Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8 relative'>
                        <HiOutlinePhone className='w-16 h-16 p-4 bg-indigo-600 text-white rounded-lg absolute -mt-16' />
                        <h3 className='text-bold text-2xl my-6'>Sales</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.</p>
                    </div>

                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us<HiOutlineArrowSmRight className='w-5 ml-2' /></p>
                    </div>
                </div>


                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <HiSupport className='w-16 h-16 p-4 bg-indigo-600 text-white rounded-lg absolute -mt-16' />
                        <h3 className='text-bold text-2xl my-6'>Technical Support</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.</p>
                    </div>

                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us<HiOutlineArrowSmRight className='w-5 ml-2' /></p>
                    </div>
                </div>


                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <HiChip className='w-16 h-16 p-4 bg-indigo-600 text-white rounded-lg absolute -mt-16' />
                        <h3 className='text-bold text-2xl my-6'>Media Inquiries</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.</p>
                    </div>

                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us<HiOutlineArrowSmRight className='w-5 ml-2' /></p>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Support