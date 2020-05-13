import React from 'react';
import SideNav from './components/SideNav';
import Menu from './components/Menu';
import Cart from './components/Cart';
import './assets/css/tailwind.generated.css';

function App() {
  return (
    <>
      <div className='max-h-screen overflow-y-hidden flex flex-row w-full'>
        <SideNav/>
        <Menu/>
        <Cart/>
      </div>
    </>
  );
}

export default App;
