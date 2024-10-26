import { MouseEventHandler } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export interface MyFavBorderProps {
  iconColor: string; 
  disabled?: boolean; 
  onClick?: MouseEventHandler<HTMLButtonElement>; 
}

function MyFavBorder(props: MyFavBorderProps) {
  const { iconColor, disabled, onClick } = props;

  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      sx={{ color: iconColor }}
    >
      <FavoriteBorderIcon />
    </IconButton>
  );
}

export default MyFavBorder;
