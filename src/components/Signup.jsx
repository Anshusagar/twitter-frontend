import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './Signup.css'
const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const BASE_URL = 'https://tiny-teal-reindeer-cuff.cyclic.cloud'
  const notifyLogin = () => toast("Yey you logged In Successfully!");
  const notifySignUp = () => toast("Yey you signed up Successfully!");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleLoginPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    let url = `${BASE_URL}/api/v1/users/login`;

    let response = await axios.post(url, { username, password }).then(res => res);
    if (response.status == 200) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.loggedIN);
      notifyLogin();
    }


    console.log('Login Data data:', { username, password });
    setUsername('');
    setPassword('');
  }
  const handleSignOut = () => {
      
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Signup data:', { username, confirmPassword, password });
    let url = `${BASE_URL}/api/v1/users/signup`;
    let response = await axios.post(url, { username, password, confirmPassword }).then(res => res);
    console.log(response)
    if (response.status == 201) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.data.user._id);
      notifySignUp();
    }

    setUsername('');
    setConfirmPassword('');
    setPassword('');
  };

  return (
    <>
      <ToastContainer />
      <div className="wrapper">
        <div className="card-switch">
          <label className="switch">
            <input type="checkbox" className="toggle"></input>
            <span className="slider"></span>
            <span className="card-side"></span>
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <div className="title">Log in</div>
                <form className="flip-card__form" action="">
                  <input onChange={handleLoginUsername} className="flip-card__input" name="username" placeholder="UserName" type="username" value={username}></input>
                  <input onChange={handleLoginPassword} className="flip-card__input" name="password" placeholder="Password" type="password" value={password}></input>
                  <button onClick={(w) => handleLoginSubmit(w)} className="flip-card__btn">Let`s go!</button>
                </form>
              </div>
              <div className="flip-card__back">
                <div className="title">Sign up</div>
                <form className="flip-card__form" action="">
                  <input onChange={handleUsernameChange} name='username' className="flip-card__input" placeholder="UserName" type="username" value={username}></input>
                  <input onChange={handlePasswordChange} className="flip-card__input" name="password" placeholder="Password" type="password" value={password}></input>
                  <input onChange={handleConfirmPasswordChange} className="flip-card__input" name="confirmPassword" placeholder="Confirm Password" type="confirmPassword" value={confirmPassword}></input>
                  <button onClick={(e) => handleSubmit(e)} className="flip-card__btn">Confirm!</button>
                </form>
              </div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
