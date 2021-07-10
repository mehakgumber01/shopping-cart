import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets, StylesProvider } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    console.log(styleTags);
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en-CA">
        <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

