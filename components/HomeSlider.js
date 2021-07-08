import styles from '../styles/home/home-slider.module.scss'
import Link from 'next/link'
import { useState } from 'react'

const slides = [
  {
    title: 'Commercial',
    link: '#'
  },
  {
    title: 'Technical',
    link: '#'
  },
  {
    title: 'Personal',
    link: '#'
  }
]

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextClickHandler = () => {
    if (currentSlide === slides.length - 1) return

    setCurrentSlide((old) => {
      return old + 1
    })
  }

  const prevClickHandler = () => {
    if (currentSlide === 0) return
    setCurrentSlide((old) => {
      return old - 1
    })
  }

  return (
    <div className={styles.homeSlider}>
      <div className={styles.titlePosition}>
        <h1 className={styles.title}>{slides[currentSlide].title}</h1>
        <Link href={slides[currentSlide].link}>
          <a className={styles.link}>Explore
            <svg width="133" height="133" viewBox="0 0 133 133" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M71.2554 56.4375L80.4064 65.9438C80.968 66.5271 80.968 67.4729 80.4064 68.0562L71.2554 77.5625C70.6939 78.1458 69.7834 78.1458 69.2218 77.5625C68.6603 76.9791 68.6603 76.0333 69.2218 75.45L75.9181 68.4938C75.9181 68.4938 55.5156 68.4938 53.5067 68.4938C51.4978 68.4938 51.4978 65.5062 53.5067 65.5062C55.5156 65.5062 75.9181 65.5062 75.9181 65.5062L69.2218 58.55C68.6603 57.9667 68.6603 57.0209 69.2218 56.4375C69.7834 55.8542 70.6939 55.8542 71.2554 56.4375Z"
                    fill="white"/>
              <path
                d="M18.3296 66.2522L42.2909 24.75L90.2136 24.75L114.175 66.2522L90.2136 107.754L42.2909 107.754L18.3296 66.2522Z"
                stroke="white"/>
              <path
                d="M25.1807 65.655L45.4179 30.6032L85.8922 30.6032L106.129 65.655L85.8922 100.707L45.4179 100.707L25.1807 65.655Z"
                stroke="white" strokeWidth="3"/>
            </svg>
          </a>
        </Link>
      </div>
      <div className={styles.sliderNav}>
        <button className={styles.prev} onClick={prevClickHandler}>
          <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.9393 6.93934C15.5251 6.35355 16.4749 6.35355 17.0607 6.93934L26.6066 16.4853C27.1924 17.0711 27.1924 18.0208 26.6066 18.6066C26.0208 19.1924 25.0711 19.1924 24.4853 18.6066L16 10.1213L7.51472 18.6066C6.92893 19.1924 5.97918 19.1924 5.3934 18.6066C4.80761 18.0208 4.80761 17.0711 5.3934 16.4853L14.9393 6.93934ZM14.5 10.5L14.5 8L17.5 8L17.5 10.5L14.5 10.5Z"
              fill="white"/>
          </svg>
        </button>
        <span className={styles.slideNumber}>{`0${currentSlide + 1}`}</span>
        <div className={styles.scale}>
          <span className={styles.inner} style={{ height: (100 / slides.length) + '%', top: (100 / slides.length) * currentSlide + "%" }}></span>
        </div>

        {currentSlide === slides.length - 1 ? "" :
        <button className={styles.next} onClick={nextClickHandler}>
          <span>Next</span>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.9393 23.0607C11.5251 23.6464 12.4749 23.6464 13.0607 23.0607L22.6066 13.5147C23.1924 12.9289 23.1924 11.9792 22.6066 11.3934C22.0208 10.8076 21.0711 10.8076 20.4853 11.3934L12 19.8787L3.51472 11.3934C2.92893 10.8076 1.97918 10.8076 1.3934 11.3934C0.807611 11.9792 0.807612 12.9289 1.3934 13.5147L10.9393 23.0607ZM10.5 19.5L10.5 22L13.5 22L13.5 19.5L10.5 19.5Z"
              fill="white"/>
          </svg>
        </button>}
      </div>
    </div>
  )
}

export default HomeSlider