import styles from './TableTitle.module.css'
import ArrowIcon from '@/shared/assets/icons/documentPage/table__header_arrow.svg?react'

type TableTitleProps = {
    titleText: string
    className?: string
    onClick?: () => void
    sortDirection?: 'asc' | 'desc' | null
}

export const TableTitle = ({
    titleText,
    className,
    onClick,
    sortDirection,
}: TableTitleProps) => {
    return (
        <div className={`${styles.table__title_content} ${className || ''}`}>
            <span className={styles.table__title_text}>{titleText}</span>
            <button
                className={`${styles.table__title_btn} ${sortDirection === 'desc' ? styles.title_btn_rotate : ''}`}
                onClick={onClick}
            >
                <ArrowIcon />
            </button>
        </div>
    )
}
