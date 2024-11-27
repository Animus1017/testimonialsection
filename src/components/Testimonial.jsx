import React, { useState } from 'react'
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
const Testimonial = ({reviews}) => {
    const[index,setIndex] =useState(0);
    let curr=reviews[index];
    function handlePrev(){
        let i=(index-1 + reviews.length) % reviews.length;
        setIndex(i);
    } 
    function handleNext(){
        let i=(index+1) % reviews.length;
        setIndex(i);
    }
    function handleRandom(){
        let i=index;
        while(i==index)
        i=Math.floor(Math.random() * reviews.length);
        setIndex(i);
    }
  return (
    <div className='bg-white relative w-2/5 p-10 flex flex-col gap-7 hover:shadow-xl transition-all duration-700'>
      <img src={curr.image} alt={curr.name} className='w-32 rounded-full absolute shadow-[10px_-8px_0px_0px_#c084fc] -top-[4.5rem]' />
      <div className='flex flex-col items-center gap-4'>
        <div className='text-center'>
            <h3 className='font-black text-xl'>{curr.name}</h3>
            <span className='text-purple-300 text-sm uppercase'>{curr.job}</span>
        </div>
        <FaQuoteLeft className='text-purple-400'/>
        <p className='text-center text-gray-400 font-medium'>{curr.text}</p>
        <FaQuoteRight className='text-purple-400' />
      </div>
      <div className='flex justify-center gap-4'>
        <button onClick={handlePrev} className='text-purple-400 hover:text-purple-300 transition-all delay-200'><FaAngleLeft /></button>
        <button onClick={handleNext} className='text-purple-400 hover:text-purple-300 transition-all delay-200'><FaAngleRight  /></button>
      </div>
      <button onClick={handleRandom} className='bg-purple-400 hover:bg-purple-300 transition-all delay-200 self-center text-white font-black px-9 py-2 rounded-md'>Surprise Me</button>
    </div>
  )
}

export default Testimonial
