const Users = [{
    username: 'Marymary@gmail.com',
    password: 'mrymarym'
},{
    username: 'JakeStateFarm@gmail.com',
    password: 'Fromstate'
},{
    username: 'JaneDoe@gmail.com',
    password: 'Doejane'
},{
    username: 'abcdefgh@gmail.com',
    password: 'Ijklmnop'
}];

let arrPromise = new Promise((resolve, reject) => {
    const foundUser = Math.floor(Math.random() * Users.length)
    console.log(foundUser)
    let u = Users[foundUser].password.match(/[A-Z]/g)
    u === null ? u = 0 : u = u
    let l = Users[foundUser].password.match(/[a-z]/g)
    l === null ? l = 0 : l = l
    if(Users[foundUser].username.includes('@') && u.length > 0 && l.length > 0){
        resolve(Users[foundUser])
    }
    else{
        reject(Users[foundUser])
    }
})
arrPromise.then((user) => {
    console.log(`User has valid username: ${user.username} and password: ${user.password}`)
}).catch((user) => {
    console.log(`User has invalid username: ${user.username} and password: ${user.password}`)
})