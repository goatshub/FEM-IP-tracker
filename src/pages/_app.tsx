import IpProvider from "@/context/IpContext";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Frontend Mentor | IP Address Tracker</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <IpProvider>
        <Component {...pageProps} />
      </IpProvider>
    </>
  );
}
