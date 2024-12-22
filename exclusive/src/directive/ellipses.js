export const vEllipses = {
    mounted: (el, binding) => {
        const contentStr = el.innerText
        let charsNumber = parseInt(binding.arg)
        if (el.innerText.length > charsNumber) {
            if (binding.modifiers['keep-word']) {
                const spaceOrPunctuation = /[\s\.,;:!?'"]/
                const position = contentStr.slice(charsNumber).search(spaceOrPunctuation)
                charsNumber = charsNumber + position
            }

            el.innerText = el.innerText.substring(0, charsNumber) + (binding.value ?? '...')
        }
    }
}
