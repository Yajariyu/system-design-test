import React from 'react';
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
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export declare const PrimaryButton: ({ disabled, label, onClick, }: ButtonProps) => JSX.Element;
