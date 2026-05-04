import { Section } from '@/shared/ui/section'
import styles from './CardInstruction.module.css'
import { InstructionBlock } from './instructionBlock'

export const CardInstruction = () => {
    return (
        <Section className={styles.card__instruction_section}>
            <h2 className={styles.card__instruction_title}>
                How to get a card
            </h2>
            <div className={styles.card__instruction_wrapper}>
                <InstructionBlock
                    text="Fill out an online application - you do not need to visit the bank"
                    step="1"
                />
                <InstructionBlock
                    text="Find out the bank's decision immediately after
filling out the application"
                    step="2"
                />
                <InstructionBlock
                    text="The bank will deliver the card free of charge, wherever
convenient, to your city"
                    step="3"
                />
            </div>
        </Section>
    )
}
