import React from "react";
import { shallow } from "enzyme";
import App from '../components/SendItApp';
import reducers from '../reducers/index';

it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
});

test('reducers', () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({isLogInTab:true});
});
