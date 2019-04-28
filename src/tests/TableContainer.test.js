import React from "react";
import { shallow, mount } from "enzyme";

import {
    TableContainer as App,
  mapStateToProps,
  mapDispatchToProps
} from "../containers/TableContainer";
import { getAllParcels } from "./mock-data";


describe("TableContainer ", () => {
  it("renders without crashing", () => {
      const wrapper = shallow(<App fetchParcels={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("matches state to props", () => {
    const initialState = {};
    mapStateToProps(initialState);
  });

  it("match dispatch to props", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).fetchParcels();
  });
});
