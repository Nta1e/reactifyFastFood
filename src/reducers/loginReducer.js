import actionTypes from '../actions/actionTypes';

const initialState = {
    error: {},
    success: {}
};

export default (state = initialState, action) => {
    switch(action.type){
        case actionTypes.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                success: action.payload
            };
        default:
            return state
    }
}

