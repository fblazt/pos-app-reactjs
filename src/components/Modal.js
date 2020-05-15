import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    return (
      <div className='fixed z-50 flex justify-center items-center top-0 left-0 w-full h-full bg-gray-800'>
        <div className="fixed w-1/2 p-5 bg-white rounded-lg">
          <div className='flex flex-row'>
            <div>
              <p>Checkout</p>
              <p>Cashier: Pevita Pearce</p>
            </div>
            <p>Receipt no: #010410919</p>
          </div>
          <div>
            <div>
              <div>
                <p>Menu</p>
                <p>Price</p>
              </div>
              <div>
                <p>Menu</p>
                <p>Price</p>
              </div>
              <div>
                <p>Menu</p>
                <p>Price</p>
              </div>
            </div>
            <div>Total: </div>
            <div>Payment: </div>
          </div>
          <div>
            <button>print</button>
            <p>Or</p>
            <button>Send Email</button>
          </div>
        </div>
      </div>
    )
  }
}
