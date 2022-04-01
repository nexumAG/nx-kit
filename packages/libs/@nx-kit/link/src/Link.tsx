import React, { useCallback, useRef, forwardRef } from 'react';
import { useLink } from '@react-aria/link';
import { useHover } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';
import {
  styled,
  getSpacing,
  getFlexContainer,
  getFlexItem,
  getPosition,
  getColor,
  getLayout,
  getFont,
  getTypo,
  compose,
} from '@nx-kit/styling';
import { useSlotProps } from '@nx-kit/slot';
import { mergeRefs } from '@nx-kit/utils';
import { LinkProps, LinkStyledProps } from './Link.types';

const LinkStyled = styled.a<LinkStyledProps>`
  ${({ theme }) => theme?.component?.link?.global};
  ${({ theme, skin }) => skin && theme?.component?.link?.skin?.[skin]};
  ${compose(getSpacing, getFlexContainer, getFlexItem, getPosition, getColor, getLayout, getTypo)}
  ${getFont};
`;

const Link = ({ slot, ...linkProps }: LinkProps, ref?: React.Ref<HTMLElement | null>) => {
  // eslint-disable-next-line react/destructuring-assignment
  const props = useSlotProps<LinkProps>(slot ?? 'link', linkProps);
  const { children, onPress, ...rest } = props;
  const localRef = useRef(null);

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
    localRef
  );
  const { hoverProps, isHovered } = useHover({});
  const { focusProps, isFocusVisible } = useFocusRing({});

  const mergedRefs = useCallback(mergeRefs<HTMLElement | null>(ref, localRef), [ref]);

  const classes = props.className ? props.className.split(' ') : [];
  if (isFocusVisible) {
    classes.push('isFocused');
  }
  if (isHovered) {
    classes.push('isHovered');
  }
  return (
    <LinkStyled
      ref={mergedRefs}
      as={elementType}
      isFocused={isFocusVisible}
      isHovered={isHovered}
      className={classes.join(' ')}
      {...mergeProps(useLinkProps, hoverProps, focusProps, childProps, rest)}
    >
      {linkText}
    </LinkStyled>
  );
};

const LinkWithRef = forwardRef(Link);
export { LinkWithRef as Link };
