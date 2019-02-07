import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import PropTypes from 'prop-types'

const FormPage = (props) => {
  const { onChange, onSubmit }= props;
  return (
    <MDBContainer className=" d-flex justify-content-center align-items-center">
      <MDBCard className="col-md-6 mt-4 col-sm-12 ">
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="12">
              <form onSubmit={onSubmit}>
                <p className="h5 text-center mb-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    onChange={onChange}
                    name='username'
                    label="Username"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    onChange={onChange}
                    name="email"
                    label="Email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    onChange={onChange}
                    name="password"
                    label="Password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                  <MDBInput
                    onChange={onChange}
                    name="confirm_password"
                    label="Confirm password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center">
                  <button type='submit' className="btn indigo">Register</button>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};
FormPage.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,

};
export default FormPage;
