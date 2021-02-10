import Head from "next/head";
import Layout from '../src/layout/Layout';
import Main from '../src/layout/Main';


export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Built on NEXT.JS</title>
      </Head>
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}