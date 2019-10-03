import React from "react";
import { shallow } from "enzyme";
import Hedaline from "./index";
import { findByTestAtrr, checkProps } from "../../../utils";
import Headline from "./index";

const setUp = (props = {}) => {
  const component = shallow(<Hedaline {...props} />);
  return component;
};
describe("Headline Component", () => {
  describe("Checking Proptypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "Test@email.com",
            age: 58,
            onlineStatus: false
          }
        ]
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
  describe("Nice, props!", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc"
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });
    it("Should render a H1", () => {
      const h1 = findByTestAtrr(wrapper, "header");
      expect(h1.length).toBe(1);
    });
    it("Should render a description", () => {
      const desc = findByTestAtrr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Aint got no props!", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should not render", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
