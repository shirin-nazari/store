import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

function SignUp() {
  return (
    <Form>
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            checked
          ></input>
          <label for="tab-1" class="tab">
            Sign In
          </label>

          <input id="tab-2" type="radio" name="tab" className="sign-up"></input>
          <label for="tab-2" class="tab">
            Sign Up
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label for="user" className="label">
                  Username
                </label>
                <input id="user" type="text" className="input"></input>
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  className="input"
                  type="password"
                  datatype="password"
                ></input>
              </div>
              <div className="group">
                <input type="checkbox" id="check" className="check" checked />
                <label for="check">
                  <span className="icon"></span> Keep me Signed in{" "}
                </label>
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
              <div className="hr"></div>
              <div className="foot-link">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>

            <div className="sign-up-htm">
              <div className="group">
                <label for="user" className="label">
                  Username{" "}
                </label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  className="input"
                  type="password"
                  datatype="password"
                />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Repeat Password
                </label>
                <input
                  id="pass"
                  className="input"
                  type="password"
                  datatype="password"
                />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Email Address
                </label>
                <input id="pass" className="input" type="email" />
              </div>
              <div className="group">
                <input className="button" type="submit" value="Sign Up" />
              </div>
              <div className="hr"></div>
              <div className="foot-link">
                <label for="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}

const Form = styled.form`
  background: #ededed;
  padding: 100px;
  /* margin-top: 50px; */
  &:after,
  :before {
    box-sizing: botder-box;
  }
  .clear-fix:after,
  .clear-fix:before {
    content: "";
    display: table;
  }
  .clear-fix:after {
    clear: both;
    display: block;
  }
  body {
    margin: 0;
    color: #6a6f8c;
    background: #c8c8c8;
    font: 600 16px/18px "Open Sans", sans-serif;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  .clearfix:after,
  .clearfix:before {
    content: "";
    display: table;
  }
  .clearfix:after {
    clear: both;
    display: block;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  .login-wrap {
    width: 100%;
    margin: auto;
    max-width: 525px;
    min-height: 670px;
    position: relative;
    background: url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg)
      no-repeat center;
    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  .login-html {
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 90px 70px 50px 70px;
    background: rgba(40, 57, 101, 0.9);
  }
  .login-html .sign-in-htm,
  .login-html .sign-up-htm {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    transition: all 0.4s linear;
  }
  .login-html .sign-in,
  .login-html .sign-up,
  .login-form .group .check {
    display: none;
  }
  .login-html .tab,
  .login-form .group .label,
  .login-form .group .button {
    text-transform: uppercase;
  }
  .login-html .tab {
    font-size: 22px;
    margin-right: 15px;
    padding-bottom: 5px;
    margin: 0 15px 10px 0;
    display: inline-block;
    border-bottom: 2px solid transparent;
  }
  .login-html .sign-in:checked + .tab,
  .login-html .sign-up:checked + .tab {
    color: #fff;
    border-color: #1161ee;
  }
  .login-form {
    min-height: 345px;
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
  }
  .login-form .group {
    margin-bottom: 15px;
  }
  .login-form .group .label,
  .login-form .group .input,
  .login-form .group .button {
    width: 100%;
    color: #fff;
    display: block;
  }
  .login-form .group .input,
  .login-form .group .button {
    border: none;
    padding: 15px 20px;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.1);
  }
  .login-form .group input[data-type="password"] {
    text-security: circle;
    -webkit-text-security: circle;
  }
  .login-form .group .label {
    color: #aaa;
    font-size: 12px;
  }
  .login-form .group .button {
    background: #1161ee;
  }
  .login-form .group label .icon {
    width: 15px;
    height: 15px;
    border-radius: 2px;
    position: relative;
    display: inline-block;
    background: rgba(255, 255, 255, 0.1);
  }
  .login-form .group label .icon:before,
  .login-form .group label .icon:after {
    content: "";
    width: 10px;
    height: 2px;
    background: #fff;
    position: absolute;
    transition: all 0.2s ease-in-out 0s;
  }
  .login-form .group label .icon:before {
    left: 3px;
    width: 5px;
    bottom: 6px;
    transform: scale(0) rotate(0);
  }
  .login-form .group label .icon:after {
    top: 6px;
    right: 0;
    transform: scale(0) rotate(0);
  }
  .login-form .group .check:checked + label {
    color: #fff;
  }
  .login-form .group .check:checked + label .icon {
    background: #1161ee;
  }
  .login-form .group .check:checked + label .icon:before {
    transform: scale(1) rotate(45deg);
  }
  .login-form .group .check:checked + label .icon:after {
    transform: scale(1) rotate(-45deg);
  }
  .login-html
    .sign-in:checked
    + .tab
    + .sign-up
    + .tab
    + .login-form
    .sign-in-htm {
    transform: rotate(0);
  }
  .login-html .sign-up:checked + .tab + .login-form .sign-up-htm {
    transform: rotate(0);
  }

  .hr {
    height: 2px;
    margin: 60px 0 50px 0;
    background: rgba(255, 255, 255, 0.2);
  }
  .foot-lnk {
    text-align: center;
  }
`;
export default SignUp;
