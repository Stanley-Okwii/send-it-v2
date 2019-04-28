import React from "react";
import { shallow } from "enzyme";
import SendItApp from "../containers/SendItApp";
import reducers from "../reducers/index";

it("renders without crashing", () => {
  const wrapper = shallow(<SendItApp />);
  expect(wrapper).toMatchSnapshot();
});

test("reducers", () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({
    registration: [],
    isloggedin: [],
    loadingParcel: false,
    loading: false,
    isLogInTab: true,
    newParcel: [],
    allParcels: []
  });
});
