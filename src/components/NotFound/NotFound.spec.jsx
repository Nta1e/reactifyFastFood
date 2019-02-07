import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound'

describe('test not found',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<NotFound/>)
    });
    it('matches snapshot', ()=>{
        expect(wrapper).toMatchSnapshot()
    })
})