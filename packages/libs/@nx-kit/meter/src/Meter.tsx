import { useMeter } from '@react-aria/meter';
import React from 'react';
import {
  compose,
  getColor,
  getFlexItem,
  getFont,
  getLayout,
  getPosition,
  getSpacing,
  getTypo,
  styled,
} from '@nx-kit/styling';
import { MeterColors, MeterProps, MeterStyledProps } from './Meter.types';

const MeterStyled = styled.div<MeterStyledProps>`
  ${({ theme }) => theme?.component?.meter?.global}
  ${({ theme, skin }) => skin && theme?.component?.meter?.skin?.[skin]};
  ${compose(getSpacing, getFlexItem, getPosition, getColor, getLayout, getTypo)}
  ${getFont};
`;

export const defaultColors: MeterColors = {
  stops: [
    {
      value: 0,
      color: '#E60032',
    },
    {
      value: 0.5,
      color: '#F8C200',
    },
    {
      value: 0.7,
      color: '#42BF00',
    },
  ],
};

export const Meter = ({
  className,
  value,
  labeledBy,
  describedBy,
  colors = defaultColors,
  skin,
  styles,
  ...props
}: MeterProps) => {
  const clampedValue = Math.max(Math.min(value, props.maxValue), props.minValue);
  const { meterProps, labelProps } = useMeter({
    ...props,
    value: clampedValue,
    'aria-labelledby': labeledBy,
    'aria-describedby': describedBy,
  });

  const { maxValue, minValue, valueLabel, showValueLabel, label } = props;

  const currentProgress = (clampedValue - minValue) / (maxValue - minValue);

  const colorReference = colors.absolute ? clampedValue : currentProgress;
  const sortedColors = colors.stops.sort((a, b) => b.value - a.value);
  const progressColor = sortedColors.find(({ value }) => colorReference >= value)?.color;

  return (
    <MeterStyled skin={skin} styles={styles} className={className} {...meterProps}>
      {label && (
        <span className="label" {...labelProps}>
          {label}
        </span>
      )}
      <div className="bar">
        <div
          className="value"
          style={{ transform: `scaleX(${currentProgress})`, backgroundColor: progressColor }}
        />
      </div>
      {showValueLabel && (
        <span className="valueLabel">{valueLabel ?? meterProps['aria-valuetext']}</span>
      )}
    </MeterStyled>
  );
};
