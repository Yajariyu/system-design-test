import React from 'react';
import styled from 'styled-components';
import {primary} from "../utils"

export interface ButtonProps {
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
   onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

const AsistensiButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    font-family: 'Poppins', sans-serif;   
    font-size: 16px;
    
    position: absolute;
    width: 343px;
    height: 60px;

    background-color: ${ props => (props.disabled ? 'rgba(255, 34, 82, 0.5)': 'rgba(255, 34, 82, 1)')};
    color: ${'rgba(255, 255, 255, 1)'};
    border-radius: 24px;
    border: none;

`;


/**
 * Style action buttons.
 *
 * Button renders as a button element by default.
 *
 * This component supports rest props additonal to those shows in props table.
 */
export const PrimaryButton = ({
    disabled = false,
    label = "call to action",
    onClick,
    }: ButtonProps) => {


    return <AsistensiButton
            disabled={disabled}
            onClick={onClick}
            >
                {label}
            </AsistensiButton>
    
}

