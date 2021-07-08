import styles from '../styles/layouts/header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = `${styles.header} ${isOpen ? 'opened' : ''}`

  const menuClickHandler = () => {
    setIsOpen((old) => {
      return !old
    })
  }

  return (
    <header className={classes}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src="/logo.svg" width={192} height={132}/>
          </a>
        </Link>
      </div>
      <nav className={styles.menu}>
        <button className={styles.menu__button} onClick={menuClickHandler}>
          <svg width="36" height="18" viewBox="0 0 36 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.5" x2="36" y2="1.5" stroke="white" strokeWidth="3"/>
            <line y1="16.5" x2="36" y2="16.5" stroke="white" strokeWidth="3"/>
          </svg>
        </button>
      </nav>
    </header>
  )
}
export default Header