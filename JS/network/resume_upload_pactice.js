let fileId = file.name + '-' + file.size + '-' + +file.lastModifiedDate;

let response = await fetch('status', {
	headers: {
		'X-File-Id': fileId,
	},
});

let startByte = +(await response.text());

xhr.open("POST", "upload");

xhr.setRequestHeader('X-File-Id', fileId);

xhr.setRequestHeader('X-Start-Byte', startByte);

xhr.upload.onprogress = (e) => {
  console.log(`Uploaded ${startByte + e.loaded} of ${startByte + e.total}`);
};

xhr.send(file.slice(startByte));