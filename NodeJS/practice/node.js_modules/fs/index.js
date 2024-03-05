const fs = require('node:fs');
const path = require('node:path');

const content = 'Some text jsjsjsjsj';
const filePath = `${path.join(__dirname)}/file.txt`;
const dirPath = `${path.join(__dirname)}/newDir`;
const symlinkPath = `${path.join(__dirname)}/linkra`;

const readStream = fs.createReadStream(filePath, 'utf-8');

readStream.on('data', (chunk) => {
    // console.log('data', chunk);
});

readStream.on('end', () => {
    // console.log('Over.');
});

fs.writeFile(filePath, content, (err) => {
    if (err) {
        console.error(err);
        return;
    }

    // console.log('File was created.');
});

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // console.log(data);
});

fs.appendFile(filePath, 'Vincent Palmer09', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    // console.log('File appended.');
});

fs.watch('file.txt', (eventType, fileName) => {
    // console.log(`Event emitted: ${eventType} in a file : ${fileName}`);
});

fs.chmod('file.txt', 0o644, (err) => {
    if (err) {
        console.error(err);
    }
    // console.log('Rights has been changed.');
});

fs.access(dirPath, fs.constants.F_OK, (err) => {
    if (err) {
        fs.mkdir(dirPath, (err) => {
            if (err) {
                throw err;
            }

            // console.log('Dir was created.');
        });
    }

    fs.writeFile(`${dirPath}/file.txt`, 'Inside a new dir', (err) => {
        if (err) {
            console.error(err);
            return;
        }

        // console.log('Inner file was created.');
    });
});

fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.error(err);
    }

    // console.log(`Dir files`, files[0]);
    // fs.access(dirPath, fs.constants.F_OK, (err) => {
    //     if (!err) {
    //         fs.rm(dirPath, { recursive: true }, (err) => {
    //             if (err) {
    //                 console.error(err);
    //             }
    //             // console.log('Dir was removed');
    //         });
    //     }
    // });
});

fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error(err);
    }

    console.log(`File attr: ${JSON.stringify(stats)}`);
});

fs.symlink(dirPath, symlinkPath, (err) => {
    if (err) {
        console.error(err);
    }

    console.log('Symlink was created.');
});

fs.readlink(symlinkPath, (err, linkString) => {
    if (err) {
        console.error(err);
    }

    console.log(`Link lead to ${linkString}`);
});

// fs.lstat(symlinkPath, (err, stats) => {
//     if (err) {
//         console.error(err);
//     }

//     if(stats.isSymbolicLink()) {
//         console.log('This is a symbolyc link');
//     } else {
//         console.log(`File with attr: ${JSON.stringify(stats)}`);
//     }
// });

// const target = './original.txt'; // Путь к оригинальному файлу
// const path = './link.txt'; // Путь, где будет создана символическая ссылка

fs.symlink(symlinkPath, filePath, 'file', (err) => {
    if (err) throw err;
    console.log(`Символическая ссылка '${path}' на файл '${target}' создана`);
  });