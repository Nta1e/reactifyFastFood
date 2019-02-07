import actionTypes from './actionTypes';

const signUp = data => dispatch =>{
    let statusCode = '';
    return fetch('https://ntale--v2.herokuapp.com/api/v2/auth/signup', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => {
        statusCode = res.status;
        return res.json()
    })
        .then(result =>{
            if(statusCode >= 400) {
                dispatch({
                    type: actionTypes.SIGNUP_FAIL,
                    payload: result.error
                })
            }
            else{
                dispatch({
                    type: actionTypes.SIGNUP_SUCCESS,
                    payload: result.message
                });
            }

        } )
};

export default signUp;