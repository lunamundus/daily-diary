// about React
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// about Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "@/firebase";

// about Styles
import {
  Wrapper,
  Form,
  Input,
  Span,
  P,
  Button,
  Label,
} from "@styles/loginStyles";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (email === "" || password === "") {
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error.message);
      }
    }
  };

  return (
    <Wrapper className="container">
      <Wrapper>
        <Form className="loginForm" onSubmit={onSubmit}>
          <Wrapper className="flex-column">
            <Label>Email</Label>
            <Wrapper className="inputForm">
              <img src="/public/email-icon.svg" />
              <Input
                className="loginInput"
                placeholder="Enter your Email"
                type="email"
                onChange={onChange}
                name="email"
                value={email}
                required
              />
            </Wrapper>
          </Wrapper>

          <Wrapper className="flex-column">
            <Label>Password</Label>
            <Wrapper className="inputForm">
              <img src="/public/password-icon.svg" />
              <Input
                className="loginInput"
                placeholder="Enter your password"
                type="password"
                onChange={onChange}
                name="password"
                value={password}
                required
              />
            </Wrapper>

            <Wrapper className="flex-row">
              <Wrapper>
                <Input type="checkbox" />
                <Label className="text-label">Remember me</Label>
              </Wrapper>
              <Span className="text-span">
                <Link to="/reset-password">Forgot password?</Link>
              </Span>
            </Wrapper>

            <Input type="submit" className="submit-button" value="Sign In" />

            {error !== "" ? <P>{error}</P> : null}
          </Wrapper>

          <P className="text-p">
            Don't have an account?{" "}
            <Span className="text-span">
              <Link to="/create-account">Sign Up</Link>
            </Span>
          </P>

          <P className="text-p line">Or With</P>

          <Wrapper className="flex-row">
            <Button className="btn google">
              <img src="/public/google-logo.svg" /> Google
            </Button>

            <Button className="btn github">
              <img src="/public/github-logo.svg" /> GitHub
            </Button>
          </Wrapper>
        </Form>
      </Wrapper>
    </Wrapper>
  );
}

export default LoginPage;
