'use client';

import { useCookies } from 'react-cookie';
import Navigation from './navigation/navigation';
import { useState } from 'react';

export default function RootLayout({ children, params }) {
  const [cookies, setCookie] = useCookies(['cart']);
  const [currentCartCookie, setCurrentCartCookie] = useState(
    cookies['cart'] ?? {},
  );
  params.currentCartCookie = currentCartCookie;
  params.removeProduct = (id) => {
    const newCookie = { ...currentCartCookie };
    delete newCookie[id];

    setCookie('cart', newCookie, { path: '/' });
    setCurrentCartCookie(newCookie);
    console.log(id, newCookie, currentCartCookie);
  };
  params.changeProduct = (id, quantity) => {
    const newCookie = { ...currentCartCookie };
    newCookie[id] = (newCookie[id] ?? 0) + quantity;

    setCookie('cart', newCookie, { path: '/' });
    setCurrentCartCookie(newCookie);
  };
  return (
    <html lang="en">
      <body>
        <Navigation currentCartCookie={currentCartCookie}></Navigation>
        <main>{children}</main>
      </body>
    </html>
  );
}
