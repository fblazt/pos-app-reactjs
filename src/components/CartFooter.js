import React, { Component } from 'react'

export default class CartFooter extends Component {
  render() {
    return (
      <div className='flex flex-col'>
        <span className='flex flex-row justify-between text-xl font-bold'>
          <p>Total:</p>
          <p>Rp. 5.000*</p>
        </span>
        <p>*Belum termasuk ppn</p>
        <button className='py-3 mb-3 bg-blue-400 text-white text-2xl font-semibold'>Checkout</button>
        <button className='py-3 bg-pink-400 text-white text-2xl font-semibold'>Cancel</button>
      </div>
    )
  }
}
