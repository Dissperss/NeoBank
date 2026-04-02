type SectionProps = {
    children: React.ReactNode
    className?: string
}

export const Section = ({ children, className }: SectionProps) => {
    return <section className={className}>{children}</section>
}
