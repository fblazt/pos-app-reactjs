import React, { Component } from 'react'
import axios from 'axios'

export default class MenuItem extends Component {
  state = {
    post: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos/1`)
      .then(res => {
        const post = res.data;
        this.setState({post});
        console.log(post)
      });
  }

  render() {
    return (
      <div className="w-64">
        <div className='w-56 h-40 rounded-t-lg overflow-hidden bg-cover'>
          <img
            src={this.state.post.url}
            alt='Menu'
          />
        </div>
        <p className='text-xl font-medium'>{this.state.post.title}</p>
        <p className='text-xl font-bold'>Rp. 5.000</p>
      </div>
    )
  }
}
