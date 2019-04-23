import React from "react";
import { shallow} from "enzyme";
import {
  SignUpContainer as App,
  mapStateToProps,
  mapDispatchToProps
} from "../containers/SignUpContainer";

describe("SignUpContainer ", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("reponds to events", () => {
    const wrapper = shallow(<App />);
    const event = {};
    wrapper.instance().onTextChange(event, { name: "email", value: "email" });
    wrapper.instance().onTextChange(event, { name: "username", value: "dope" });
    wrapper
      .instance()
      .onTextChange(event, { name: "password1", value: "email" });
    wrapper
      .instance()
      .onTextChange(event, { name: "password2", value: "email" });

    expect(wrapper.instance().state.username).toEqual("dope");
  });

  it("reponds to click events", () => {
    const wrapper = shallow(<App register={jest.fn()} />);
    wrapper.find(".index-button").simulate("click");
  });

  it("matches state to props", () => {
    const initialState = {};
    mapStateToProps(initialState);
  });

  it("match dispatch to props", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).register();
  });
});
