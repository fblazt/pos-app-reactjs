import React from 'react'

export default function Menu() {
  return (
    <div className='w-9/12'>
      <div className='p-5 fixed w-9/12 flex flex-row items-center bg-white z-index-0 border-b-2 shadow-md'>
        <i class='fas fa-bars fa-2x'></i>
        <h1 className='mx-auto text-2xl font-semibold'>Food Items</h1>
        <i class='fas fa-search fa-2x'></i>
      </div>
      <div className='pt-24 pr-5 pb-5 pl-24 w-9-12 bg-gray-200 min-h-screen'>
        <div className="w-64">
          <div className='w-56 h-40 rounded-t-lg overflow-hidden bg-cover'>
            <img
              src='https://4.bp.blogspot.com/-pigAcSujjZo/VtgXienNWFI/AAAAAAAAI2Q/eEB3o6uxwlE/s1600/Minum%2BKopi.jpg'
              alt='Menu'
            />
          </div>
          <p className='text-xl font-medium'>Kopi koplak</p>
          <p className='text-xl font-bold'>Rp. 5.000</p>
        </div>
      </div>
    </div>
  )
}
