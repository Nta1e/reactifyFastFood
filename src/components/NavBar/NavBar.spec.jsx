import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar'

const props = {
    toggleCollapse: jest.fn(),
    isOpen: false
}

describe('test navbar component', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<NavBar {...props} />)
    })
    it('matches snapShot', ()=>{
        expect(wrapper).toMatchSnapshot()
    })
    it('test toggle function',()=>{
        wrapper.instance().toggleCollapse();
        expect(wrapper.state('isOpen')).toEqual(true)
    })
})