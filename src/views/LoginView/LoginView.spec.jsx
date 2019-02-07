import React from 'react';
import { shallow } from 'enzyme';
import { LoginView, mapStateToProps } from './LoginView';

const loginAction = jest.fn();
const push = jest.fn();
const props = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    loginAction,
    history: {push}
};
const state = {
    login: {
        error: 'error',
        success: ''
    }
};

describe('test login view', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<LoginView {...props} />)
    })
    it('matches snapShot',()=>{
        expect(wrapper).toMatchSnapshot()
    });
    it('maps state to props',()=>{
        expect(mapStateToProps(state).error).toEqual('error')
    });
    it('test on change', ()=>{
        wrapper.instance().onChange({target: {name: 'username', value: 'ntale'}});
        expect(wrapper.state('username')).toEqual('ntale')
    });
    it('test on submit', ()=>{
        wrapper.instance().onSubmit({preventDefault: jest.fn()})
        expect(loginAction).toBeCalled()
    });
    it('test will receive props',()=>{
        wrapper.setProps({error: 'error', success: 'success'})
    })
});