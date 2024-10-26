import { MouseEventHandler } from 'react';
export interface MyFavBorderProps {
    iconColor: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function MyFavBorder(props: MyFavBorderProps): import("react/jsx-runtime").JSX.Element;
export default MyFavBorder;
