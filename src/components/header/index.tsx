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
                                className={styles.fbh}
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
                                className={styles.fbh}
                                alt="Bum Moo"
                                src={bummooImg}
                                priority
                            />
                        </div>
                    </div>
                </div>
                {/* <nav className={styles.nav}>
                    <Link href="/">
                        <Image
                            className={styles.fbh}
                            alt="Logo Tarefas+"
                            src={fbhImg}
                            priority
                        />
                    </Link>
                    <div>
                        <Image
                            className={styles.fbh}
                            alt="Bum Moo"
                            src={bummooImg}
                            priority
                        />
                    </div>
                </nav> */}
            </section>
        </header>
    )
}