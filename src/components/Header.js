import React from 'react';
import styled from 'styled-components';
import { Button } from './styled/Button';
const logo = require('../logo/overvue-logo.png')

export const Header = () => {
  return (
    <div>

    <div id = 'name'>
    <img id = 'logo' src ={logo}/>
    <br></br>
    OverVue
  </div>
  <div><p>All in one prototyping tool for Vue developers</p></div>
  <br></br>
  <div>
      <Button className = {'button' }href="https://overvue-app.s3-us-west-2.amazonaws.com/OverVue-0.0.1.dmg">
        Download for MacOS
      </Button>
    </div>
  </div>
  )
};