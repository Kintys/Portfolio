export const vEllipses = {
    mounted: (el, binding) => {
        applyEllipses(el, binding)
    }
}

function applyEllipses(el, binding) {
    let charsNumber = parseInt(binding.arg)
    let contentStr = ''
    contentStr = el.innerText
    if (contentStr.length > charsNumber) {
        if (binding.modifiers['keep-word']) {
            const spaceOrPunctuation = /[\s\.,;:!?'"]/
            const position = contentStr.slice(charsNumber).search(spaceOrPunctuation)
            charsNumber = charsNumber + position
        }

        el.innerText = contentStr.substring(0, charsNumber) + '...'
    }
}

// export const vEllipses = {
//     mounted(el, binding) {
//         // Зберігаємо початковий текст
//         el._contentStr = el.innerText

//         // Застосовуємо обрізання тексту
//         applyEllipses(el, binding, el._contentStr)

//         // Ініціалізуємо спостерігача для змін у DOM
//         el._observer = new MutationObserver(() => {
//             const newContent = el.innerText
//             if (newContent !== el._contentStr) {
//                 el._contentStr = newContent // Оновлюємо текст
//                 applyEllipses(el, binding, el._contentStr) // Застосовуємо логіку
//             }
//         })

//         // Налаштовуємо спостереження за змінами тексту
//         el._observer.observe(el, { childList: true, characterData: true, subtree: true })
//     },
//     updated(el, binding) {
//         // Оновлюємо обрізання тексту, якщо змінився `binding`
//         applyEllipses(el, binding, el._contentStr)
//     },
//     unmounted(el) {
//         // Відключаємо спостерігача при демонтованому компоненті
//         if (el._observer) {
//             el._observer.disconnect()
//         }
//     }
// }

// function applyEllipses(el, binding, contentStr) {
//     let charsNumber = parseInt(binding.arg)

//     if (!contentStr || isNaN(charsNumber) || charsNumber <= 0) {
//         console.error('Invalid argument for v-ellipses:', binding.arg)
//         return
//     }

//     if (contentStr.length > charsNumber) {
//         if (binding.modifiers['keep-word']) {
//             const spaceOrPunctuation = /[\s\.,;:!?'"]/
//             const position = contentStr.slice(charsNumber).search(spaceOrPunctuation)
//             charsNumber = position !== -1 ? charsNumber + position : charsNumber
//         }

//         el.innerText = contentStr.substring(0, charsNumber) + '...'
//     }
// }
