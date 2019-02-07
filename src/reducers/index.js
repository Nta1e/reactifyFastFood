import { combineReducers } from 'redux';
import signupReducer from './signUpReducer';
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer
});

export default rootReducer