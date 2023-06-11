import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  );
}
const [cookies, setCookie, removeCookie] = useCookies(['user']);
const Home: NextPage = () => {
  useEffect(() => {
    console.log('Cookies: ', cookies);
  }, [cookies]);
  return <div>...</div>;
};

export default MyApp;
