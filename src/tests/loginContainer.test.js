import React from "react";
import { shallow} from "enzyme";
import {
    LoginContainer as App,
  mapStateToProps,
  mapDispatchToProps
} from "../containers/LoginContainer";

describe("SignUpContainer ", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("reponds to events", () => {
    const wrapper = shallow(<App />);
    const event = {};
    wrapper.instance().onTextChange(event, { name: "email", value: "email" });
    wrapper
      .instance()
      .onTextChange(event, { name: "password", value: "email" });

    expect(wrapper.instance().state.email).toEqual("email");
  });

  it("reponds to click events", () => {
    const wrapper = shallow(<App login={jest.fn()} />);
    wrapper.find(".index-button").simulate("click");
  });

  it("matches state to props", () => {
    const initialState = {};
    mapStateToProps(initialState);
  });

  it("match dispatch to props", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).login();
  });
});
