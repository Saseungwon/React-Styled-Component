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
