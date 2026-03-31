import styles from './Container.module.css'

type ContainerProps = {
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg'
}

export const Container = ({ children, size = 'lg' }: ContainerProps) => {
    return (
        <div className={`${styles.container} ${styles[size]}`}>{children}</div>
    )
}
