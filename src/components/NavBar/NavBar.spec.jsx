import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar'

let activate = jest.fn();
let logout = jest.fn();
let toggleCollapse = jest.fn()
const props = {
    toggleCollapse,
    isOpen: false,
    activate,
    logout
};

describe('test navbar component', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<NavBar {...props} />)
    })
    it('matches snapShot', ()=>{
        expect(wrapper).toMatchSnapshot()
    })
    it('test logout',()=>{
        wrapper.instance().logout;
        expect(window.localStorage.getItem('token')).toEqual(null)
    })


})