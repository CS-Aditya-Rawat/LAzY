import axios from "axios";
import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "./register.css";

export default function Login() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value){
      password.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try{
        await axios.post("/auth/register", user);
        history.push("/login");
      }catch(err){
        console.log(err)
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LAzY</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on LAzY
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              type="text"
              ref={username}
              className="loginInput"
              required
            />
            <input
              placeholder="Email"
              type="Email"
              ref={email}
              className="loginInput"
              required
            />
            <input
              placeholder="Password"
              type="Password"
              ref={password}
              className="loginInput"
              required
            />
            <input
              placeholder="Password again"
              type="Password"
              ref={passwordAgain}
              className="loginInput"
              required
            />
            <button className="loginButton" type="submit">Sign Up</button>
            <Link className="link" to ="/login"  style={{textDecoration: 'none'}}>
              <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
