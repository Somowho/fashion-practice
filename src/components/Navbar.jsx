import React from 'react'
import {BsPhone} from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className='max-w-[1640] mx-auto flex justify-between items-center p-4'>
        
    {/*Left Side */}
    <div className='flex items-center cursor-pointer pt-2'>
    <BsPhone size={30} />
    <p className='text-[15px] -mt-6 px-8'>Call us</p>

    <h1 className='-ml-24 mt-4 font-bold'>090-3510-4728</h1>

    <h1 className='ml-[350px] font-bold text-4xl text-blue-900'>4TUNE WARES</h1>


    </div>


    <div>
    <input 
    className='bg-transparent p-2 w-[240px] border-black border-2 rounded-md ml-[250px] mt-2' 
    type="text" placeholder='Search wares' />
    <BsSearch className='ml-[500px] -mt-8' size={30} />
    </div>


    </div>
  )
}

export default Navbar