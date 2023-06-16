import styles from './styles.module.css'
import Link from 'next/link'

export function HeaderNav() {
    return (
        <div className={styles.container}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <Link href="/hapkido"><span className={styles.itemMenu}>Hapkido</span></Link>
                    <Link href="/"><span className={styles.itemMenu}>Fotos</span></Link>
                    <Link href="/"><span className={styles.itemMenu}>Vídeos</span></Link>
                    <Link href="/dojangs"><span className={styles.itemMenu}>Onde Treinar</span></Link>
                </nav>
            </section>
        </div>
    )
}