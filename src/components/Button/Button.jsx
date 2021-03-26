import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Button = ({ type, color, colorWeight = 500, onClick, children }) => {
  return (
    <CustomButton
      type={type}
      color={color}
      onClick={onClick}
      colorWeight={colorWeight}
    >
      {children}
    </CustomButton>
  );
};

const CustomButton = styled.button`
  box-sizing: border-box;
  display: inline-flex;
  min-width: 64px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  margin: 8px 16px;
  padding: 0px 16px;
  border-radius: 4px;

  ${({ type }) => buttonTypeStyle[type]};

  background-color: ${({ theme, color, colorWeight }) =>
    color && theme.colors[color][colorWeight]};
  color: ${({ color }) => (color ? '#fff' : 'inherit')};
`;

const contained = css`
  :hover {
    background-color: #6b2828;
  }
  :active {
    background-color: #70707e;
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
  background: none;

  :hover {
    color: #fff;
    background-color: #52c465;
  }
  :active {
    background-color: #6c6c96;
  }
  :disable {
    background-color: #b48a8a;
  }
`;

const buttonTypeStyle = {
  contained,
  texted,
  outlined,
};

export { Button };
export default Button;
