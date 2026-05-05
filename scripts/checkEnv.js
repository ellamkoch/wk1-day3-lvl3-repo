// small node.js script used only in the terminal. its job is to verify the
// environment and to show students how 'node' executes js files

console.log ("=== Node.js environment check ===");

// Node version (useful to debug version - related issues)
console.log ("Node version:", process.version);

// Current working directory (the folder where the script is executed)
console.log("Current working directory:", process.cwd());

// any extra arguments passed to this script (after the file name)
console.log("Arguments Array:", process.argv);

console.log ("Arguments passed to this script:", process.argv.slice(2));

//Platform information (i.e., 'darwin', 'win32', 'linux')
console.log("Platform:", process.platform);

// print the process object
// console.log("Process Object:", process);

