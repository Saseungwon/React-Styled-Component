import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/StyledButton";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import StyledA from "./components/StyledA";

// 버튼3 : 기존에 있던 StyledButton에 다시 새로운 스타일 먹이기
const PrimaryStyledButton = styled(StyledButton)`
  background: palevioletred;
  color: white;
`;

// 버튼5
const UppercaseButton = (props) => (
  <button {...props} children={props.children.toUpperCase()} />
);

// 버튼6
const MyButton = (props) => (
  <button className={props.className} children={`MyButton ${props.children}`} />
);
// 버튼7 : ${(props) => props.color || "palevioletred"} 조건부로 props
const StyledMyButton = styled(MyButton)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.color || "palevioletred"};
  color: ${(props) => props.color || "palevioletred"};
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;

  :hover {
    border: 2px solid red;
  }

  ::before {
    content: "@";
  }
`;

// Global Style :  styled-component의 전역속성 적용이 어려운 단점을 커버해줌
const GlobalStyles = createGlobalStyle`
button {
  color: yellow;
}
`;

function App() {
  return (
    <div className="App">
      {/* 전역속성 적용이 어려운 단점을 커버해주는 GlobalStyles 기능은 적용할 부분 위에 놓기 */}
      <GlobalStyles />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* <button class="sc-bczRLJ">버튼</button> Styled Component로 클래스를 지정하지 않았는데 자동으로 들어가있음 */}
          <StyledButton>버튼1</StyledButton>

          <StyledButton primary>버튼2</StyledButton>

          <PrimaryStyledButton>버튼3</PrimaryStyledButton>

          {/* as="a" -> a태그처럼 쓰겠다 */}
          <StyledButton as="a" href="/">
            버튼4
          </StyledButton>

          {/* as를 이용해 특정 컴포넌트를 넣어줄 수도 있다. */}
          <StyledButton as={UppercaseButton}>버튼5button</StyledButton>

          <StyledMyButton as={UppercaseButton}>버튼6</StyledMyButton>

          {/* props를 인자로 받아서 조건부로 사용할 수 있다. */}
          <StyledMyButton color="green">버튼7</StyledMyButton>

          <StyledA href="https://google.com">태그</StyledA>
        </p>
      </header>
    </div>
  );
}

export default App;
