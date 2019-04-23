
import React from "react";
import { shallow } from "enzyme";
import ParcelTable from '../components/Table';

it('renders without crashing', () => {
    const wrapper = shallow(<ParcelTable
         />);
    expect(wrapper).toMatchSnapshot();
});
