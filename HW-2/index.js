let n = +prompt("Введите число", "")

let F1 = 0
let F2 = 1

let loop = true
let current

function fib(F1, F2, n) {

    if (n === 1 || n === 0 || n === -1) {
        return n
    }

    if (n < 0) {
        for (let i = 0; i > n; i--) {
            current = F2 - F1;
            F2 = F1;
            F1 = current;
        }

        return current
    } else {

        for (let i = 1; i < n; i++) {
            current = F1 + F2;
            F1 = F2;
            F2 = current;

        }

        return current
    }
}

while (loop) {
    alert(fib(F1, F2, n))
    loop = false
}