import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Button = ({ type, onClick, children }) => {
  return (
    <CustomButton type={type} onClick={onClick}>
      {children}
    </CustomButton>
  );
};

const contained = css`
  :hover {
    color: #fff;
    background-color: black;
  }
  :active {
    background-color: blue;
  }
  :disable {
    background-color: #fff;
  }
`;

const texted = css`
  padding: 0px 8px;
  background: none;
  :hover {
    color: #fff;
  }
`;

const outlined = css`
  border: 1px solid black;

  :hover {
    color: #fff;
    background-color: black;
  }
  :active {
    background-color: blue;
  }
  :disable {
    background-color: #fff;
  }
`;

const buttonTypeStyle = {
  contained,
  texted,
  outlined,
};

const CustomButton = styled.button`
  box-sizing: border-box;
  display: flex;
  min-width: 64px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  margin: 8px 16px;
  padding: 0px 16px;
  border: none;

  ${({ type }) => buttonTypeStyle[type]}
`;

export { Button };
export default Button;
