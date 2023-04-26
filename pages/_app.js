import '@/styles/globals.css';
import { WordsProvider } from '@/context/WordsContext';

export default function App({ Component, pageProps }) {
  return (
    <WordsProvider>
      <Component {...pageProps} />
    </WordsProvider>
  );
}
