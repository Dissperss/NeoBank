import { Divider } from '@/shared/ui/divider'
import styles from './InstructionBlock.module.css'

type InstructionBlockProps = {
    step: string
    text: string
}

export const InstructionBlock = ({ text, step }: InstructionBlockProps) => {
    return (
        <div className={styles.instruction__block}>
            <div className={styles.instruction__block_header}>
                <p className={styles.block__header_step}>{step}</p>
                <Divider />
            </div>
            <p className={styles.instruction__block_text}>{text}</p>
        </div>
    )
}
