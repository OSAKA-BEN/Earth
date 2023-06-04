import '@/styles/globals.css'
import '../styles/temperature.css';
import '../styles/map.css';
import '../styles/alien-font.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
