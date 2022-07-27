/// <reference types="react" />
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
    onClick?: () => void;
}
export declare const Button: ({ label, disabled, ...props }: ButtonProps) => JSX.Element;
