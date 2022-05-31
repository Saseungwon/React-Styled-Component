import styled from "styled-components";

// attr을 지정해주면 js에서 일일히 지정해주지 않아도 default로 지정해줄 수 있다.
const StyledA = styled.a.attrs((props) => ({
  target: "_blank", // 새창에서 열기
}))`
  color: ${(props) => props.color};
`;

export default StyledA;
