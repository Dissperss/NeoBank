import styles from './Section.module.css'

type SectionProps = {
    children: React.ReactNode
}

export const Section = ({ children }: SectionProps) => {
    return <section className={styles.section}>{children}</section>
}
