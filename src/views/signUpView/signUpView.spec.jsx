import React from 'react';
import { shallow } from 'enzyme';
import { Signup, mapStateToProps } from './signUpView';

const signUpAction = jest.fn();
const props = {
    error: '',
    success: '',
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    signUpAction
};
const state = {
    signup:{
        error: 'missing fields',
        success: ''
    }
};

describe('test signup view',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Signup {...props} />)
    });
    it('matches snapshot',()=>{
        expect(wrapper).toMatchSnapshot()
    });
    it('maps state to props', ()=>{
        expect(mapStateToProps(state).error).toEqual('missing fields')
    });
    it('test onchange', ()=>{
        wrapper.instance().onChange({target: {name: 'email', value: 'me@you.com'}});
        expect(wrapper.state('email')).toEqual('me@you.com')
    });
    it('test onSubmit', ()=>{
        wrapper.instance().onSubmit({preventDefault: jest.fn()})
        expect(signUpAction).toBeCalled()

    })

});