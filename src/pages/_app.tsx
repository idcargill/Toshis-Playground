import type { AppProps } from 'next/app';
import '../../styles/global.css';
import NavBar from 'src/Components/NavBar/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
