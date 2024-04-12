const { exec, spawn, fork, execFile } = require('node:child_process');
const child = spawn('find', ['.', '-type', 'f']);
const childFork = fork('someTask.js');
const executablePath = 'curl';
const args = ['https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl'];

// exec('ls -lh', (error, stdout, stderr) => {
//     if (error) {
//         console.log(`exec error: ${error}`);
//         return;
//     }

//     console.log(`stdout1: ${stdout}`);
//     console.log(`stderr1: ${stderr}`);
// });

// child.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });

// child.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
// });

// child.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
// });

// childFork.on('message', (message) => {
//     console.log('Revieved message from child process ', message);
// });

// childFork.send({ world: 'hello' });

execFile(executablePath, args, (error, stdout, stderr) => {
    if (error) {
        console.error(error);
        return;
    }

    if (stderr) {
        console.log(stderr);
    }

    console.log(stdout);
});
