// about React
import { useState } from "react";
import { Link } from "react-router-dom";

// about Styled Components
import styled from "styled-components";

const Wrapper = styled.div`
  &.flex-column {
    label {
      color: #151717;
      font-weight: 600;
    }
  }

  &.flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;

    label {
      font-size: 14px;
      color: black;
      font-weight: 400;
    }
  }

  &.inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    /* transition: 0.2s ease-in-out; */
    &:focus-within {
      border: 1.5px solid #2d79f3;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  color: #333333;
  padding: 30px;
  width: 450px;
  border-radius: 20px;
`;

const Input = styled.input`
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 85%;
  height: 95%;

  &:focus {
    outline: none;
  }

  &.submitBtn {
    margin: 20px 0 10px 0;
    background-color: #151717;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    cursor: pointer;
  }
`;

const Span = styled.span`
  font-size: 14px;
  margin-left: 5px;
  color: #2d79f3;
  font-weight: 500;
  cursor: pointer;
`;

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1>로그인</h1>
      <Form>
        <Wrapper className="flex-column">
          <label>Email</label>
          <Wrapper className="inputForm">
            <Input
              name="email"
              value={email}
              type="email"
              placeholder="Enter your Email"
            />
          </Wrapper>
        </Wrapper>

        <Wrapper className="flex-column">
          <label>Password</label>
          <Wrapper className="inputForm">
            <Input
              name="password"
              value={password}
              type="password"
              placeholder="Enter your Password"
            />
          </Wrapper>
        </Wrapper>

        <Wrapper className="flex-row">
          <Wrapper>
            <input type="checkbox" />
            <label>Remember me</label>
          </Wrapper>
          <Span>
            <Link to="/reset-password">Forgot password?</Link>
          </Span>
        </Wrapper>

        <Input className="submitBtn" type="submit" value={"Sign In"} />

        {/* <button>Sign In</button> */}

        <p>
          Don't have an account?
          <Span>
            <Link to="/create-account">Sign Up</Link>
          </Span>
        </p>

        <p>Or With</p>

        <Wrapper className="flex-row">
          <button>Google</button>
          <button>GitHub </button>
        </Wrapper>
      </Form>
    </>
  );
}

export default LoginPage;
