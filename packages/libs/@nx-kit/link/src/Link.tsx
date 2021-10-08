import React, { useRef } from 'react';
import { useLink } from '@react-aria/link';
import { useHover } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';
import {
  styled,
  getSpacing,
  getFlexItem,
  getPosition,
  getColor,
  getLayout,
  getFont,
  getTypo,
  compose,
} from '@nx-kit/styling';
import { useSlotProps } from '@nx-kit/slot';
import { LinkProps, LinkStyledProps } from './Link.types';

const LinkStyled = styled.a<LinkStyledProps>`
  ${({ theme }) => theme?.component?.link?.global};
  ${({ theme, skin }) => skin && theme?.component?.link?.skin?.[skin]};
  ${compose(getSpacing, getFlexItem, getPosition, getColor, getLayout, getTypo)}
  ${getFont};
`;

export const Link = (linkProps: LinkProps) => {
  // eslint-disable-next-line react/destructuring-assignment
  const props = useSlotProps<LinkProps>(linkProps.slot ?? 'link', linkProps);
  const { children, onPress, ...rest } = props;
  const ref = useRef(null);

  const childrenType = typeof children;
  const elementType = childrenType === 'string' ? 'span' : React.Children.only<any>(children).type;

  if (typeof elementType !== 'string') {
    throw new Error('The direct child of a Link only can be a string or HTML element');
  }

  const { children: linkText, ...childProps } =
    childrenType === 'string' ? { children } : React.Children.only<any>(children).props;

  const { linkProps: useLinkProps } = useLink(
    {
      ...props,
      elementType,
    },
    ref
  );
  const { hoverProps, isHovered } = useHover({});
  const { focusProps, isFocusVisible } = useFocusRing({});

  return (
    <LinkStyled
      ref={ref}
      as={elementType}
      isFocused={isFocusVisible}
      isHovered={isHovered}
      {...mergeProps(useLinkProps, hoverProps, focusProps, childProps, rest)}
    >
      {linkText}
    </LinkStyled>
  );
};
