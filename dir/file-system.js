const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')
const path = require('path')
// console.log('start')
// //fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2'), { recursive: true })
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('folder created')
// })
// console.log('end')
//fs.rmdir(path.resolve(__dirname, 'dir'))
// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'fdfdf df5 55 ', (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('file writed')
// })
// fs.appendFile(path.resolve(__dirname, 'test.txt'), 'addd to endd ', (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('file writed')
// })
const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message);
        }
        resolve()
    }))
}
const apppendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return reject(err.message);
        }
        resolve()
    }))
}
const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            return reject(err.message);
        }
        resolve(data)
    }))
}
const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
            return reject(err.message);
        }
        resolve()
    }))
}
// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
//     .then(() => apppendFileAsync(path.resolve(__dirname, 'test.txt'), '\n123\n'))
//     .then(() => apppendFileAsync(path.resolve(__dirname, 'test.txt'), '456\n'))
//     .then(() => apppendFileAsync(path.resolve(__dirname, 'test.txt'), '789'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then(data => console.log(data))
//     .catch(err => console.log('err'))
//     .then(removeFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then(() => console.log('deleted'))
const text = process.env.TEXT || ''
console.log(text)
writeFileAsync(path.resolve(__dirname, 'test.txt'), text)
    .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `number of words is : ${count}`))
