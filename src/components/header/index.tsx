import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import fbhImg from '../../../public/assets/fbh.png'
import bummooImg from '../../../public/assets/bummoo.png'

export function Header() {
    return (
        <header className={styles.header}>
            <section className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.topLeft}>
                        <Link href="/">
                            <Image
                                className={styles.fbhImg}
                                alt="Federação Baiana de Hapkido"
                                src={fbhImg}
                                priority
                            />
                        </Link>
                    </div>
                    <div className={styles.topRight}>            
                        <div className={styles.topName}>FEDERAÇÃO BAIANA DE HAPKIDO</div>
                        <div className={styles.topBumMoo}>
                            <Image
                                className={styles.bummooImg}
                                alt="Bum Moo"
                                src={bummooImg}
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.menu}>
                    <nav className={styles.nav}>
                        <Link href="/hapkido"><span className={styles.itemMenu}>Hapkido</span></Link>
                        <Link href="/"><span className={styles.itemMenu}>Fotos</span></Link>
                        <Link href="/"><span className={styles.itemMenu}>Vídeos</span></Link>
                        <Link href="/"><span className={styles.itemMenu}>Onde Treinar</span></Link>
                    </nav>
                </div>
            </section>
        </header>
    )
}