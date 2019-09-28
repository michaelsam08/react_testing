import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAtrr } from "./../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};
// const findByTestAtrr = (component, attr) => {
//   const wrapper = component.find(`[data-test="${attr}"]`);
//   return wrapper;
// };
describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    //const component = shallow(<Header />);
    const wrapper = findByTestAtrr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a picture of Picasso", () => {
    //const component = shallow(<Header />);
    const logo = findByTestAtrr(component, "picassoIMG");
    expect(logo.length).toBe(1);
  });
});
