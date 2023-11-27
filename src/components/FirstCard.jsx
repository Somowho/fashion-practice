import React from 'react'
import { BsEnvelope, BsHouse, BsTruck } from 'react-icons/bs'

const FirstCard = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid grid-cols-3 gap-6'>

    <div className='rounded-xl mt-20 text-3xl relative border-2 border-blue-900 p-2'>
    <h1 className='font-bold ml-20'>FREE SHIPPING</h1>
    <p className='text-xl ml-20'>Free shipping on all NGN <br /> order or order above $200</p>
    <BsTruck className='-mt-14 ml-4' size={50}/>
    </div>




    <div className='rounded-xl mt-20 text-3xl relative border-2 border-blue-900 p-2'>
    <h1 className='font-bold ml-20'>30 Days Return</h1>
    <p className='text-xl ml-20'>Simply return & within <br /> 30 days for an exchange </p>
    <BsHouse className='-mt-14 ml-4' size={50}/>
    </div>





    <div className='rounded-xl mt-20 text-3xl relative border-2 border-blue-900 p-2'>
    <h1 className='font-bold ml-20'>100% Payment Secure</h1>
    <p className='text-xl ml-20'>Free shipping on all NGN <br /> order or order above $200</p>
    <BsEnvelope className='-mt-14 ml-4' size={50}/>
    </div>


    </div>
  )
}

export default FirstCard