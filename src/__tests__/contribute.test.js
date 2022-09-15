import React from "react";
import renderer from "react-test-renderer";

import {Contribute} from "../components/Contribute";

describe("Contribute", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(<Contribute />)
            .toJSON()
        expect(tree).toMatchSnapshot();
    })
})