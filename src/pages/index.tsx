import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/home.module.css'
import tigerImg from '../../public/assets/tiger.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Federação Baiana de Hapkido</title>
      </Head>
      
      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.tiger}
            alt="Federação Baiana de Hapkido"
            src={tigerImg}
            priority
          />
        </div>
      </main>
      
    </div>
  )
}
