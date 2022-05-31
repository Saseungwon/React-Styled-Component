## Styled Component

Create React App 에서 지원되는 import 방식이나 module 방식이 아니라 별도의 라이브러리를 이용
장점 : 스코프 오염 방지할 수 있음
단점 : 전역적으로 처리해주고 싶을 때는 어려울 수도 있다.(글로벌 스타일 기능 지원해줘서 사용 가능)

- 설치

```
npm i styled-components
```

### 정리

- App.js

```js
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
```

- StyledButton.jsx

```jsx
import styled from "styled-components";
import { css } from "styled-components";

// 겹치지 않게 class 이름 생성해주고, `` 내에 css 문법 작성하여 편하게 사용가능
// 이미 있는 버튼에 특정 props일 때 다른 스타일 먹일 때 &{} 를 사용해서 다르게 만들기 가능
const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export default StyledButton;
```

- StyledA.jsx

```jsx
import styled from "styled-components";

// attr을 지정해주면 js에서 일일히 지정해주지 않아도 default로 지정해줄 수 있다.
const StyledA = styled.a.attrs((props) => ({
  target: "_blank", // 새창에서 열기
}))`
  color: ${(props) => props.color};
`;

export default StyledA;
```

<br>

### GlobalStyle

styled-component의 전역속성 적용이 어려운 단점을 커버해줌

```js
// App.js
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
        <p>
          <StyledButton>버튼1</StyledButton>
        </p>
      </header>
    </div>
  );
}
```

<br>

### attr로 default 설정

```js
// StyleA.jsx
const StyledA = styled.a.attrs((props) => ({
  target: "_blank", // 새창에서 열기
}))`
  color: ${(props) => props.color};
`;

export default StyledA;

// App.js
<StyledA href="https://google.com">태그</StyledA>;
```
