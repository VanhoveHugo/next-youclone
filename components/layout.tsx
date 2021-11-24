'use strict'
import * as React from 'react'
import styles from '../styles/components.module.css'
import styled from 'styled-components'

import { LayoutProps } from '../utils/types'

import Navigation from './navigation'
import Ariane from '../components/ariane'
import Menu from '../components/menu'

export default function Layout({ children, ariane, menu }: LayoutProps) {
    return (
      <>
        <Navigation />
        <main className={styles.layout}>
          {menu 
          ?
            <Menu state={menu} />
          : ''}
          {ariane 
          ? 
            <Ariane /> 
          : ''}
          <div className={styles.frame}>
            {children}
          </div>
        </main>
      </>
    )
}