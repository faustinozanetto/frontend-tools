import '../styles/globals.css';

import type { AppProps } from 'next/app';

const FrontendToolsApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default FrontendToolsApp;
