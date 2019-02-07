import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Login from '../../components/LoginComponent/Login';
import loginAction from '../../actions/loginActions'


export class LoginView extends Component {
    state = {};
    componentWillReceiveProps(nextProps){
        const {error, success} = nextProps;
        if(error.length > 0){
            toast.error(error)
        }else if(success.length >0){
            toast.success(success)
        }
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    onSubmit = (e) => {
        e.preventDefault();
        const {loginAction} = this.props;
        const postData = {
            ...this.state
        };
        loginAction(postData)
    };
    render() {
        return (
          <Login onChange={this.onChange} onSubmit={this.onSubmit} />
        );
    }
}

LoginView.propTypes = {
    loginAction: PropTypes.func.isRequired,
    history: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    success: PropTypes.string.isRequired
};

export const mapStateToProps = state => ({
    error: state.login.error,
    success: state.login.success
});
export default connect(
    mapStateToProps,
    {loginAction}
)(LoginView);


