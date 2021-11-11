let arr = [1, null, "Hello", true, {}, 24, "JS"]

function filterBy(arr, type) {
    let filteredArray = arr.filter(item => typeof item !== type)
    return filteredArray
}

console.log(filterBy(arr, "number"))