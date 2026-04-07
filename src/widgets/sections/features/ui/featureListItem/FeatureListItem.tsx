import { type FeatureList } from '../../constants/featureList'
import CheckIcon from '@/shared/assets/icons/checkIcon.svg?react'
import styles from './FeatureListItem.module.css'

interface FeatureListItemProps {
    item: FeatureList
}

export const FeatureListItem = ({ item }: FeatureListItemProps) => {
    return (
        <li key={item.id} className={styles.features__list_item}>
            <CheckIcon />
            <span className={styles.list__item_text}>{item.text}</span>
        </li>
    )
}
