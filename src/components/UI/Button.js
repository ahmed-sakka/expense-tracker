import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={`${classes.button} 
      ${props.size ? classes[props.size] : classes.lg} 
      ${props.variant ? classes[props.variant] : classes.primary}`}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;