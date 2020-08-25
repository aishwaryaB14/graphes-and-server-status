import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import '../../../src/LoginStyle.css';
import { baseUrl } from '../../utils/utils';
import { doLogin } from '../../redux/actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      linkStatus: '',
      loginSucess: false,
      role: '',
      error: false,
      token: '',
    }
  //  this.onPressLogin = this.onPressLogin.bind(this);
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    console.log('next props in log in', nextProps);
    if (nextProps.role === "SUPER_ADMIN" ) {
      this.props.history.push("/");
    }
    
    //  this.props.history.push("/DepartmentQuestions1");
  
  }

  setLogin(event) {
    const username = event.target.value;
    this.setState({ username })
  }

  setPassword(event) {
    const password = event.target.value;
      this.setState({ password });
  }

  setRole(event) {
    const role = event.target.value;
    console.log('event', event.target.value);
    this.setState({ role });
  }

  onPressLogin(e) {
    e.preventDefault();
    const loginData = {
      user_id: this.state.username,
      password: this.state.password,
    }
    const url = `${baseUrl}/api/v1/login`;
    console.log('url', url);
    axios.post(url, loginData)
      .then((res) => {
        console.log('login', res);
        this.setState({ loginSucess: true });
        this.props.doLogin( res.data );
      })
      .catch((error) => {
        if (error && error.response && error.response.data && error.response.data.error) {
          this.setState({ error: true, errorMsg: error.response.data.error })
          // setTimeout(() => { this.setState({ error: false }); }, 3000);
          console.log('error', error);
        } else {
          this.setState({ error: true, errorMsg: "Login Fail" });
          //   setTimeout(() => { this.setState({ error: false }); }, 3000);
        }
      });
  }

  backClick() {
    console.log('back click');
    this.props.history.push("/");
    this.setState({ error: true, errorMsg: "Please Sign In" })
    //setTimeout(() => { this.setState({ error: false }); }, 5000);
  }

  
// <Link to={ this.state.username === "SuperAdmin" ? ( "/InstituteList") : this.state.username === "Admin" ? ("/auditList") : this.state.username === "Department" ? ("/DepartmentQuestions1") : ("/") } >

  render() {
    window.onpopstate  = (e) => {
      this.backClick();
   }
    return (
      <div className="backImg">
        <div className="container ">
          <header className="App-header col-lg-12 col-md-12 col-sm-12 col-xs-12">
          FORK TECHNOLOGIES , BANGALORE
          </header>
          <div className="d-flex justify-content-center h-100" style={{paddingBottom: 205}}>
            <div className="card1">
              <div className="card-header">
                <h3>Sign In</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                  <input type="text" className="form-control" placeholder="user id" onChange={this.setLogin.bind(this)} />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="password" className="form-control" placeholder="password" onChange={this.setPassword.bind(this)}/>
                  </div>

                  <div className="form-group" style={{ paddingBottom: 20}}>
                      <input type="submit" value="Login" className="btn float-right login_btn" onClick={this.onPressLogin.bind(this)} />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div  className="d-flex justify-content-center">
                  {
                    this.state.error &&
                    <div style={{ color: 'red' }}> ERROR! { this.state.errorMsg }
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  console.log('reduxState', reduxState);

  
 /*  const token = reduxState.loginReducer.token;
  const timeout = reduxState.loginReducer.timeout;
  const role = reduxState.loginReducer.role;
  const loginReducer = reduxState.loginReducer
  return { token, role, timeout }; */
};


const mapDispatchToProps = (dispatch) => {
  return {
  doLogin: data => dispatch(doLogin(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
