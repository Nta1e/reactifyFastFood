import React from 'react';
import { shallow } from 'enzyme';
import FormPage from './signUpComponent';

const props = {
    error: '',
    errorClass: '',
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    success: '',
    successClass: ''
};
describe('test signup component',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<FormPage {...props} />)
    });
    it('matches snapshot', ()=> {
        expect(wrapper).toMatchSnapshot()
    })
});