let promptText = "Введите валюту"
let firstCurrency = undefined
let secondCurrency = undefined
let baseCurrency = undefined
let convertedCurrency = undefined
let summ = undefined
let result = undefined
let answer = true

while (answer) {
    let loop = true
    let secondLoop = true
    firstCurrency = prompt(promptText, "")

    while (loop) {
        switch (firstCurrency) {
            case "доллар":
                baseCurrency = 26
                loop = false
                break
            case "евро":
                baseCurrency = 30.4
                loop = false
                break
            case "рубль":
                baseCurrency = 0.37
                loop = false
                break
            case "гривна":
                baseCurrency = 1
                loop = false
                break
            case "крона":
                baseCurrency = 1.2
                loop = false
                break
            default:
                firstCurrency = prompt("Введите базовую валюту из списка", "")
                loop = true
        }
    }

    summ = +prompt(`Введите сумму в ${firstCurrency}`)
    secondCurrency = prompt("Введите название валюты, в которую хотете перевести", "")
    while (secondLoop) {
        switch (secondCurrency) {
            case "доллар":
                convertedCurrency = 26
                secondLoop = false
                break
            case "евро":
                convertedCurrency = 30.4
                secondLoop = false
                break
            case "рубль":
                convertedCurrency = 0.37
                secondLoop = false
                break
            case "гривна":
                convertedCurrency = 1
                secondLoop = false
                break
            case "крона":
                convertedCurrency = 1.2
                secondLoop = false
                break
            default:
                secondCurrency = prompt("Введите конвертируемую валюту из списка", "")
                secondLoop = true
        }
    }

    result = (summ * baseCurrency / convertedCurrency).toFixed(2)
    alert(result);
    answer = window.confirm("Повторить конвертацию?")
}