import { MouseEventHandler } from 'react';
export interface MyFavouriteProps {
    iconColor: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const MyFavorite: React.FC<MyFavouriteProps>;
export default MyFavorite;
