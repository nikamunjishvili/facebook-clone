import styled from "styled-components";
import {createGlobalStyle}  from "styled-components";
import Home from "./pages/home/Home";

function App() {
  return (
    <AppDiv>
      <BodyStyles />
        <Home /> 
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  color: #fff;
  background:#1c1e21 ;
`
const BodyStyles = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  font-family: "Inter",sans-serif;
}
`
