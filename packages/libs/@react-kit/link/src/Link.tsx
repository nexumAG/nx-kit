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
} from '@react-kit/styling';
import { LinkProps, LinkStyledProps } from './Link.types';

const LinkStyled = styled.a<LinkStyledProps>`
  ${({ theme, skin }) => skin && theme.component.link.skin[skin]};
  ${getSpacing()}
  ${getFlexItem()}
  ${getPosition()}
  ${getColor()}
  ${getLayout()}
  ${getFont()}
  ${getTypo()}
`;

export const Link = (props: LinkProps) => {
  const { className, children, skin, styles } = props;
  const ref = useRef(null);

  const elementType = typeof children === 'string' ? 'span' : 'a';
  const { children: linkText, ...childProps } =
    typeof children === 'string' ? { children } : React.Children.only<any>(children).props;

  const { linkProps } = useLink(
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
      className={className}
      as={elementType}
      skin={skin}
      styles={styles}
      {...mergeProps(linkProps, hoverProps)}
      {...focusProps}
      isFocus={isFocusVisible}
      isHovered={isHovered}
      {...childProps}
    >
      {linkText}
    </LinkStyled>
  );
};
