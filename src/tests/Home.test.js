import React from "react";
import { shallow } from "enzyme";
import Home from "../components/Home";

describe("Home ", () => {
  it(" renders without crashing", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  it(" responds to click events", () => {
    const wrapper = shallow(<Home />);
    const event = {};
    wrapper.instance().handleItemClick(event, { name: "active" });
    expect(wrapper.instance().state.activeItem).toEqual("active");
  });

  it(" displays the view parcel tab", () => {
    const wrapper = shallow(<Home />);
    const event = {};
    wrapper.instance().handleItemClick(event, { name: "all" });
    expect(wrapper.instance().state.activeItem).toEqual("all");
  });
});
