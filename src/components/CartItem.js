import React from 'react'

export default function CartItem() {
  return (
    <div className='flex flex-row'>
      <div className='w-32 h-20 rounded-lg overflow-hidden bg-cover'>
        <img src='https://4.bp.blogspot.com/-pigAcSujjZo/VtgXienNWFI/AAAAAAAAI2Q/eEB3o6uxwlE/s1600/Minum%2BKopi.jpg' className='h-full w-full' alt="Cart Item" />
      </div>
      <div className='w-full ml-5 flex flex-col'>
        <p className='font-bold text-xl'>Kopi Koplak</p>
        <div className='mt-5 w-full flex flex-row justify-between items-center'>
          <div className='flex flex-row justify-center items-center'>
            <button className='w-8 h-8 bg-green-100 border border-green-400 font-extrabold text-green-400'>-</button>
            <input type="number" value='1' className='w-8 h-8 bg-green-100 border border-green-400 font-extrabold text-green-400 text-center' />
            <button className='w-8 h-8 bg-green-100 border border-green-400 font-extrabold text-green-400'>+</button>
          </div>
          <p className='font-bold text-lg'>Rp. 5.000</p>
        </div>
      </div>
    </div>
  )
}
