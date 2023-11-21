import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './UI/Navbar'
import Discription from './UI/Discription'
import Section2 from './UI/Section2'
import Section3 from './UI/Section3'
import Section4 from './UI/Section4'
import Card from './UI/Card'
import Swiper1 from "./UI/Swiper1"
import Swiper2 from './UI/Swiper2'
import Section5 from './UI/Section5'
import Swiper3 from './UI/Swiper3'
import Counseling from './UI/Counseling'
import Footer from './UI/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Discription/>
      <Section2/>
      <Section3/>
      <Card/>
      <Swiper1/>
      <Section4/>
      <Swiper2/>
      <Section5/>
      <Swiper3/>
      <Counseling/>
      <Footer/>
    </main>
  )
}
