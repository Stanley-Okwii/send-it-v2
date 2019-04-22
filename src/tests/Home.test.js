import React from "react";
import { shallow } from "enzyme";
import Home from '../components/Home';

it('renders without crashing', () => {
    const wrapper = shallow(<Home
        history = {{ push: jest.fn()}}
         />);
    expect(wrapper).toMatchSnapshot();
});
