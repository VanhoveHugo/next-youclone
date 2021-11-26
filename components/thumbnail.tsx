'use strict'
import * as React from 'react'
import Link from 'next/link'
import styles from '../styles/components.module.css'

export default function Thumbnail({ data }: any) {
    String.prototype.replaceAll = function(search: any, replacement: any) {
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
    console.log(data)
    return (
        <article className={styles.VideoCard}>
            <Link href={`/watch?v=${data.id.videoId}`}>
                <a>
                    <div className={styles.figure}>

                        <img src={data.snippet.thumbnails.medium.url}></img>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.channel_avatar}></div>
                        <div className={styles.details_text}>
                            <div className={styles.video_title}>
                                <div>{replaceAll(data.snippet.title)}</div>
                            </div>
                            <div className={styles.video_meta}>
                                <p>{data.snippet.channelTitle}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </article>
    )
}