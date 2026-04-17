import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'

import styles from './Header.module.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__inner}>
                    <Link to="/">
                        <span className={styles.header__title}>NeoBank</span>
                    </Link>
                    <nav className={styles.header__menu}>
                        <ul className={styles.header__menu_list} role="menu">
                            <li className={styles.header__menu_link}>
                                <Link to="loan">Credit card</Link>
                            </li>
                            <li className={styles.header__menu_link}>
                                <Link to="/">Product</Link>
                            </li>
                            <li className={styles.header__menu_link}>
                                <Link to="/">Account</Link>
                            </li>
                            <li className={styles.header__menu_link}>
                                <Link to="/">Resources</Link>
                            </li>
                        </ul>
                    </nav>
                    <Button onClick={() => console.log('Click!')}>
                        Online Bank
                    </Button>
                </div>
            </Container>
        </header>
    )
}
