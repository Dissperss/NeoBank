type inputBgControllerProps = {
    value: number
    max: number
    min: number
}

export const inputBgController = ({
    value,
    max,
    min,
}: inputBgControllerProps) => {
    const percent = ((value - min) / (max - min)) * 100
    return { percent }
}
