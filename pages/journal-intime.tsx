'use strict'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import _ from 'lodash'
import styles from '../styles/components.module.css'

import Layout from '../components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>YouClone</title>
        <meta name="description" content="Profitez des vidéos et de la musique que vous aimez, mettez en ligne des contenus originaux, et partagez-les avec vos amis, vos proches et le monde entier." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout menu={true}>
        <div className={styles.troll}>
          <h1>BRAVOS !!</h1>
          <img src={"https://gifsdomi.files.wordpress.com/2014/05/gif-animc3a9-drc3b4le-194.gif"} />
          <h2>tu as gagné le droit de me recruter....</h2>
          <p>Je recherche un stage à partir du mois d'Avril pour une durée de 3 à 5 mois.</p>
          <a target="_blank" href="https://www.linkedin.com/in/hugo-code/">Mon linkedin</a>
        </div>
      </Layout>
    </>
  )
}