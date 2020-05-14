import React, { Component } from 'react'

export default class EmptyCart extends Component {
  render() {
    return (
      <div className='pt-24 flex flex-col items-center'>
        <img src={require("../assets/img/food-and-restaurant.png")} alt="No item" />
        <p className='text-xl font-extrabold'>Your cart is empty</p>
        <p>Please add some items from the menu</p>
      </div>
    )
  }
}
