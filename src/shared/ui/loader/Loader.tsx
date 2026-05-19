import styles from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={styles.loading__block} role="status">
            <p className={styles.loading__text}>Загрузка...</p>
            <div className={styles.loading__spinner}></div>
        </div>
    )
}
