import React from 'react';
import '../src/assets/css/tailwind.generated.css';

function App() {
  return (
    <>
      <div className='flex flex-row w-full'>
        <nav className='p-5 w-1/12 flex flex-col border-r'>
          <i class='fas fa-bars fa-2x mb-5'></i>
          <i class='fas fa-utensils fa-2x mb-5'></i>
          <i class='fas fa-clipboard fa-2x mb-5'></i>
          <i class='fas fa-plus fa-2x mb-5'></i>
        </nav>
        <div className='w-8/12'>
          <div className=''>
            <div className='py-5 flex flex-row justify-end items-center text-2xl font-bold border-b-2'>
              <h1>Food Items</h1>
              <i class='fas fa-search'></i>
            </div>
            <div className='p-2 bg-gray-300 min-h-screen'>
              <div className="w-64">
                <div className='w-56 h-40 rounded-t-lg overflow-hidden bg-cover'>
                  <img
                    src='https://4.bp.blogspot.com/-pigAcSujjZo/VtgXienNWFI/AAAAAAAAI2Q/eEB3o6uxwlE/s1600/Minum%2BKopi.jpg'
                    alt='menu' className=''
                  />
                </div>
                <p className='text-lg'>Kopi koplak</p>
                <p className='font-bold'>Rp. 5.000</p>
              </div>
            </div>
          </div>
        </div>
        <aside className='w-3/12 border-l'>
          <div className='py-5 flex justify-center items-center text-2xl font-bold border-b-2'>
            Cart
            <span className='ml-2 bg-blue-200 px-1 rounded-full'>0</span>
          </div>
        </aside>
      </div>
    </>
  );
}

export default App;
