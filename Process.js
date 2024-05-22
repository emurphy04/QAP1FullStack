// Ethan Murphy
// Fullstack Javascript
// May 22nd 2024

// Process:
// The Process module gives us information about the process and it is usually used to access environment variables

// The Code:

process.env.VAR = 'Hello i am a variable'

console.log(process.env.VAR) // this prints the value of the variable specified
console.log(process.pid) // this will print the process id
console.log(process.platform) // this will print the operating system name