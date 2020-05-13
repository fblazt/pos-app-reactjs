import React from 'react'
import CartItem from './CartItem'

export default function Cart() {
  return (
    <aside className='w-3/12 max-h-screen border-l overflow-y-auto'>
      <div className='fixed w-3/12 py-5 flex justify-center items-center bg-white text-2xl font-semibold border-b-2 shadow-md'>
        Cart
            <span className='ml-2 bg-blue-200 px-2 text-white rounded-full'>0</span>
      </div>
      <div className='pt-24 pb-5 px-5 h-full flex flex-col justify-between'>
        <CartItem/>
        <div className='flex flex-col'>
          <span className='flex flex-row justify-between text-xl font-bold'>
            <p>Total:</p>
            <p>Rp. 5.000*</p>
          </span>
          <p>*Belum termasuk ppn</p>
          <button className='py-3 mb-3 bg-blue-400 text-white text-2xl font-semibold'>Checkout</button>
          <button className='py-3 bg-pink-400 text-white text-2xl font-semibold'>Cancel</button>
        </div>
      </div>
    </aside>
  )
}
