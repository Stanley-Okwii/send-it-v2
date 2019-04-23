import React from "react";
import { shallow } from "enzyme";
import { SendItApp } from "../components/SendItApp";

describe("Send It", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<SendItApp history={{ push: jest.fn() }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders respond to onclick events", () => {
    const wrapper = shallow(<SendItApp history={{ push: jest.fn() }} />);
    wrapper.find('Button').first().simulate('click');
    wrapper.find('#signup').simulate('click');

    wrapper.instance().showLogin();
    wrapper.instance().showSignUp();
  });
});
