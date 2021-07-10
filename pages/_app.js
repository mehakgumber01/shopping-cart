import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import '../styles/nprogress.css';

import styles from '../styles/Document.module.css'

 import '../styles/Header.module.css';
import '../styles/globals.css';
// import '../styles/Layout.scss';
// import '../styles/model.scss';
// import '../styles/header.scss';


Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page className="container">
      <Component {...pageProps} />
    </Page>
  );
}