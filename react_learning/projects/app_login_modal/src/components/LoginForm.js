import React from 'react';

const LoginForm = ({ isShowLogin }) => {
  const printValues = () => {
    let curr_email = document.getElementById('email');
    let curr_password = document.getElementById('password');
    let print_obj = { email: curr_email, password: curr_password };
    console.log(print_obj);
  };

  return (
    <div className={`${!isShowLogin ? 'active' : ''} show`}>
      <div className="login-form">
        <div className="form-box">
          <form
            action="https://css-tricks.com/snippets/css/a-guide-to-
flexbox/"
          >
            <h1 className="login-text">Sign In To Your Account</h1>
            <label className="input-label">Email</label>
            <br></br>
            <input type="text" name="username" className="login-box" id="email" />
            <br></br>
            <label className="input-label">Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" id="password" />
            <br></br>
            <input type="submit" value="Sign In" className="login-btn" id="myButton" onClick={printValues} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
