import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Button = ({
  type,
  color,
  colorWeight = 500,
  children,
  padding,
  margin,
  onClick,
  disabled = false,
}) => {
  return (
    <CustomButton
      disabled={disabled}
      type={type}
      color={color}
      margin={margin}
      padding={padding}
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
    color && colorWeight && theme.colors[color][colorWeight]};
  color: ${({ color }) => (color ? '#fff' : 'inherit')};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

const contained = css`
  :hover {
    background-color: #6b2828;
  }
  :active {
    background-color: #70707e;
  }
  :disabled {
    background-color: #eee;
  }
`;

const texted = css`
  padding: 0px 8px;
  background: none;
  :hover {
    color: #fff;
  }
  :active {
    background-color: #6c6c96;
  }
  :disabled {
    background-color: #b48a8a;
  }
`;

const outlined = css`
  border: 1px solid black;
  background: none;

  :hover {
    background-color: #3c6142;
  }
  :active {
    background-color: #6c6c96;
  }
  :disabled {
    background-color: #240909;
    color: #fff;
    opacity: 0.3;
  }
`;

const buttonTypeStyle = {
  contained,
  texted,
  outlined,
};

export { Button };
export default Button;
