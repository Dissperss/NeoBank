import { Container } from '@/shared/ui/container'
import { Logo } from '@/shared/ui/logo'
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer__header}>
                    <Logo />
                    <div className={styles.footer__header_contacts}>
                        <a
                            href="tel:+7(495)9842513"
                            className={styles.footer__contacts_tel}
                        >
                            +7 (495) 984 25 13
                        </a>
                        <a href="/" className={styles.footer__contacts_email}>
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
                            <li className={styles.footer__menu_item}>
                                <a href="/">About bank</a>
                            </li>
                            <li className={styles.footer__menu_item}>
                                <a href="/">Ask a Question</a>
                            </li>
                            <li className={styles.footer__menu_item}>
                                <a href="/">Quality of service</a>
                            </li>
                            <li className={styles.footer__menu_item}>
                                <a href="/">Requisites</a>
                            </li>
                            <li className={styles.footer__menu_item}>
                                <a href="/">Press center</a>
                            </li>
                            <li className={styles.footer__menu_item}>
                                <a href="/">Bank career</a>
                            </li>
                            <li className={styles.footer__menu_item}>
                                <a href="/">Investors</a>
                            </li>
                            <li className={styles.footer__menu_item}>
                                <a href="/">Analytics</a>
                            </li>
                            <li className={styles.footer__menu_item}>
                                <a href="/">Business and processes</a>
                            </li>
                            <li className={styles.footer__menu_item}>
                                <a href="/">Compliance and business ethics</a>
                            </li>
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
