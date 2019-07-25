import React from 'react';
const logo = require('../logo/overvue-logo.png')

export const Header = () => {

  return (
    <div id = 'name'>
      <img id = 'logo' src ={logo}/>
      <br></br>
      PreVue
    </div>
  )
};