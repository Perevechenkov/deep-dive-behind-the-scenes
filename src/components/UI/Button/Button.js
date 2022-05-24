import classes from './Button.module.scss';

export default function Button(props) {
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
}
