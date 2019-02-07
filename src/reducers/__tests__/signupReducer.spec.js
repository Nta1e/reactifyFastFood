import actionTypes from '../../actions/actionTypes';
import signupReducer from '../signUpReducer';

const initialState = {
    error: {},
    success: {}
};
describe('test signup reducer', ()=>{
    it('test empty reducer', ()=>{
        expect(signupReducer( undefined, initialState)).toEqual(initialState)
    });
    it('test signup success', ()=>{
        let res = signupReducer(initialState,{
            type: actionTypes.SIGNUP_SUCCESS,
            payload: 'registration successfull'
        })
        expect(res).toEqual({
            error: {},
            success: 'registration successfull'
        })
    });
    it('test signup success', ()=>{
        let res = signupReducer(initialState,{
            type: actionTypes.SIGNUP_FAIL,
            payload: 'password too short'
        })
        expect(res).toEqual({
            error: 'password too short',
            success: {}
        })
    })
});