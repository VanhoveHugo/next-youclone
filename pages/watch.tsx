'use strict'
import * as React from 'react'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import _ from 'lodash'

import Layout from '../components/layout'
import Player from '../components/player'
import { video } from '../utils/types'

export default function Watch({ video }: video) {
    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement);
    };
    var map: any= {
        '&#39;' : "'",
        '&quot;' : '"'
    };
    const replaceAll = (str: string) =>{
        for(const key in map){
            str = str.replaceAll(key, map[key]);
        }
        return str;
    }
    return (
        <>
        <Head>
            <title>{replaceAll(video.snippet.title)}</title>
            <meta name="description" content="Profitez des vidéos et de la musique que vous aimez, mettez en ligne des contenus originaux, et partagez-les avec vos amis, vos proches et le monde entier." />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Layout>
            <Player data={video} />
        </Layout>
        </>
    )
}

type Params = {
    params?: any
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`http://localhost/api/youtube`)
    let data = await res.json()
  
    if (!data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    const videos = data.items
    let video
    videos.forEach((v: any) => {
        if(v.id.videoId === context.query.v)
            return video = v
    })
    return {
        props: { video },
    }
}