import Head from 'next/head'

import RootCanvas from './components/RootCanvas'

export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: '#eee' }}>
      <Head>
        <title>Léandre Daumont - Portfolio</title>
        <meta name="description" content="Léandre Daumont" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootCanvas />
    </div>
  )
}
