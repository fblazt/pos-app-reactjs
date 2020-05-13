import React from 'react';
import SideNav from './components/SideNav';
import Menu from './components/Menu';
import './assets/css/tailwind.generated.css';

function App() {
  return (
    <>
      <div className='max-h-screen overflow-y-hidden flex flex-row w-full'>
        <SideNav/>
        <Menu/>
        <aside className='w-3/12 max-h-screen border-l overflow-y-auto'>
          <div className='fixed w-3/12 py-5 flex justify-center items-center bg-white text-2xl font-semibold border-b-2 shadow-md'>
            Cart
            <span className='ml-2 bg-blue-200 px-2 text-white rounded-full'>0</span>
          </div>
          <div className='hidden flex flex-col items-center'>
            <img src={require("./assets/img/food-and-restaurant.png")} alt="No item"/>
            <p className='text-xl font-extrabold'>Your cart is empty</p>
            <p>Please add some items from the menu</p>
          </div>
          <div className='pt-24 pb-5 px-5 h-full flex flex-col justify-between'>
            <div>
              <div className='flex flex-row'>
                <div className='w-32 h-20 rounded-lg overflow-hidden bg-cover'>
                  <img src='https://4.bp.blogspot.com/-pigAcSujjZo/VtgXienNWFI/AAAAAAAAI2Q/eEB3o6uxwlE/s1600/Minum%2BKopi.jpg' className='h-full w-full' alt="Cart Item"/>
                </div>
                <div className='w-full ml-5 flex flex-col'>
                  <p className='font-bold text-xl'>Kopi Koplak</p>
                  <div className='mt-5 w-full flex flex-row justify-between items-center'>
                    <div className='flex flex-row justify-center items-center'>
                      <button className='w-8 h-8 bg-green-100 border border-green-400 font-extrabold text-green-400'>-</button>
                      <input type="number" value='1' className='w-8 h-8 bg-green-100 border border-green-400 font-extrabold text-green-400 text-center'/>
                      <button className='w-8 h-8 bg-green-100 border border-green-400 font-extrabold text-green-400'>+</button>
                    </div>
                    <p className='font-bold text-lg'>Rp. 5.000</p>
                  </div>
                </div>
              </div>
            </div>
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
      </div>
    </>
  );
}

export default App;
