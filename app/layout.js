import { useCookies } from 'react-cookie';
import Navigation from './navigation/navigation';
import { useState } from 'react';

export default function RootLayout({ children, currentCartCookie }) {
  return (
    <>
      <Navigation currentCartCookie={currentCartCookie}></Navigation>
      <main>{children}</main>
    </>
  );
}
