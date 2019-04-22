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

    wrapper.instance().showLogin();
    wrapper.instance().showSignUp();
    wrapper.instance().registerUser();
    wrapper.instance().logIn();
  });

  it("renders call on Text Change function when text is changed", () => {
    const wrapper = shallow(<SendItApp history={{ push: jest.fn() }} />);
    let name = 'username';
    const value = 'text has changed';
    const _event = {};
    wrapper.instance().onTextChange(_event, { name:name, value:value});
    name = 'email';
    wrapper.instance().onTextChange(_event, { name:name, value:value});
    name = 'password1';
    wrapper.instance().onTextChange(_event, { name:name, value:value});
    name = 'password2';
    wrapper.instance().onTextChange(_event, { name:name, value:value});
    name = 'loginPassword';
    wrapper.instance().onTextChange(_event, { name:name, value:value});
    name = 'loginMail';
    wrapper.instance().onTextChange(_event, { name:name, value:value});
  });
});
