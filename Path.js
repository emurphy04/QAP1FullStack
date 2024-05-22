// Ethan Murphy
// Fullstack Javascript
// May 22nd 2024

// Path:
// The Path module allows us to use file paths in our project to our advantage.

// The Code:

import path from "path"

const filePath = 'C:/Users/Ethan/documents/passwords.txt'
const directory = 'C:/Users/Ethan/documents'

console.log(path.join(directory, 'passwords.txt')) // This will print the file directory
console.log(path.resolve(filePath)) // this will print the absolute path for the file
console.log(path.basename(filePath)) // this will print the file name