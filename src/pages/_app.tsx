import type { AppProps } from 'next/app';
import '../styles/global-styles.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
