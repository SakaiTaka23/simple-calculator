import { AppProps } from 'next/app';
import Nav from '../components/Nav';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
};

export default App;
