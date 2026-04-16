export const cleanHtmlString = (description: string | null | undefined) => {
    if (typeof description !== 'string') {
        return null
    }

    if (description === '' || description === null) {
        return null
    }

    const regExp = /<[^>]*>/

    if (regExp.test(description)) {
        const domParser = new DOMParser().parseFromString(
            description,
            'text/html',
        )

        if (domParser.body.textContent.trim() === '') {
            return null
        } else {
            return domParser.body.textContent.trim()
        }
    } else {
        return description.trim()
    }
}
