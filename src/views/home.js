import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Rectangular Untidy Mole</title>
        <meta property="og:title" content="Rectangular Untidy Mole" />
      </Helmet>
      <div className={styles['container1']}>
        <div className={styles['Hero']}>
          <div className={styles['container2']}>
            <h1 className={styles['text']}>
              <span className={styles['text1']}>Fika Specialty</span>
            </h1>
            <span className={styles['text2']}>
              Brewing soon with the best specialty coffee made specially for
              you.
            </span>
          </div>
          <div className={styles['container3']}>
            <span className={styles['text3']}>
              Help us understand your coffee preference and get a customised
              blend crafted for you
            </span>
            <button
              className={` ${styles['button']} ${projectStyles['button']} `}
            >
              <span className={styles['text4']}>Craft my coffee !</span>
            </button>
          </div>
        </div>
      </div>
      <footer className={styles['Footer']}>
        <span className={styles['text5']}>
          © 2022 Fika Specialty, All Rights Reserved.
        </span>
        <div className={styles['IconGroup']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M854 656q18 0 30 12t12 30v148q0 50-42 50-298 0-512-214t-214-512q0-42 50-42h148q18 0 30 12t12 30q0 78 24 150 8 26-10 44l-82 72q92 192 294 290l66-84q12-12 30-12 10 0 14 2 72 24 150 24z"></path>
          </svg>
          <span>+91 99001 71227</span>
        </div>
      </footer>
    </div>
  )
}

export default Home
