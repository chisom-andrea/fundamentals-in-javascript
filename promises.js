let p = new Promise ((resolve, reject) => {
    let a = 2 + 2
    if (a == 4){
        resolve('success!')
    } else {
        reject('failed!')
    }
})
p.then((message) => {
    console.log('This is in resolve, ' + message)
}) .catch((message) => {
    console.log('This is in reject ' + message)
})