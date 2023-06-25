//  import global  css
import '../app/globals.scss';

import { useState } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';

// import layout  components form components folder
import Layout from '../app/layout';
export const getServerSideProps = async () => {};
export default function MyApp({ Component, pageProps }) {
  const [cookies, setCookie] = useCookies(['cart']);
  const [currentCartCookie, setCurrentCartCookie] = useState(
    cookies['cart'] ?? {},
  );

  const removeProduct = (id) => {
    const newCookie = { ...currentCartCookie };
    delete newCookie[id];

    setCookie('cart', newCookie, { path: '/' });
    setCurrentCartCookie(newCookie);
    console.log(id, newCookie, currentCartCookie);
  };
  const changeProduct = (id, quantity) => {
    const newCookie = { ...currentCartCookie };
    newCookie[id] = (newCookie[id] ?? 0) + quantity;

    setCookie('cart', newCookie, { path: '/' });
    setCurrentCartCookie(newCookie);
  };
  return (
    <Layout currentCartCookie={currentCartCookie}>
      <CookiesProvider>
        <Component
          {...pageProps}
          currentCartCookie={currentCartCookie}
          removeProduct={removeProduct}
          changeProduct={changeProduct}
        />
      </CookiesProvider>
    </Layout>
  );
}
