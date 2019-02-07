import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify'
import SignupForm from "../../components/signUpComponent/signUpComponent";
import signUpAction from '../../actions/signupActions'

export class Signup extends Component {
  state = {
  };
  componentWillReceiveProps(nextProps){
      const { error, success } = nextProps;
      const {history} = this.props;
      if(error.length > 1){
          toast.error(error)
      }else if(success.length > 1){
          toast.success(success)
          setTimeout(()=>{
              history.push('/login')
          }, 3800)
      }

  }
  onChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  };
  onSubmit = e =>{
      e.preventDefault();
      const { signUpAction } = this.props;
      const postData = {
          ...this.state
      };
      signUpAction(postData);
  };
  render() {
    return <SignupForm onChange={this.onChange} onSubmit={this.onSubmit} />;
  }
}

Signup.propTypes = {
    error: PropTypes.string.isRequired,
    success: PropTypes.string.isRequired,
    signUpAction: PropTypes.func.isRequired,
    history: PropTypes.func.isRequired
};
export const mapStateToProps = state => ({
   error: state.signup.error,
   success: state.signup.success
});
export default connect(
    mapStateToProps,
    { signUpAction }
)(Signup);
