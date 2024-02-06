// about React
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// about Styled Components
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

// about Pages
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

const GlobalStyles = createGlobalStyle`
${reset}

body {
  background-color: #e8e8e8;
  color: #212121;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/create-account",
    element: <CreateAccountPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },
]);

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
