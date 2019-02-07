import React, { Component } from "react";
import {connect} from 'react-redux';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";


class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
        tabs:{signup:"inactive", login:"inactive",home:"active"},
        value:'d-none'
    };
  }

  componentDidMount(){
      let token = window.localStorage.getItem('token');
      this.activate(window.location.pathname.substring(1));
      if(token){
          this.setState({
              tabs:{signup:"d-none", login:"d-none",home:"d-none"},
              value: ''
          }, ()=>{
            console.log(this.state)
          })
      }

  }

  componentWillReceiveProps(nextProps){
    if(nextProps.signupSuccess){
      setTimeout(()=>{
          this.activate('login');
      },3000)

    }
  }

  activate = (newkey)=>{

      if(newkey==='home'){
        this.setState({tabs:{signup:"inactive", login:"inactive",home:"active"}})
    }
      else if(newkey==='signup'){
          this.setState({tabs:{signup:"active", login:"inactive",home:"inactive"}})
      }
      else if(newkey==='login'){
          this.setState({tabs:{signup:"inactive", login:"active",home:"inactive"}})
      }

  };

  toggleCollapse = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };
  logout = () =>{
    window.localStorage.removeItem('token');
    window.location.href='/'
  };

  render() {
    const { isOpen, tabs, value } = this.state;
    return (
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Fast Food Fast</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem id='home' onClick={()=>{this.activate("home")}} className={tabs.home}>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem id='signup' onClick={()=>{this.activate("signup")}} className={tabs.signup}>
              <MDBNavLink to="/signup">SignUp</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem id='login' onClick={()=>{this.activate("login")}} className={tabs.login}>
              <MDBNavLink to="/login">Login</MDBNavLink>
            </MDBNavItem>
              <MDBNavItem className={value} onClick={this.logout}>
                  <MDBNavLink to="/">logout</MDBNavLink>
              </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

const mapStateToProps = (state, )=>{


  return ({signupSuccess:state.signup.success, loginSuccess:state.login.success.message});
}

export default connect(mapStateToProps)(NavbarPage) ;
