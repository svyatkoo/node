const path = require("path");
const fs = require("fs");

// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу,
// дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell,
// пізніше я вам покажу як можна це обійти, але поки зробіть так

// const myText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, eaque.";

// fs.writeFile(path.join(__dirname, "test.txt"), `${myText}`, (err => err ? console.log(err) : ""));

// fs.readFile(path.join(__dirname, "test.txt"), (err1, data) => {
//     if (err1) {
//         console.log(err1)
//     }
//     fs.mkdir(path.join(__dirname, "Folder1"), (err2) => {
//         if(err2) {
//             console.log(err2)
//         }
//         fs.writeFile(path.join(__dirname, "Folder1", "textFolder1.txt"), `${data}`, (err => err ? console.log(err) : ""));
//     })
// })



// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній,
// старий файл видаліть після того як все завершиться. Також вийде callback hell

// const myText2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio!";

// fs.writeFile(path.join(__dirname, "text2.txt"), `${myText2}`, (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log("File created")
// })

// fs.readFile(path.join(__dirname, "text2.txt"), (err1, data) => {
//     fs.mkdir(path.join(__dirname, "folder2"), () => {
//         fs.writeFile(path.join(__dirname, "folder2", "folderText2.txt"),
//             `${data}`,
//             () => {
//                 fs.unlink(path.join(__dirname, "text2.txt"), (err3) => {
//                     if (err3) {
//                         console.log(err3)
//                     }
//                     console.log("File 'text2.txt' deleted")
//                 })
//             }
//         )
//     })
// })



// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані
// (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли
// тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки,
// вам потрібно їх перейменувати і додати до назви префікс _new

// fs.mkdir(path.join(__dirname, "Folder3"), {recursive: false}, () => {
//     for (let i = 1; i <= 3; i++) {
//         fs.mkdir(path.join(__dirname, "Folder3", `Folder3-${i}`), ()=>console.log("Folder created"));
//         fs.writeFile(path.join(__dirname, "Folder3", `folderTextFile${i}.txt`),
//             `Some text ${i}`,
//             (err) => {
//                 if (err) {
//                     console.log(err)
//                 }
//             }
//         )
//     }
// })

// fs.readdir(path.join(__dirname, "Folder3"), (err, files) => {
//     if (err) {
//         console.log(err)
//     }
//     files.forEach(file => {
//         if (path.extname(file)) {
//             fs.truncate(path.join(__dirname, "Folder3", `${file}`),
//                 (err) => console.log(err))
//         }
//         if (!path.extname(file)) {
//             fs.rename(path.join(__dirname, "Folder3", `${file}`),
//                 path.join(__dirname, "Folder3", `${file}_new`),
//                 () => console.log('Folder renamed'))
//         }
//     })
// })

