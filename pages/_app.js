//  import global  css
import '../app/globals.scss';
// import layout  components form components folder
import Layout from '../app/layout';
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
