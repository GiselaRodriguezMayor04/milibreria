import React from 'react';
import MyFavorite, { MyFavoriteProps } from '../myfavorite';

function Example(props: MyFavoriteProps) {
  return (
    <MyFavorite
      iconColor={props.iconColor}
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
}

export default Example; 