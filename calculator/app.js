const previous = document.querySelector('div[value="previous"]')
const current = document.querySelector('div[value="current"]')
const buttons = document.querySelectorAll('button')
let op, prevop;
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.value === "num") {
            if (button.innerText === "." && current.innerText.includes(".")) {
                return
            }
            current.innerText += button.innerText
        }
        else if (button.value === "operation") {
            op = button.innerText;
            if (prevop == null) {
                prevop = op;
            }
            if (current.innerText === '') {
                if (!isNaN(parseFloat(previous.innerText)))
                    previous.innerText = parseFloat(previous.innerText) + op
                prevop = op;
                return
            }
            else if (previous.innerText !== '') {
                compute(prevop, button.value)
                prevop = null;
            }
            else {
                previous.innerText = current.innerText + op
                current.innerText = ''
            }
        }
        else if (button.value === 'equal') {
            compute(op, button.value)
        }
        else if (button.value === 'all_clear') {
            current.innerText = '';
            previous.innerText = '';
            op = null;
            prevop = null;
        }
        else if (button.value === 'delete') {
            current.innerText = current.innerText.toString().slice(0, -1);
        }
    }
    )
})
function compute(operation, value) {
    let result
    const prev = parseFloat(previous.innerText)
    const curr = parseFloat(current.innerText)

    if (isNaN(prev) || isNaN(curr))
        return
    if (operation === '+') {
        result = prev + curr;
    }
    else if (operation === '-') {
        result = prev - curr;
    }
    else if (operation === 'x') {
        result = prev * curr;
    }
    else if (operation === '÷') {
        result = prev / curr;
    }
    else if (operation === '%') {
        result = (prev * curr) / 100;
    }
    else
        return

    if (value === 'operation') {
        previous.innerText = result + op;
        current.innerText = '';
    }
    else if (value === 'equal') {
        previous.innerText = '';
        current.innerText = result
    }
}
