// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js)
// два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),
// відповідно перший - onlineUsers, другий - inPersonUsers;


const path = require("path");
const fs = require("fs");

// fs.mkdir(path.join(__dirname, "main", "online"), {recursive:true},(err) => {
//     if (err) {
//         console.log(err);
//     }
// })

// fs.mkdir(path.join(__dirname, "main", "inPerson"), (err) => {
//     if (err) {
//         console.log(err);
//     }
// })


// fs.writeFile(path.join(__dirname, "main", "inPerson", "inPerson.txt"), "",(err) => {
//     if (err) {
//         console.log(err);
//     }
// })

// fs.unlink(path.join(__dirname, "main", "online", "online.txt"), (err) => {
//     if (err) {
//         console.log(err);
//     }
// })


// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.

// const onlineUsers = [
//     {name: "Andrii", age: 22, city: "Lviv"},
//     {name: "Pedro", age: 21, city: "Chicago"}
// ];
//
// for (let i = 0; i < onlineUsers.length; i++) {
//     for (const userKey in onlineUsers[i]) {
//         fs.writeFile(
//             path.join(__dirname, "main", "online", "online.txt"),
//             `${userKey} : ${onlineUsers[i][userKey]}\n`,
//             {flag: "a"},
//             (err) => {
//                 if (err) {
//                     console.log(err);
//                 }
//             }
//         )
//     }
// }

// const inPersonUsers = [
//     {name: "Oksana", age: 28, city: "Kyiv"},
//     {name: "Ira", age: 18, city: "Ternopil"}
// ];
//
// inPersonUsers.forEach(user => {
//     for (const userKey in user) {
//         fs.writeFile(
//             path.join(__dirname, "main", "inPerson", "inPerson.txt"),
//             `${userKey} : ${user[userKey]}\n`,
//             {flag: "a"},
//             (err) => {
//                 console.log(err)
//             }
//         )
//     }
// })



// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)

// fs.readFile(path.join(__dirname, "main", "online", "online.txt"),
//     "utf8",
//     (err1, data1) => {
//         if (err1) {
//             console.log(err1);
//             throw err1;
//         }
//         fs.readFile(path.join(__dirname, "main", "inPerson", "inPerson.txt"),
//             "utf8",
//             (err2, data2) => {
//                 if (err2) {
//                     console.log(err2);
//                     throw err2;
//                 }
//                 fs.writeFile(path.join(__dirname, "main", "online", "online.txt"),
//                     `${data2}`,
//                     {flag: "w"},
//                     (err) => {
//                         console.log(err)
//                     }
//                 )
//                 fs.writeFile(path.join(__dirname, "main", "inPerson", "inPerson.txt"),
//                     `${data1}`,
//                     {flag: "w"},
//                     (err) => {
//                         console.log(err)
//                     }
//                 )
//             }
//         )
//     }
// )



