// const fs = require('fs'); // це вбудова бібліотека в node, ще є os, util, path
// які теж вбудовані і їх не потрібно докачувати

// fs.appendFile('./data.txt', ' HELLO NODE', (err) => {
//     if (err) {
//         console.log(err);
//     }
// });
// appendFile дописує до існуючого або створює новий якщо його немає
// тут ми створили файл data.txt, якщо ми його запустимо три рази наприклад,
// то до цього файла допишеться три рази  наші дані - 'HELLO NODE'

// fs.writeFile('./data.txt', ' HELLO NODE', (err) => {
//     if (err) {
//         console.log(err);
//     }
// });
// writeFile перезаписує інформацію, спершу все очищає, а тоді записує свою інформацію

// fs.readFile('./data.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//         return;
//         // якщо в нас є якась функція, то return зупиняє її виконання
//         //якщо є можливість то краще уникнути else
//     }
//
//     console.log(data); // тип цих даних є обєкт
//     console.log(data.toString()); // потрібно приводити до toString(), бо не зчитає дані
// })
// readFile зчитує дані, в даному випадку ми зчитали все що є в data.txt

// fs.readdir('./', (err, files) => {
//     console.log(files);
// })
// //readdir зчитує які є діректорії
//
//
// fs.readdir('./', (err, files) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//
//     for (const file of files) {
//         console.log('********************************************');
//         console.log(`./${file}`);
//         console.log('********************************************');
//
//         fs.stat(`./${file}`, (err, stats) => {
//             console.log(stats.isFile(), 'stats.isFile()');
//             console.log(stats.isDirectory(), 'stats.isDirectory()');
//             console.log('-----------------------------------------')
//         })
//         //stat дає всю інформацію про файл, зазвичай тут можуть розмір файла дивитись
//
//         // fs.readFile(`./services/${file}`, (err1, data) => {
//         //     if(err1) {
//         //         console.log(err1);
//         //         return;
//         //     }
//         //     console.log('********************************************');
//         //     console.log(data.toString());
//         //     console.log('********************************************');
//         // })
//         // зчитали всю інформацію в кожному файлі
//     }
//
// });

// fs.mkdir('./utils', err => {
//     err && console.log(err);
// });
// mkdir створює діректорію

// fs.rename('./services/toMove.js', './utils/helloWorld.txt', err => {
//     err && console.log(err);
// })
// rename зробили переміщення файлів з діректорії ./services взяли файл toMove.js
// та перемістили його в діректорію ./utils у файл helloWorld.txt

// readFile дасть нам зчитану інформацію тільки тоді як зчитає повністю весь файл,
// за допомогою Stream ми можемо передавати та зчитувати інформацію певними кусочками(по 64 кілобайти це встановлено node)
// тому це зручніше що нам не потрібно чекати поки весь файл зчитається

// const readStream = fs.createReadStream('./utils/helloWorld.txt');
// const writeStream = fs.createWriteStream('./utils/helloWorld2.txt');
//
// readStream.on('data', chunk => {
//     console.log(chunk);
//     console.log('-------------------------------------');
//
//     writeStream.write(chunk); // створили файл helloWorld2.txt в якому записали такуж інфу як в helloWorld.txt
// }) // такий підхід неправильний, бо файли швидше зчитуються ніж записуються,
// // відповідно readStream побіг вперед, а writeStream зашивається і не встигає записувати
// // в реальності роблять наступним способом через pipe, readStream буде поступово надавати інфу так щоб writeStream встигав записувати
// // readStream.pipe(writeStream);
//
// // повернуло нам 5 Buffer, тобто пять chunk, поділило наш файл на пять частин
//
// readStream.on('end', () => {
//     console.log('FILE DONE');
// })

//
// fs.unlink('./utils/helloWorld3.txt', err => {
//
// }); // unlink видалили файл helloWorld3.txt

// https://nodejs.org/api/fs.html  документація по fs