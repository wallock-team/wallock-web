import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Container, CssBaseline } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
      <CssBaseline />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>;
}

export default MyApp
