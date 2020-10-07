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
  const props = useSlotProps<LinkProps>(linkProps.slot ?? 'link', linkProps);
  const { children, ...rest } = props;
  const ref = useRef(null);

  const elementType = typeof children === 'string' ? 'span' : 'a';
  const { children: linkText, ...childProps } =
    typeof children === 'string' ? { children } : React.Children.only<any>(children).props;

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
      {...mergeProps(useLinkProps, hoverProps)}
      {...focusProps}
      isFocused={isFocusVisible}
      isHovered={isHovered}
      {...childProps}
      {...rest}
    >
      {linkText}
    </LinkStyled>
  );
};
