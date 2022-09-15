import { render, screen } from "@testing-library/react";
import { Contribute } from '../components/Contribute';
import '@testing-library/jest-dom';

describe('Contribute component', () => {
    it("renders without crashing", () => {
        render(<Contribute />);
        const contributeButton = screen.getByText("Want to Contribute?");
        expect(contributeButton).toBeInTheDocument();
    })
});