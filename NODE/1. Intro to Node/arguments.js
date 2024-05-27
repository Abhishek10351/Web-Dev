const args = process.argv.slice(2);
for (let arg of args) {
    console.log(`Hi there, ${arg}`)
}
// - process is used to get information about the current process like environment variables, current directory, etc.

// - process.argv is an array that contains the command line arguments passed to the program.