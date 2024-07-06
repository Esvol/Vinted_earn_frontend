'use client'

import React, { useEffect } from 'react'
import styles from './index.module.scss'

import Header from '../Header'
import { useCurrentQuery } from '@/redux/services/auth'
import Loader from '../Loader'
import Navigation from '../Navigation'
import Image from 'next/image'
import { google } from '../../img/images'

type Props = {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
  const {data: user, isLoading} = useCurrentQuery();

  if(isLoading){
    return <Loader />
  }

  return (
    <div className={styles.layout}>
      {
        user ? (
          <>
            <Header />
            <Navigation />
            {children}
          </>
        )
        : 
        (
          <>
            <Header />
            <p className={styles.layout_warning}>
              <Image src={google} alt='google' width={100} height={100}/>
              SIGN IN WITH GOOGLE!
            </p>
          </>
        )
      }
    </div>
  )
}

export default Layout