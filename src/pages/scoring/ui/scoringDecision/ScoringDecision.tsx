import styles from './ScoringDecision.module.css'

export const ScoringDecision = () => {
    return (
        <div className={styles.scoring__decision}>
            <h2 className={styles.scoring__decision_title}>
                Wait for a decision on the application
            </h2>
            <p className={styles.scoring__decision_text}>
                The answer will come to your mail within 10 minutes
            </p>
        </div>
    )
}
