// import { render, screen } from "@testing-library/react";
// import { Contribute } from '../components/Contribute';
// import '@testing-library/jest-dom';

import React from "react";
import renderer from "react-test-renderer";

import {Contribute} from "../components/Contribute";


// describe('Contribute component', () => {
//     it("renders without crashing", () => {
//         render(<Contribute />);
//         const contributeButton = screen.getByText("Want to Contribute?");
//         expect(contributeButton).toBeInTheDocument();
//     })
// });

describe("Contribute", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(<Contribute />)
            .toJSON()
        expect(tree).toMatchSnapshot();
    })
})