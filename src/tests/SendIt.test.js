import React from "react";
import { shallow } from "enzyme";
import { SendItApp } from '../components/SendItApp';

it('renders without crashing', () => {
    const wrapper = shallow(<SendItApp
        history = {{ push: jest.fn()}}
    />);
    expect(wrapper).toMatchSnapshot();
});
