import NextLink from 'next/link';
import { Link as NxLink, LinkProps as NxLinkProps } from '@nx-kit/link';

export type LinkProps = NxLinkProps & {
  href?: string;
  isActive?: boolean;
};

export const Link = ({ href, children: childrenProp, ...props }: LinkProps) => {
  const isLink = !!href;
  const isExternalLink = href?.startsWith('http');
  if (isLink) {
    if (isExternalLink) {
      return (
        <NxLink {...props}>
          <a href={href} target="_blank" rel="noreferrer">
            {childrenProp}
          </a>
        </NxLink>
      );
    }

    return (
      <NextLink href={href} passHref>
        <NxLink {...props}>
          <a>{childrenProp}</a>
        </NxLink>
      </NextLink>
    );
  }

  return <NxLink {...props}>{childrenProp}</NxLink>;
};
