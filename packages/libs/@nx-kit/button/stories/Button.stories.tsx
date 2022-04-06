import React, { useState } from 'react';
import { styled } from '@nx-kit/styling';
import { Button, ButtonStyledProps } from '../src';

export default {
  title: '@nx-kit/button',
  component: Button,
};

// export const NoSkin = () => <Button onPress={(e: any) => console.log(e)}>Press me</Button>;

export const Primary = () => (
  <Button onPress={(e: any) => console.log(e)} skin="primary">
    Press me
  </Button>
);

export const PrimaryAutoFocus = () => (
  <Button onPress={(e: any) => console.log(e)} skin="primary" autoFocus>
    Press me
  </Button>
);

export const PrimaryDisabled = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <>
      <p>
        Is disabled?{' '}
        <input type="checkbox" checked={isDisabled} onChange={() => setIsDisabled(!isDisabled)} />
      </p>
      <Button onPress={(e: any) => console.log(e)} skin="primary" isDisabled={isDisabled}>
        Press me
      </Button>
    </>
  );
};

export const PrimaryLink = () => (
  <Button href="#" elementType="a" skin="primary">
    Press me
  </Button>
);

export const PrimaryStyled = () => (
  <Button
    onPress={(e: any) => console.log(e)}
    skin="primary"
    elementType="div"
    styles={{ padding: '40px' }}
    // If you want to use this syntax without typescript errors you have to handle it in the final project
    // see: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245
    // @ts-ignore
    css={`
      &&& {
        border: 4px solid #b3c5ff;
      }
    `}
  >
    Press me
  </Button>
);

export const Secondary = () => (
  <Button onPress={(e: any) => console.log(e)} skin="secondary">
    Press me
  </Button>
);

export const SecondaryDisabled = () => (
  <Button onPress={(e: any) => console.log(e)} skin="secondary" isDisabled>
    Press me
  </Button>
);

const ButtonStyled = styled(Button)<ButtonStyledProps>`
  border: 1px solid black;
  padding: 20px;

  ${({ isHovered }) => isHovered && `background: red;`}
`;

export const ButtonStyledExtended = () => {
  return <ButtonStyled forwardedAs={ButtonStyled}>Press me</ButtonStyled>;
};

const ButtonWrapper = (props: any) => {
  // console.log({ props });

  return <Button {...props}>Press me</Button>;
};

const ButtonWrapperStyled = styled(ButtonWrapper)<ButtonStyledProps>`
  border: 1px solid black;
  padding: 20px;

  ${({ isHovered }) => isHovered && `background: red;`}
`;

export const ButtonWrapperExtended = () => (
  <ButtonWrapperStyled forwardedAs={ButtonWrapperStyled} />
);
