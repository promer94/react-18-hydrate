import type { NextPage } from 'next'
import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [on, toggle] = React.useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      toggle(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  if (typeof window !== 'undefined' && on) return null
  return (
    <div className={styles.container} onClick={() => toggle(v => !v)}>
      {on ? 'on' : 'off'}
    </div>
  )
}

export default Home
