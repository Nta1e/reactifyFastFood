import actionTypes from './actionTypes'

const login = data => dispatch =>{
    let statusCode = '';
    return fetch('https://ntale--v2.herokuapp.com/api/v2/auth/login', {
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
                    type: actionTypes.LOGIN_FAILURE,
                    payload: result.Error
                })
            }
            else{
                dispatch({
                    type: actionTypes.LOGIN_SUCCESS,
                    payload: result.message
                });
            }

        } )
};

export default login;