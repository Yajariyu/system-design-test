import React from "react";
import styled from "styled-components";
import {primary} from "../utils"
interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
    /**
   * Disabled button
   */
  disabled: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const ButtonAtom = styled.button`
    background-color: ${props=> {return(!props.disabled? primary[100]: primary[300])}};
    min-width: 343px ;
    height: 60px;
    padding: 18px 48px;
    font-size:16px;
    font-weight : bold ;
    border-radius: 24px;
    border:none;
    color: white;
`;

export const Button = ({
  label,
  disabled = true,
  ...props
}:ButtonProps) => <ButtonAtom 
    disabled = {disabled}
    {...props} >
    {label}
</ButtonAtom>;
// export const Button = ({
//   primary = false,
//   size = 'medium',
//   backgroundColor,
//   label,
//   ...props
// }: ButtonProps) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       style={{ backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };
