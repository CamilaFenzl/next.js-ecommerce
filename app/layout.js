import Navigation from './navigation/navigation';

export default function RootLayout({ children }) {
  return (
    <>
      <Navigation></Navigation>
      <main>{children}</main>
    </>
  );
}
