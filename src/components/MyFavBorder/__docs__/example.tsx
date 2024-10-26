import React from 'react';
import MyFavBorder, { MyFavBorderProps } from '../myfavborder';

function Example(props: MyFavBorderProps) {
  return (
    <MyFavBorder
      iconColor={props.iconColor}
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
}

export default Example;
