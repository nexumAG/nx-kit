import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../../styling';
import { theme } from '../../theme-default';
import { Meter } from '../src';

describe('Meter component', () => {
  it('renders default', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <>
          <Meter label="meter" minValue={0} maxValue={100} value={0} />
          <Meter label="meter" minValue={0} maxValue={100} value={10} />
          <Meter label="meter" minValue={0} maxValue={100} value={49} />
          <Meter label="meter" minValue={0} maxValue={100} value={56} />
          <Meter label="meter" minValue={0} maxValue={100} value={70} />
          <Meter label="meter" minValue={0} maxValue={100} value={100} />
        </>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders custom colors', () => {
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
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Meter label="Step" minValue={0} maxValue={5} value={2} showValueLabel colors={colors} />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders custom value label', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Meter
          label="Left to right"
          minValue={0}
          maxValue={100}
          value={66}
          showValueLabel
          valueLabel={<strong>Step 4 / 5</strong>}
        />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders external value label', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <>
          <div id="meterLabel">Label for meter</div>
          <Meter labeledBy="meterLabel" minValue={0} maxValue={100} value={66} showValueLabel />
        </>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
