import React, { Component } from 'react'

export default class SideNav extends Component {
  render() {
    return (
      <div>
        <nav className='pt-24 px-5 w-auto min-h-screen bg-white fixed flex flex-col items-center border-r shadow-md'>
          <i class='fas fa-utensils fa-2x mb-12'></i>
          <i class='fas fa-clipboard fa-2x mb-12'></i>
          <i class='fas fa-plus fa-2x mb-12 text-green-600'></i>
        </nav>
      </div>
    )
  }
}
