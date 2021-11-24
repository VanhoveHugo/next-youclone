'use strict'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import _ from 'lodash'
import styles from '../styles/components.module.css'

import Layout from '../components/layout'
import Thumbnail from '../components/thumbnail'

import type { videosList, inc } from '../utils/types'

export default function Home({ videos }: videosList) {
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
          <a target="_blank" href="https://www.linkedin.com/in/hugo-code/">Mon linkedin</a>
        </div>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost/api/youtube`)
  // https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAcKJT4lmdaAa_8h7VXB6vetRg0kpHm5kQ&maxResults=24&type=video&regionCode=FR&&relevanceLanguage=FR
  let data = await res.json()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  let videos = data.items
  return {
    props: { videos },
  }
}