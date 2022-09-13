import React from 'react';
import ReactDOM from 'react-dom';
import {Contribute} from '../components/Contribute';

import { render } from '@testing-library/react';
import "jest-dom/extend-expect";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Contribute />, div);
})

it("renders button correctly", () => {
    render(<Contribute />)
})