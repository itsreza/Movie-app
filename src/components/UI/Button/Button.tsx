import classes from './index.module.scss';

type Props = {
  children: React.ReactElement | string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button onClick={onClick} className={classes.button}>
      {children}
    </button>
  );
}
