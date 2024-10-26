import { MouseEventHandler } from 'react';
export interface MyButtonProps {
    text: string;
    txtcolor: string;
    bgcolor: string;
    bordercolor: string;
    bordersize: string;
    size?: 'small' | 'medium' | 'large';
    hoverTxtColor: string;
    hoverBgColor: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const MyButton: React.FC<MyButtonProps>;
export default MyButton;
