import { useRef } from 'react';
import Label from '../Label';
import classes from './index.module.scss';
type Props = {
  type?: string;
  hasIndicator?: boolean;
  name: string;
  label?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  defaultValue?: string | number;
};

export default function NumberInput({
  type = 'number',
  hasIndicator = true,
  name,
  label,
  defaultValue,
  onBlur
}: Props) {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  const onChangeIndicator = (type: string) => {
    const {
      current: { value }
    } = ref;

    const increase = String(Number(value) + 1);
    const decrease = String(Number(value) - 1);
    ref.current.value = type === 'increase' ? increase : decrease;
    ref.current.focus();
  };

  return (
    <div className={classes.root}>
      {label && <Label label={label} />}
      {hasIndicator && (
        <button className={classes.button} onClick={() => onChangeIndicator('decrease')}>
          &#8722;
        </button>
      )}
      <input
        defaultValue={defaultValue}
        onBlur={onBlur}
        name={name}
        className={classes.input}
        ref={ref}
        type={type}
      />
      {hasIndicator && (
        <button className={classes.button} onClick={() => onChangeIndicator('increase')}>
          &#43;
        </button>
      )}
    </div>
  );
}
