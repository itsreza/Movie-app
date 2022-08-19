import React from 'react';

type Props = {
  value: string | number;
  children: string | React.ReactNode;
};

export default function SelectOption({ children, value }: Props) {
  return <option value={value}>{children}</option>;
}
