import { Container } from '@/shared/ui/container'
import { Button } from '@/shared/ui/button'

import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__inner}>
                    <span className={styles.header__title}>NeoBank</span>
                    <nav className={styles.header__menu}>
                        <ul className={styles.header__menu_list} role="menu">
                            <li className={styles.header__menu_link}>
                                {/* Заменить на Link */}
                                <a href="#">Credit card</a>
                            </li>
                            <li className={styles.header__menu_link}>
                                <a href="#">Product</a>
                            </li>
                            <li className={styles.header__menu_link}>
                                <a href="#">Account</a>
                            </li>
                            <li className={styles.header__menu_link}>
                                <a href="#">Resources</a>
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
