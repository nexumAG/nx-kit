import type { AppProps } from 'next/app';
// import styled, { useTheme } from 'styled-components';
import { media, useBreakpointsSorted, useTheme, styled, ThemeProvider } from '@nx-kit/styling';
import { Flex } from '@nx-kit/flex';
import { Heading } from '@nx-kit/heading';
import { theme } from '../theme';

const Div = styled.div<{ test: string }>`
  background-color: ${({ theme }) => theme.global.color.white};
  font-size: ${({ test }) => test};

  ${media('lg')} {
    background-color: ${({ theme }) => theme.global.color.black};
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const breakpointsSorted = useBreakpointsSorted();
  const themeValues = useTheme();

  console.log(breakpointsSorted);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Div test="32px">gdlfgdlfk</Div>
      <Flex styles={{ marginX: { xs: '5px', lg: '20px' }, margin: '5' }} flexWrap={{ xs: 'wrap' }}>
        dfg
      </Flex>
      <Heading skin={400}>Test Heading</Heading>
    </ThemeProvider>
  );
}

export default MyApp;
