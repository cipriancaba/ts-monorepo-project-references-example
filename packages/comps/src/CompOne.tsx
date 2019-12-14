import React from 'react';
import { sum } from '@mono/shared';

export enum MyEnum {
  A,
  B,
  C,
}

export const CompOne: React.FC = () => {
  return <div>CompOne: 1+2={sum(1, 2)}</div>;
};
