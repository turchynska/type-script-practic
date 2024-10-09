// import React, {useRef} from "react";////1

// export function TextInputWithFocus () {
//     // Тут ми вказуємо, що ref буде посилатися на елемент типу HTMLInputElement
//     const inputEl = useRef<HTMLInputElement>(null)

//     const onButtonClick= () => {
//         inputEl.current?.focus();
//     }
//     return(
//         <>
//         <input ref={inputEl} type="text"/>
//         <button onClick={onButtonClick}>Focus element</button>
//         </>
//     )
// }
//У цьому прикладі useRef використовується для створення посилання на елемент input. Зверніть увагу, що ми вказуємо
// HTMLInputElement як тип useRef. Це означає, що ми матимемо доступ до всіх властивостей і методів input елемента, таких як метод focus.

// import React, {useRef} from "react";//2

// export function ComponentWithRef() {
//     const divRef = useRef<HTMLDivElement>(null);
//     const textAreaRef = useRef<HTMLTextAreaElement>(null);
//     const selectRef = useRef<HTMLSelectElement>(null)

//     return(
//         <>
//         <div ref={divRef}>Div</div>
//         <textarea ref={textAreaRef}></textarea>
//         <select ref={selectRef}></select>
//         </>
//     )
// }