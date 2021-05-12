function displaybox(num) {
    dis.value += num;
}

function evaluateExpression() {
    let val = dis.value
    let result = eval(val)
    dis.value = result
}

function clearScreen(val) {
    dis.value = ""

}

function backspace() {
    dis.value = dis.value.slice(0, -1)
}