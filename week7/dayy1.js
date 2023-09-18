// JS LANJUTAN
// console.log("synchronus");
// console.log("satu");
// console.log("dua");
// console.log("tiga");

// async code
// console.log("asynchronus");
// setTimeout(() => {
//     console.log("satu");
// }, 4000);
// setTimeout(() => {
//     console.log("dua");
// }, 4000);
// setTimeout(() => {
//     console.log("tiga");
// }, 4000);

// misal data array of object
const users = [
    {
        username: "marcel",
        "email": "marcel@gmail.com"
    },
    {
        username: "siapa kek",
        email: "kasih tau ga ya @gmail.com"
    }
]

// const createUser = (user) => {
//     setTimeout(() => {
//         users.push(user);
//     }, 2000);
// };

const getUsers = () => {
    setTimeout(() => {
        console.log(users);
    }, 1000);
};

const newUser = {
    username: "orang ketiga",
    email: "iya@gmail.com",
};

getUsers();

// callback untuk memanggil fuinc get users setelah create user success
// const createUser = (newUser, callback) => {
//     setTimeout(() => {
//         users.push(newUser);
//         callback();
//     }, 2000);
// };

// pemanggilan callback
// createUser(newUser, getUsers);

// callback ada banyak jadinya bentuknya jadi nested callback => callback hell

// promise
// create promise
const createUser = newUser => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push(newUser)

            const error = false
            if (error) {
                reject("failed create user!")
            }

            resolve("success create user!")
        }, 2000);
    })
}

// panggil promise
createUser(newUser)
    .then(getUsers)
    .catch(e => console.log(e));

const userBaru = {
    username: "antonio",
    email: "antonio@gmail.com",
}

// async - await
const saveUser = async () => {
    try {
        await createUser(userBaru);
        getUsers();
    } catch (error) {
        console.log(error);
    }
}

saveUser();

// async function saveUser2 (params) {

// }

// let save = async function () {

// }
