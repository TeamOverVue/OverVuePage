import React from 'react';
import styled from 'styled-components';
import { Button } from './styled/Button';
const logo = require('../logo/overvue-logo.png')
export const Header = () => {
  return (
    <div>
    <div>
      <Button href="https://overvue-app.s3-us-west-2.amazonaws.com/OverVue-0.0.1.dmg">
        hi
      </Button>
    </div>
    <div id = 'name'>
    <img id = 'logo' src ={logo}/>
    <br></br>
    PreVue
  </div>
  </div>
  )
};