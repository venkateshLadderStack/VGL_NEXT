import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="profile" href="https://gmpg.org/xfn/11" />
          <meta name="ir-site-verification-token" value="-1088507391" />
          <meta name="robots" content="index, follow" />
          <meta
            name="googlebot"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="bingbot"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="google-site-verification"
            content="4iAPj_lH2EgCBAtDrTgWQL_R2kboAEpMXqzjG-lnCRQ"
          />
          <meta
            name="facebook-domain-verification"
            content="se678sbqe8v1edtyo7wzggrwl9xsr9"
          />
          <meta
            property="article:publisher"
            content="http://www.facebook.com/verygoodlight"
          />
          <link rel="icon" href="/assets/logo.webp" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/logo.webp"
          />
          <link rel="apple-touch-icon" href="/assets/logo.webp"></link>

          {/* fonts and styles */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
