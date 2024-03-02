import renderer from "react-test-renderer";
import BottomSection from "../BottomSection/BottomSection";
import "@testing-library/jest-dom";
import { cleanup, getAllByTestId, render } from "@testing-library/react";

afterEach(()=>{
    cleanup();
})
// console.log(saad);
// const name="saad";

test('Matches BottomSection',()=>{
    const tree=renderer.create(<BottomSection/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("renders BottomSection component", () => {
    const { getByTestId } =  render(<BottomSection />);
  
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const bottomMainElement = getByTestId("bottom-main");
    expect(bottomMainElement).toBeInTheDocument();
    // eslint-disable-next-line no-restricted-globals
    const submitButton=screen.getByRole("button");
    expect(submitButton).toBeDisabled();
  });