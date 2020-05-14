import React, {Component} from 'react'
import MenuHeader from './MenuHeader'
import MenuItem from './MenuItem'

export default class Menu extends Component {
  render() {
    return (
      <div className='w-9/12'>
        <MenuHeader />
        <div className='pt-24 pr-5 pb-5 pl-24 w-9-12 bg-gray-200 min-h-screen'>
          <MenuItem />
        </div>
      </div>
    )
  }
}
