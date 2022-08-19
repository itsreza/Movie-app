import SelectOption from './_components/SelectOption';
import classes from './index.module.scss';
import Label from '../Label';
type Props = {
  options: string[] | number[];
  label?: string | number;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  name: string;
  defaultValue?: string | number;
};

export default function Select({ options, label, onBlur, name, defaultValue }: Props) {
  const renderOptions = options?.map((option) => (
    <SelectOption key={option} value={option}>
      {option}
    </SelectOption>
  ));

  return (
    <div>
      {label && <Label label={label} />}
      <select
        defaultValue={defaultValue ?? 'none-selected'}
        name={name}
        onBlur={onBlur}
        className={classes.select}>
        <option value="none-selected" disabled selected>
          select option
        </option>
        {renderOptions}
      </select>
    </div>
  );
}
