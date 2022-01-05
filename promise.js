let myPromise = new Promise((resolve, reject) => {
    const foundUser = Math.floor(Math.random() * 2)

    if(foundUser === 0){
        resolve(foundUser)
    } else{
        reject(foundUser)
    }
})

myPromise.then((foundUser) => {
    console.log('User found: ' + foundUser)
}).catch((foundUser) => {
    console.log('User not found: ' + foundUser)
})