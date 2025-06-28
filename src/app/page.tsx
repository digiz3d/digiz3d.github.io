'use client'

import { motion, AnimatePresence } from 'motion/react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import me from './images/1626966592655-square.jpg'
import BottomLink from './components/BottomLink'

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="flex min-h-screen v-screen justify-center sm:items-center bg-gray-100 dark:bg-gray-900 p-2">
      <Head>
        <title>Léandre Daumont</title>
        <meta name="description" content="Léandre Daumont" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white rounded-xl overflow-hidden dark:bg-black shadow-md flex rounded-1 flex-col sm:flex-row w-full sm:w-auto">
        <Image
          alt="portrait picture of Léandre"
          src={me}
          className="rounded-full p-4 w-48 mx-auto sm:rounded-none sm:p-0 sm:object-cover"
          priority
        />

        <div className="text-black dark:text-gray-400 sm:flex sm:flex-col sm:justify-start md:max-w-sm">
          <div className="p-4 border-t dark:border-gray-800 sm:border-t-0">
            <h1 className="text-3xl">Léandre Daumont</h1>
            <h2 className="text-2xl">Software Engineer</h2>
          </div>

          <div className="p-4">
            <p>
              Software Engineer at{' '}
              <a className="text-cyan-600" href="https://voggt.com">
                Voggt
              </a>{' '}
              since 2022.
              <br />
              <br />
              Mostly working on the backend, my curiosity leads me to dig into other parts of the
              business.
            </p>
          </div>

          <div className="p-4">
            <button className="text-cyan-600" onClick={() => setOpen((x) => !x)}>
              Previously{' '}
              <motion.span
                role="presentation"
                className="inline-block"
                variants={{
                  open: { rotateZ: '90deg' },
                  closed: { rotateZ: '0deg' },
                }}
                animate={isOpen ? 'open' : 'closed'}>
                &rarr;
              </motion.span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}>
                  <p>
                    <a className="text-cyan-600" href="https://yubo.live">
                      Yubo
                    </a>{' '}
                    2019-2022
                  </p>
                  <p>
                    <a className="text-cyan-600" href="https://allianz.fr">
                      Allianz
                    </a>{' '}
                    2016-2019
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="p-4 mt-auto flex gap-4 flex-wrap">
            <BottomLink href="/resume">CV</BottomLink>
            <BottomLink href="/wallet">Wallet</BottomLink>
            <BottomLink href="https://www.linkedin.com/in/l%C3%A9andre-daumont/">
              LinkedIn
            </BottomLink>
            <BottomLink href="https://github.com/digiz3d/">GitHub</BottomLink>
          </div>
        </div>
      </main>
    </div>
  )
}
