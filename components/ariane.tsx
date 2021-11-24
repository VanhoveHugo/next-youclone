'use strict'
import * as React from 'react'
import styles from '../styles/components.module.css'

export default function Navigation() {
    return (
        <div className={styles.ariane}>
            <span className={styles.active}>Tous</span>
            <span>Mix</span>
            <span>Musique</span>
            <span>En direct</span>
        </div>
    )
}