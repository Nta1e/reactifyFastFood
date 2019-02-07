import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login'

describe('test login', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Login />)
    });
    it('matches snapshot',()=>{
        expect(wrapper).toMatchSnapshot()
    })
})