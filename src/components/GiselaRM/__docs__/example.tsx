import React from 'react';
import GiselaRM, { GiselaRMProps } from '../GiselaRM';

function Example(props: GiselaRMProps) {
  return (
    <GiselaRM
      title={props.title}
      description={props.description}
      avatar={props.avatar}
    />
  );
}

export default Example;
