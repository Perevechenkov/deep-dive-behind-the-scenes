import React from 'react';

import classes from './Button.module.scss';

export default React.memo(function Button(props) {
  console.log('btn');
  return (
    <button
      type={props.type || 'button'}
      className={classes.button}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
});
