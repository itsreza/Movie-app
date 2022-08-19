import classes from './index.module.scss';

type Props = {
  className?: string;
};

export default function Skeleton({ className }: Props) {
  return <div className={`${classes.skeleton} ${className}`} />;
}
