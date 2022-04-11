import React from 'react';
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
    }
  }
`;

export const Navigation = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link skin="primary" href="/">
            Getting started
          </Link>
        </li>
        <li>
          <Link skin="primary" href="/styling">
            Styling
          </Link>
          <ul>
            <li>
              <Link skin="primary" href="/styling#installation">
                Installation
              </Link>
            </li>
            <li>
              <Link skin="primary" href="/styling#theme">
                Theme
              </Link>
            </li>
            <li>
              <Link skin="primary" href="/styling#design-system">
                Design System
              </Link>
            </li>
            <li>
              <Link skin="primary" href="/styling#media-helper">
                media Helper
              </Link>
            </li>
            <li>
              <Link skin="primary" href="/styling#sorted-breakpoints">
                Sorted breakpoints
              </Link>
            </li>
            <li>
              <Link skin="primary" href="/styling#reset-css">
                reset CSS
              </Link>
            </li>
            <li>
              <Link skin="primary" href="/styling#typescript">
                TypeScript
              </Link>
            </li>
          </ul>
        </li>
        {/*<li>*/}
        {/*  <Link skin="primary" href="/components">*/}
        {/*    Components*/}
        {/*  </Link>*/}
        {/*</li>*/}
      </ul>
    </Nav>
  );
};
