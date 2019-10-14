import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
    .post('/login', this.state.credentials)
    .then(res => {
      // console.log(res);
      localStorage.setItem('token', res.data.payload);
      // this.props.history.push('/bubbles')
    })
    .catch(err => console.log(err))
  };

  handleChange = e => {
    this.setState({
      credentials: {...this.state.credentials,
      [e.target.name]: e.target.value}
    })
  };

  render(){
    return (
      <div className='login-form'>
        <h1>Welcome to the Bubble App!</h1>
        <p>Build a login page here</p>
        
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            name='username'
            placeholder='Username'
            value={this.username}
            onChange={this.handleChange}
          />

          <input 
            type='password'
            name='password'
            placeholder='Password'
            value={this.password}
            onChange={this.handleChange}
          />

          <button className='login-btn'>Log In</button>
        </form>
      </div>
    )
  }
};

export default Login;
