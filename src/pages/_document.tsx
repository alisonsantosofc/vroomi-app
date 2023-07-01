import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>

      <body className="bg-gray-900 text-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
