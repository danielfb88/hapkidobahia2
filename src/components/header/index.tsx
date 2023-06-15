import styles from './styles.module.css'
import { HeaderLogo } from './header-logo'
import { HeaderNav } from './header-nav';

export function Header() {
    return (
        <header className={styles.container}>
            <HeaderLogo />
            <HeaderNav />
        </header>
    )
}