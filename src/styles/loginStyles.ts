// about Styled Components
import styled from "styled-components";

export const Wrapper = styled.div`
  &.container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.flex-column {
  }

  &.inputForm {
    margin: 10px 0 10px 0;
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.2s ease-in-out;

    &:focus-within {
      border: 1.5px solid #0123b4;
    }
  }

  &.flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
  }
`;

export const Form = styled.form`
  &.loginForm {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    padding: 30px;
    width: 450px;
    border-radius: 20px;
  }
`;

export const Label = styled.label`
  color: #151717;
  font-weight: 600;

  &.text-label {
    font-size: 15px;
    color: #000000;
    font-weight: 400;
  }
`;

export const Input = styled.input`
  &.loginInput {
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    width: 85%;
    height: 90%;

    &:focus {
      outline: none;
    }
  }

  &.submit-button {
    align-self: flex-end;
    margin: 30px 0 10px 0;
    background-color: #151717;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 600;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    cursor: pointer;

    &:hover {
      background-color: #252727;
    }
  }
`;

export const Span = styled.span`
  &.text-span {
    font-size: 15px;
    margin-left: 5px;
    color: #0123b4;
    font-weight: 600;

    a {
      text-decoration: none;
      color: #0123b4;
    }
  }
`;

export const P = styled.p`
  &.text-p {
    text-align: center;
    color: #000000;
    font-size: 14px;
    margin: 20px 0;
  }
`;

export const Button = styled.button`
  &.btn {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    gap: 10px;
    border: 1px solid #ededef;
    background-color: #ffffff;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      border: 1px solid #0123b4;
    }
  }

  &.google {
  }

  &.github {
  }
`;
