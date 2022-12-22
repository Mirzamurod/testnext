import Head from 'next/head'
import { Layout } from '../components'


import "swiper/css/bundle";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Saidparadent</title>
        <meta name="description" content="Said Paradental clinic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
    </div>
  )
}
