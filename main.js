
// =====1=====

const arr = []
const delayedPromise = (value, time) => {
    let nP = new Promise(resolve => {
        setTimeout(() => {
            resolve(`value: ${value}`)            
        }, time)
   
    })
    return arr.push(nP)
}

delayedPromise("1", 2000)
delayedPromise("2", 1000)
delayedPromise("3", 2500)
delayedPromise("4", 1500)
delayedPromise("5", 500)

Promise.all(arr)
.then(value => console.log(value))

// =====2=====

const raceArr = []
const randomDelay = value => {
    let delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    let fP = new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Message: ${value}, ${delay}ms`)
        }, delay)
    })
    return raceArr.push(fP)

}

randomDelay("Meow")
randomDelay("Woof")
randomDelay("Kwaa")
randomDelay("Muuu")
randomDelay("Beee")

Promise.race(raceArr)
.then(value => console.log(value))


















