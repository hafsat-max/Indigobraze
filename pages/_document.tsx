import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.cdnfonts.com/css/switzer" rel="stylesheet" />
      </Head>
      <body>
        <Analytics/>
        <Main />
        <NextScript />
      </body>
    </Html>

  );
}
