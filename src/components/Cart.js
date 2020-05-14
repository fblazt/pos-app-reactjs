import React, {Component} from 'react'
import CartItem from './CartItem';
import CartFooter from './CartFooter'


export default class Cart extends Component {
  render() {
    return (
      <aside className='w-3/12 max-h-screen border-l overflow-y-auto'>
        <div className='fixed w-3/12 py-5 flex justify-center items-center bg-white text-2xl font-semibold border-b-2 shadow-md'>
          Cart
            <span className='ml-2 bg-blue-200 px-2 text-white rounded-full'>0</span>
        </div>
        <div className='pt-24 pb-5 px-5 h-full flex flex-col justify-between'>
          <CartItem />
          <CartFooter />
        </div>
      </aside>
    )
  }
}
