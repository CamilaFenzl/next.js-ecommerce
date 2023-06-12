//  import global  css
import '../app/globals.scss';

import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

// import layout  components form components folder
import Layout from '../app/layout';
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </Layout>
  );
}
