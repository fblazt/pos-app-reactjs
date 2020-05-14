import React, { Component } from 'react'
import SideNav from "./components/SideNav";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import "./assets/css/tailwind.generated.css";

export default class App extends Component {
  render() {
    return (
      <div className='max-h-screen overflow-y-hidden flex flex-row w-full'>
        <SideNav />
        <Menu />
        <Cart />
      </div>
    );
  }
}
