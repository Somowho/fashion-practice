import React from 'react'

const Hero = () => {
  return (
    <div>
        <img className='w-full max-h-[500px] object-cover'
        src="https://img.freepik.com/free-photo/lifestyle-people-youth-concept-closeup-portrait-beautiful-smiling-blond-female-put-hoodie_1258-116238.jpg" alt="/"/>
    
    <h1 className='relative -mt-80 ml-8 font-bold text-7xl text-gray-900'>female's <br /> collection</h1>
    <p className='ml-8 text-black'>Quality female wears and accessories are all available for you.</p>

    <button className='ml-8 mt-4'>SHOP NOW</button>
    </div>
  )
}
 
export default Hero