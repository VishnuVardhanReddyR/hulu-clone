import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>HuluPlus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>HuluPlus</h1>
        {/* Header */}
      <Header />
        
        {/* Nav */}

        {/* Results */}
    </div>
  )
}
