import React from 'react';
import generateYearsArrayUnitNow from '../../../shared/constants/years';
import { getSearchParams } from '../../../shared/utilities/queryParams';
import Button from '../../UI/Button/Button';
import NumberInput from '../../UI/Input/Input';
import Select from '../../UI/Select';
import classes from './index.module.scss';

type Props = {
  onFilter: React.MouseEventHandler<HTMLButtonElement>;
  onBlurTextField:
    | React.FocusEventHandler<HTMLInputElement>
    | React.FocusEventHandler<HTMLSelectElement>
    | any;
};

export default function Filter({ onFilter, onBlurTextField }: Props) {
  const { year } = getSearchParams();

  return (
    <div className={classes.filter_container}>
      <div className={classes.logo_section}>
        <img
          src="https://cdn.jabama.com/original/jabama-images/0/ef4d1238-76d8-4500-9c71-625d21859abb.svg"
          alt="jabama"
        />
      </div>
      <div className={classes.a}>
        <div className={classes.filter_fields_section}>
          <Select
            defaultValue={year}
            name="year"
            onBlur={onBlurTextField}
            options={generateYearsArrayUnitNow(1900)}
            label="Year"
          />
          <NumberInput
            defaultValue={getSearchParams()?.['vote_average.gte']}
            onBlur={onBlurTextField}
            label="Minimum Vote"
            name="vote_average.gte"
            type="number"
          />
          <NumberInput
            onBlur={onBlurTextField}
            defaultValue={getSearchParams()?.['vote_average.lte']}
            label="Maximum Vote"
            name="vote_average.lte"
            type="number"
          />
        </div>
        <div>
          <Button onClick={onFilter}>Filter</Button>
        </div>
      </div>
    </div>
  );
}
