// about React
import { useNavigate } from "react-router-dom";

// about Firebase
import { auth } from "@/firebase";

// about Styled Components
import styled from "styled-components";

const Wrapper = styled.div`
  &.container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Button = styled.button`
  &.logout {
    font-size: 24px;
    font-weight: 600;
    background-color: transparent;
    color: black;
    height: 50px;
    width: 200px;
  }
`;

function LogOutButton() {
  const navigate = useNavigate();

  const logOut = async () => {
    const ok = confirm("로그아웃을 하시겠습니까?");

    if (ok) {
      await auth.signOut();
      navigate("/login");
    }
  };

  return (
    <Wrapper className="container">
      <Wrapper>
        <Button className="logout" onClick={logOut}>
          로그아웃
        </Button>
      </Wrapper>
    </Wrapper>
  );
}

export default LogOutButton;
