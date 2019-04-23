import React from "react";
import { shallow, mount } from "enzyme";
import MenuBar from "../components/MenuBar";

it("renders without crashing", () => {
  const wrapper = shallow(<MenuBar />);
  expect(wrapper).toMatchSnapshot();
});

it("renders repond to click events", () => {
  const wrapper = shallow(<MenuBar />);
  const event = {};
  wrapper.instance().handleItemClick(event, { name: "active" });
  expect(wrapper.instance().state.activeItem).toEqual('active');
});
