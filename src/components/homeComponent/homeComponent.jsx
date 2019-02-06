import React from "react";
import { MDBMask, MDBRow, MDBBtn, MDBView, MDBContainer } from "mdbreact";
import "./AppPage.scss";

const AppPage = () => {
  return (
    <div id="apppage">
      <MDBView>
        <MDBMask className="d-flex justify-content-start align-items-start gradient pt-5">
          <MDBContainer>
            <MDBRow className="flex flex-center mt-5">
              <div className="white-text text-center text-md-left col-md-6 mt-xl-1 mb-5 mt-5">
                <h1 className="h1-responsive font-weight-bold mt-sm-1">
                  Order food with our app!
                </h1>
                <hr className="hr-light" />
                <h5 className="mt-1">
                  Order food from our dynamic menu and get it delivered at your
                  door step!
                </h5>
                <MDBBtn color="white">Menu</MDBBtn>
                <MDBBtn outline color="white">
                  About us
                </MDBBtn>
              </div>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    </div>
  );
};

export default AppPage;
