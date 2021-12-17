import React from "react";
import styled from "styled-components";

function SignUp() {
  return (
    <Form>
      jkjkjkjkkjkjjk
      <label htmlFor="userName">userName :</label>
      <input type="text" id="userName" />
      <label htmlFor="password">Password :</label>
      <input type="password" id="password" />
    </Form>
  );
}
const Form = styled.form`
  background: #ededed;
  margin: 100px;
`;
export default SignUp;
