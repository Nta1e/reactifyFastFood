import actionTypes from '../actions/actionTypes';

const initialState = {
    error: {},
    success: {}
};

export default (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SIGNUP_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                success: action.payload
            };
        default:
            return state
    }
}

