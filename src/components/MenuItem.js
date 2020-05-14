import React, { Component } from 'react'

export default class MenuItem extends Component {
  render() {
    return (
      <div className="w-1/3 mb-5">
        <div className='w-10/12 h-40 rounded-t-lg overflow-hidden bg-cover'>
          <img
            src={this.props.url}
            alt='Menu'
          />
        </div>
        <p className='text-xl font-medium'>{this.props.title}</p>
        <p className='text-xl font-bold'>Rp. {this.props.price}</p>
      </div>
    )
  }
}
