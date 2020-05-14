import React, {Component} from 'react'
import MenuHeader from './MenuHeader'
import MenuItem from './MenuItem'
import axios from 'axios'

export default class Menu extends Component {
  state = {
    post: []
  };

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}menu`)
      .then(res => {
        const post = res.data.result;
        this.setState({post});
        console.log(post);
      });
  }

  render() {
    return (
      <div className='w-9/12'>
        <MenuHeader />
        <div className='min-h-screen pt-24 pb-5 pr-5 pl-24 w-9-12 bg-gray-200'>
          <div className='flex flex-row flex-wrap overflow-y-auto'>
            {
              this.state.post.map((menu) => 
              <MenuItem 
              url = {menu.image}
              title = {menu.name}
              price = {menu.price}/>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}
