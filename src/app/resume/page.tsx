import Head from 'next/head'

import CV from './components/CV'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', width: '100vw', backgroundColor: '#0c0c0c' }}>
      <Head>
        <title>Léandre Daumont - Resume</title>
        <meta name="description" content="Léandre Daumont" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CV />
    </div>
  )
}
