import classes from './index.module.scss';

type Props = {
  label?: string | number;
};

export default function Badge({ label }: Props) {
  return <span className={classes.root}>{label}</span>;
}
