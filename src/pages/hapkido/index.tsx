import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './styles.module.css'
import tigerImg from '../../public/assets/tiger.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Hapkido() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Federação Baiana de Hapkido</title>
      </Head>
      
      <main className={styles.main}>
        <h1>Teste</h1>
      </main>
      
    </div>
  )
}
