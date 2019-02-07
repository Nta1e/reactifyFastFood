import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './homeComponent';

describe('test landing page component', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<LandingPage />)
    });
    it('it mounts', ()=>{
        expect(wrapper).toMatchSnapshot();
    })
});