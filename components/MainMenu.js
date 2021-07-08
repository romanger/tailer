import Link from 'next/link'
import styles from '../styles/layouts/header.module.scss'

const MainMenu = () => {
  return <nav className={styles.menuList}>
    <ul>
      <li>
        <Link href="#">
          <a>Commercial</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>Technical</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>Personal</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>About us</a>
        </Link>
      </li>
    </ul>
  </nav>
}

export default MainMenu