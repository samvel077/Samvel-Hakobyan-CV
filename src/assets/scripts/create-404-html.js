const fs = require('fs')
const filePath = 'docs/index.html'
const copy = 'docs/404.html'

fs.copyFile(filePath, copy, (error) => {
    if (error) {
        throw error
    } else {
        console.log('File has been moved to another folder.')
    }
})
