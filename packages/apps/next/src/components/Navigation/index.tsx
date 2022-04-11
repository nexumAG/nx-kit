import React from 'react';
import { useRouter } from 'next/router';
import { styled, media } from '@nx-kit/styling';
import { Link } from 'components/Link';

const Nav = styled.nav`
  top: 0;
  padding: 15px;
  border-bottom: 1px solid #d8d8d8;
  align-self: start;

  ${media('md')} {
    padding: 60px;
    border-bottom: none;
    position: sticky;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;

    ul {
      margin-top: 10px;
      margin-left: 20px;

      flex-direction: row;
      flex-wrap: wrap;

      ${media('md')} {
        flex-direction: column;
        flex-wrap: nowrap;
      }
    }

    li a[aria-expanded='false'] ~ ul {
      display: none;
    }
  }
`;

export type Link = {
  href: string;
  title: string;
  children?: Link[];
};

export type NavigationProps = {
  links: Link[];
};

export const Navigation = ({ links }: NavigationProps) => {
  const { asPath } = useRouter();

  const asPathBase = asPath.split('#')[0];

  return (
    <Nav>
      <ul role="menubar">
        {links.map((link) => (
          <li role="none" key={link.href}>
            <Link
              role="menuitem"
              skin="primary"
              href={link.href}
              aria-expanded={
                (link.children?.length ?? 0) > 0 ? asPathBase === link.href : undefined
              }
              styles={{ font: asPath === link.href ? 'trebuchetBold' : 'trebuchetNormal' }}
            >
              {link.title}
            </Link>
            {(link.children?.length ?? 0) > 0 && (
              <ul role="menu">
                {link.children?.map((link) => (
                  <li role="none" key={link.href}>
                    <Link
                      role="menuitem"
                      skin="primary"
                      href={link.href}
                      styles={{ font: asPath === link.href ? 'trebuchetBold' : 'trebuchetNormal' }}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Nav>
  );
};
