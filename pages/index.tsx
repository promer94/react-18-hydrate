import type { NextPage } from 'next'
import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [on, toggle] = React.useState(true)
  const [loading, setLoading] = React.useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  if (typeof window !== 'undefined' && loading) return null
  return (
    <div className={styles.container}>
      <button onClick={() => toggle(v => !v)}>{on ? 'on' : 'off'}</button>
    </div>
  )
}

export default Home
