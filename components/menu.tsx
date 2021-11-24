'use strict'
import * as React from 'react'
import styles from '../styles/components.module.css'

import Link from 'next/link'
import styled from 'styled-components'

import { AiOutlinePlaySquare, AiOutlineClockCircle, AiOutlineLike } from 'react-icons/ai'
import { IoCompassOutline } from 'react-icons/io5'
import { BsCollectionPlay, BsFillHouseDoorFill } from 'react-icons/bs'
import { VscHistory } from 'react-icons/vsc'
import { RiAccountCircleFill } from 'react-icons/ri'
import { MenuProps } from '../utils/types'

const Spacer = styled.div`
  width: 100%;
  height: 1px;
  margin: 6px 0;
  background: ${props => props.theme.colors.yt_general_white_10percent};
`

export default function Menu({ state }: MenuProps) {
    return (
    <div className={styles.menu}>
        {process.browser &&
        <>
            <Link href="/">
                <a className={styles.active}>
                <BsFillHouseDoorFill className={styles.icon} /><strong>Accueil</strong>
                </a>
            </Link>
            <Link href="/">
                <a>
                <IoCompassOutline className={styles.icon} /><strong>Explorer</strong>
                </a>
            </Link>
            <Link href="/">
                <a>
                <BsCollectionPlay className={styles.icon} /><strong>Abonnements</strong>
                </a>
            </Link>
            <div className={styles.space}></div>
            <Link href="/">
                <a>
                <AiOutlinePlaySquare className={styles.icon} /><strong>Bibliothèque</strong>
                </a>
            </Link>
            <Link href="/">
                <a className={styles.responsive}>
                <VscHistory className={styles.icon} /><strong>Historique</strong>
                </a>
            </Link>
            <Link href="/">
                <a className={styles.responsive}>
                <AiOutlinePlaySquare className={styles.icon} /><strong>Vos vidéos</strong>
                </a>
            </Link>
            <Link href="/">
                <a className={styles.responsive}>
                <AiOutlineClockCircle className={styles.icon} /><strong>A regarder plus tard</strong>
                </a>
            </Link>
            <Link href="/">
                <a className={styles.responsive}>
                <AiOutlineLike className={styles.icon} /><strong>Vidéos "J'aime"</strong>
                </a>
            </Link>
            <div className={styles.space}></div>
            <p>Connectez-vous à YouTube pour cliquer sur "J'aime", ajouter un commentaire et vous abonner.</p>
            <Link href="/">
                <a className={styles.login}>
                <RiAccountCircleFill className="icon_profil" /><strong>SE CONNECTER</strong>
                </a>
            </Link>
            <div className={styles.space}></div>
        </>
        }
    </div>
)
}