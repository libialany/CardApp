import React from 'react';
import { button } from './styles';

interface ButtonProps {
  label: string;
  onClick: Function;
  param?: object;
}
const Button = ({ label, onClick, param }: ButtonProps) => {
  return (
    <span onClick={() => onClick(param)} style={button}>
      {label}
    </span>
  );
};

export default Button;
