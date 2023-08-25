let fileId = file.name + '-' + file.size + '-' + +file.lastModifiedDate;

let response = await fetch('status', {
	headers: {
		'X-File-Id': fileId,
	},
});
// сервер получил столько-то байтов
let startByte = +(await response.text());

xhr.open("POST", "upload");

// Идентификатор файла, чтобы сервер знал, что мы загружаем
xhr.setRequestHeader('X-File-Id', fileId);

// Номер байта, начиная с которого мы будем отправлять данные.
// Таким образом, сервер поймёт, с какого момента мы возобновляем загрузку
xhr.setRequestHeader('X-Start-Byte', startByte);

xhr.upload.onprogress = (e) => {
  console.log(`Uploaded ${startByte + e.loaded} of ${startByte + e.total}`);
};

// файл file может быть взят из input.files[0] или другого источника
xhr.send(file.slice(startByte));