/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <div css={appStyles}>
        <Dashboard />
      </div>
    </>
  );
};

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    font-family:
      "Poppins",
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
    overflow-x: hidden;
    line-height: 1.6;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    position: relative;
  }

  /* Improve touch targets on mobile */
  @media (max-width: 991px) {
    button,
    a,
    [role="button"] {
      min-height: 44px;
      min-width: 44px;
    }
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Better mobile viewport handling */
  @media (max-width: 480px) {
    html {
      font-size: 14px;
    }
  }
`;

const appStyles = css`
  width: 100%;
  min-height: 100vh;
`;

export default App;
