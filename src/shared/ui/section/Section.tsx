type SectionProps = {
    className?: string
} & React.PropsWithChildren

export const Section = ({ children, className }: SectionProps) => {
    return <section className={className}>{children}</section>
}
