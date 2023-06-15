import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import fbhImg from '../../../../public/assets/fbh.png'
import bummooImg from '../../../../public/assets/bummoo.png'

export function HeaderLogo() {
    return (
        <div className={styles.container}>
            <section className={styles.content}>
                <div className={styles.itemLeft}>
                    <Link href="/">
                        <Image
                            className={styles.fbhImg}
                            alt="Federação Baiana de Hapkido"
                            src={fbhImg}
                            priority
                        />
                    </Link>
                </div>
                <div className={styles.itemRight}>            
                    <div className={styles.fbhText}>FEDERAÇÃO BAIANA DE HAPKIDO</div>
                    <Image
                        className={styles.bummooImg}
                        alt="Bum Moo"
                        src={bummooImg}
                        priority
                        />
                </div>
            </section>
        </div>
    )
}