import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import square from '../public/1626966592655-square.jpeg'

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="flex min-h-screen v-screen justify-center items-center bg-gray-100 dark:bg-gray-900 p-2">
      <Head>
        <title>Léandre Daumont</title>
        <meta name="description" content="Léandre Daumont" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white rounded-xl overflow-hidden dark:bg-black shadow-md flex rounded-1 flex-col sm:flex-row w-full sm:w-auto">
        <Image
          alt="portrait picture of Léandre"
          src={square}
          className="rounded-full p-4 w-48 mx-auto sm:rounded-none sm:p-0 sm:object-cover"
          priority
        />

        <div className="text-black dark:text-gray-400 sm:flex sm:flex-col sm:justify-start">
          <div className="p-4 border-t dark:border-gray-800 sm:border-t-0">
            <h1 className="text-3xl">Léandre Daumont</h1>
            <h2 className="text-2xl">Software Engineer</h2>
          </div>

          <div className="p-4">
            <p>
              Currently Backend Engineer at{' '}
              <a className="text-cyan-600" href="https://voggt.com/">
                Voggt
              </a>
            </p>
          </div>

          <div className="p-4">
            <a className="text-cyan-600" href="#" onClick={() => setOpen((x) => !x)}>
              Previously {isOpen ? <>&darr;</> : <>&rarr;</>}
            </a>
            <AnimatePresence>
              {isOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <p>
                    Fullstack Engineer at{' '}
                    <a className="text-cyan-600" href="https://yubo.live">
                      Yubo
                    </a>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="p-4 mt-auto">
            <Link className="px-2 pl-0" href="/resume">
              CV
            </Link>
            <a href="https://github.com/digiz3d" className="px-2">
              Github
            </a>
            <a href="https://www.linkedin.com/in/l%C3%A9andre-daumont/" className="px-2 pr-0">
              LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
