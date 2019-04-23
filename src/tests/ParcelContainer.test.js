import React from "react";
import { shallow} from "enzyme";
import {
    AddParcel as App,
  mapStateToProps,
  mapDispatchToProps
} from "../containers/AddParcel";

describe("SignUpContainer ", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("reponds to events", () => {
    const wrapper = shallow(<App />);
    const event = {};
    wrapper.instance().onTextChange(event, { name: "parcelName", value: "pig" });
    wrapper.instance().onTextChange(event, { name: "weight", value: 6 });
    wrapper.instance().onTextChange(event, { name: "Recipient", value: "David" });
    wrapper.instance().onTextChange(event, { name: "Pickup location", value: "Masaka" });
    wrapper.instance().onTextChange(event, { name: "destination", value: "Tororo" });
    expect(wrapper.instance().state.name).toEqual("pig");
  });

  it("reponds to click events", () => {
    const wrapper = shallow(<App postParcel={jest.fn()} />);
    wrapper.find("#post-parcel").simulate("click");
  });

  it("matches state to props", () => {
    const initialState = {};
    mapStateToProps(initialState);
  });

  it("match dispatch to props", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).postParcel();
  });
});
