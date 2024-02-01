import type { AppProps } from "next/app";
import { Inter } from 'next/font/google'
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
