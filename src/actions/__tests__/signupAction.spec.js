import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import signUpAction from '../signupActions';
import actionTypes from '../actionTypes'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test signup action', ()=>{
    afterEach(()=>{
        fetchMock.restore();
    });
    it('mock post', ()=>{
        let postData = {};
        fetchMock.postOnce('https://ntale--v2.herokuapp.com/api/v2/auth/signup', {
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({postData})
        });
        const expectedActions = [
            {
                type: actionTypes.SIGNUP_SUCCESS,
                payload: undefined
            }
        ];
        const store = mockStore({});

        return store.dispatch(signUpAction(postData)).then(()=>{
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});
