import React from 'react'

export default function MenuHeader() {
  return (
    <div className='p-5 fixed w-9/12 flex flex-row items-center bg-white z-index-0 border-b-2 shadow-md'>
      <i class='fas fa-bars fa-2x'></i>
      <h1 className='mx-auto text-2xl font-semibold'>Food Items</h1>
      <i class='fas fa-search fa-2x'></i>
    </div>
  )
}
