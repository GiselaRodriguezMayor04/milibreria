import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';

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

function MyButton(props: MyButtonProps) {
  const {
    text,
    txtcolor,
    bgcolor,
    bordercolor,
    bordersize,
    size = 'medium', 
    hoverTxtColor,
    hoverBgColor,
    disabled = false, 
    onClick,
  } = props;

  return (
    <Button
      type="button"
      onClick={onClick}
      disabled={disabled}
      size={size}
      variant="outlined"
      sx={{
        color: txtcolor,
        backgroundColor: bgcolor,
        border: `${bordersize} solid ${bordercolor}`,
        ':hover': {
          backgroundColor: hoverBgColor,
          color: hoverTxtColor,
        },
      }}
    >
      {text}
    </Button>
  );
}

export default MyButton;
