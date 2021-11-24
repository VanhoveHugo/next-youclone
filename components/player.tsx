'use strict'
import * as React from 'react'
import styles from '../styles/components.module.css'
import Link from 'next/link'

export default function Player({ data }: any) {
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
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <div className={styles.player}>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${data.id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay="1"></iframe>
                </div>
                <div>
                    <div className={styles.meta}>
                        <h1>{replaceAll(data.snippet.title)}</h1>
                        <p>{data.snippet.publishedAt}</p>
                    </div>
                    <div className={styles.space}></div>
                    <div className={styles.row}>
                        <div className={styles.avatar}>
                        </div>
                        <p>{data.snippet.channelTitle}</p>
                    </div>
                    <div className={styles.desc}>
                        <p>{data.snippet.description}</p>
                    </div>
                </div>
            </div>
            
            <div className={styles.suggest}>
            <article className={styles.videoSidebar}>
                    <figure></figure>
                    <div>
                        <h1>Titre très long wow c'est de l'abus la !</h1>
                        <p className={styles.desc}>Nom de la chaine</p>
                        <p>0 vue - il y a 3 mois</p>
                    </div>
                </article>
                <article className={styles.videoSidebar}>
                    <figure></figure>
                    <div>
                        <h1>Titre</h1>
                        <p className={styles.desc}>Nom de la chaine</p>
                        <p>0 vue - il y a 3 mois</p>
                    </div>
                </article>
                <article className={styles.videoSidebar}>
                    <figure></figure>
                    <div>
                        <h1>Lorem</h1>
                        <p className={styles.desc}>Nom de la chaine</p>
                        <p>0 vue - il y a 3 mois</p>
                    </div>
                </article>
                <article className={styles.videoSidebar}>
                    <figure></figure>
                    <div>
                        <h1>Lorem</h1>
                        <p className={styles.desc}>Nom de la chaine</p>
                        <p>0 vue - il y a 3 mois</p>
                    </div>
                </article>
                <Link href={'/journal-intime'}>
                    <a>
                        <article className={styles.videoSidebar}>
                            <figure></figure>
                            <div>
                                <h1>Easter Egg</h1>
                                <p className={styles.desc}>Nom de la chaine</p>
                                <p>0 vue - il y a 3 mois</p>
                            </div>
                        </article>
                    </a>
                </Link>
            </div>
        </div>
    )
}