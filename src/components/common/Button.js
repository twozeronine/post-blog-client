import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const StyledButton = styled.button`
  // 테두리 없음
  border: none;
  // 모서리 각도
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  // 상하 0.25rem 좌우 1rem
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
