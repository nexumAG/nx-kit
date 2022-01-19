import { Theme, ThemeProvider } from '@nx-kit/styling';
import React, { useState } from 'react';
import { TextField } from '../../textfield/src';
import { Meter } from '../src';

export default {
  title: '@nx-kit/meter',
  component: Meter,
};

export const Default = () => <Meter minValue={0} maxValue={100} value={70} />;
export const Rectangular  = () => <Meter minValue={0} maxValue={100} value={70} skin="rectangular" />;

export const Controlled = () => {
  const [value, setValue] = useState(70);
  return (
    <>
      <Meter label={<strong>LABEL</strong>} minValue={0} maxValue={100} value={value} />
      <TextField inputMode="numeric" onChange={(e: any) => setValue(Number(e.target.value))} />
    </>
  );
};
export const CustomColors = () => {
  const [value, setValue] = useState(1);

  const colors = {
    absolute: true,
    stops: [
      {
        value: 1,
        color: 'red',
      },
      {
        value: 2,
        color: 'orange',
      },
      {
        value: 3,
        color: 'yellow',
      },
      {
        value: 4,
        color: 'green',
      },
      {
        value: 5,
        color: 'blue',
      },
    ],
  };
  return (
    <>
      <Meter label="Step" minValue={0} maxValue={5} value={value} showValueLabel valueLabel={`${value} of 5`} colors={colors} />
      <TextField inputMode="numeric" onChange={(e: any) => setValue(Math.floor(Number(e.target.value)))} />
    </>
  );
};

export const RightToLeft = () => (
  <div dir="rtl">
    <Meter label="Right to left" minValue={0} maxValue={100} value={66} showValueLabel />
  </div>
);

export const CustomValueLabel = () => (
  <Meter label="Left to right" minValue={0} maxValue={100} value={66} showValueLabel valueLabel={<strong>Step 4 / 5</strong>} />
);

export const ExternalLabel = () => (
  <>
    <div id="meterLabel">Label for meter</div>
    <Meter labeledBy="meterLabel" minValue={0} maxValue={100} value={66} showValueLabel />
  </>
)
