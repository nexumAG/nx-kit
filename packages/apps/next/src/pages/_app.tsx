import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { resetCSS, createGlobalStyle, ThemeProvider, media } from '@nx-kit/styling';
import { theme } from '@nx-kit/theme-default';
import { SSRProvider } from '@nx-kit/ssr';
import { BreakpointProvider } from '@nx-kit/breakpoint';
import { OverlayProvider } from '@nx-kit/overlay';
import { Heading } from '@nx-kit/heading';
import { Text } from '@nx-kit/text';
import { Divider } from '@nx-kit/divider';
import { Link } from 'components/Link';

export const BasicCSS = createGlobalStyle`
  ${resetCSS}
  ${({ theme }) => theme?.global?.styles};

  #__next {

    min-height: 100vh;

    & > header {
      grid-area: header;
      border-bottom: 1px solid #d8d8d8;
      padding: 15px;

      ${media('md')} {
        padding: 30px 60px;
      }
    }

    & > nav {
      grid-area: nav;
      padding: 15px;
      border-right: none;
      border-bottom: 1px solid #d8d8d8;

      ${media('md')} {
        padding: 60px;
        border-right: 1px solid #d8d8d8;
        border-bottom: none;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }

    & > main {
      grid-area: main;
      padding: 15px;

      ${media('md')} {
        padding: 60px;
      }
    }

    & > footer {
      grid-area: footer;
      border-top: 1px solid #d8d8d8;
      padding: 15px;

      ${media('md')} {
        padding: 15px 60px;
      }
    }

    display: block;

    ${media('md')} {
      display: grid;
      grid-template-columns: max-content auto;
      grid-template-rows: min-content auto min-content;
      grid-template-areas:
      "header header"
      "nav main"
      "footer footer";
    }

  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  table, th, td {
    border: 1px solid #d8d8d8;
    text-align: left;
  }

  th {
    font-weight: bold;
  }

  th, td {
    padding: 10px;
  }



`;

const components = {
  h1: (props: any) => <Heading elementType="h1" styles={{ marginBottom: '30px' }} {...props} />,
  h2: (props: any) => (
    <Heading elementType="h2" styles={{ marginBottom: '0', marginTop: '60px' }} {...props} />
  ),
  h3: (props: any) => <Heading elementType="h3" styles={{ marginBottom: '30px' }} {...props} />,
  h4: (props: any) => <Heading elementType="h4" styles={{ marginBottom: '30px' }} {...props} />,
  h5: (props: any) => <Heading elementType="h5" styles={{ marginBottom: '30px' }} {...props} />,
  h6: (props: any) => <Heading elementType="h6" styles={{ marginBottom: '30px' }} {...props} />,
  p: (props: any) => <Text elementType="p" styles={{ marginBottom: '15px' }} {...props} />,
  pre: (props: any) => <Text elementType="pre" {...props} />,
  code: (props: any) => <Text elementType="code" {...props} />,
  a: (props: any) => <Link skin="primary" {...props} />,
  hr: (props: any) => <Divider skin={100} styles={{ marginBottom: '30px' }} {...props} />,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css" />
      </Head>

      <SSRProvider>
        <ThemeProvider theme={theme}>
          <BreakpointProvider>
            <BasicCSS />
            <header>@nx-kit Documentation</header>
            <nav>
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
                </li>
                <li>
                  <Link skin="primary" href="/components">
                    Components
                  </Link>
                </li>
              </ul>
            </nav>
            <main>
              <OverlayProvider>
                <MDXProvider components={components}>
                  <Component {...pageProps} />
                </MDXProvider>
              </OverlayProvider>
            </main>
            <footer>Made by nexum</footer>
          </BreakpointProvider>
        </ThemeProvider>
      </SSRProvider>
    </>
  );
}

export default MyApp;
