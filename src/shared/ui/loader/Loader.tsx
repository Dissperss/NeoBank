import load from '@/shared/assets/images/loading.png'

import styles from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={styles.loading__block}>
            <p className={styles.loading__text}>Загрузка...</p>
            <img
                className={styles.loading__img}
                src={load}
                alt="loading spinner"
            />
        </div>
    )
}
