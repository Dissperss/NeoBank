import LogoIcon from '@/shared/assets/icons/logo.svg?react'
import { Container } from '@/shared/ui/container'

import styles from './Footer.module.css'
import { menuItems } from '../constants/menuItems'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer__header}>
                    <LogoIcon />
                    <div className={styles.footer__header_contacts}>
                        <a
                            href="tel:+7(495)9842513"
                            className={styles.footer__contacts_tel}
                        >
                            +7 (495) 984 25 13
                        </a>
                        <a
                            href="mailto:info@neoflex.ru"
                            className={styles.footer__contacts_email}
                        >
                            info@neoflex.ru
                        </a>
                    </div>
                </div>
                <div className={styles.footer__inner}>
                    <nav
                        aria-label="Footer navigation"
                        className={styles.footer__inner_menu}
                    >
                        <ul className={styles.footer__menu_list}>
                            {menuItems.map((item) => (
                                <li
                                    key={item.id}
                                    className={styles.footer__menu_item}
                                >
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <p className={styles.footer__policy}>
                    We use cookies to personalize our services and improve the
                    user experience of our website. Cookies are small files
                    containing information about previous visits to a website.
                    If you do not want to use cookies, please change your
                    browser settings
                </p>
            </Container>
        </footer>
    )
}
