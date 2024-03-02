import { render, screen, cleanup } from "@testing-library/react";
import Header from "../Header/Header";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

test('Header Test', () => {
  render(<Header />);
  
  const logoWithTextImage = screen.getByAltText('Comsats Logo');
  const cuiLogoText = screen.getByAltText('cui Logo'); // Using getByAltText here
  
  expect(logoWithTextImage).toBeInTheDocument();
  expect(cuiLogoText).toBeInTheDocument();
});

test("Matches snapshot",()=>{
    const tree=renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
})

test('run', () => {
  expect(true).toBe(true);
});
