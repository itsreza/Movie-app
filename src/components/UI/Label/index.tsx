import classes from './index.module.scss';

type Props = { label: string | number };

export default function Label({ label }: Props) {
  return <label className={classes.label}>{label}</label>;
}
