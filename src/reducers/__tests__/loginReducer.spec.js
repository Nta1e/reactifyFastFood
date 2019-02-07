import loginReducer from '../loginReducer';
import actionTypes from '../../actions/actionTypes';

 const initialState = {
     error: {},
     success: {}
 };
 describe('test login reducer', ()=>{
     it('test for empty reducer', ()=>{
         expect(loginReducer(undefined, initialState)).toEqual(initialState)
     });
     it('test for login success', ()=>{
         let res = loginReducer(initialState, {
             type: actionTypes.LOGIN_SUCCESS,
             payload: 'login successfull'
         });
         expect(res).toEqual({
             error: {},
             success: 'login successfull'
         })
     });
     it('test for login failure', ()=>{
         let res = loginReducer(initialState, {
             type: actionTypes.LOGIN_FAILURE,
             payload: 'wrong username'
         });
         expect(res).toEqual({
             error: 'wrong username',
             success: {}
         })
     })
 });