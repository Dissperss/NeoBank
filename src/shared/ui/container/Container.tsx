import styles from './Container.module.css'

type ContainerProps = {
    size?: 'sm' | 'md' | 'lg'
} & React.PropsWithChildren

export const Container = ({ children, size = 'lg' }: ContainerProps) => {
    return (
        <div className={`${styles.container} ${styles[size]}`}>{children}</div>
    )
}
