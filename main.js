// EAD (Encryption and Decryption System by Khalid Zikirullah)
// Encrypt Code part
var ecnryptMessage = document.getElementById("encrypt-msg"),
    ecnryptKey = document.getElementById("encrypt-key"),
    ecnryptButton = document.getElementById("encrypt-btn"),
    enCopyBoard = document.getElementById("enc-clipborad"),
    encryptResult = document.getElementById("encrypt-result");
// Decrypt Code part
var decryptMessage = document.getElementById("decrypt-msg"),
    decryptKey = document.getElementById("decrypt-key"),
    deCopyBoard = document.getElementById("dec-clipborad"),
    decryptButton = document.getElementById("decrypt-btn"),
    decryptResult = document.getElementById("decrypt-result");

// Encryption Function

function encrypt(message,key){
	var messages = [];
	var code = "";
	var k = parseInt(key);
	message.split("").forEach(function(msg){
		messages.push(msg.charCodeAt(0) + k);
	});

	messages.forEach(function(msg){
		code += String.fromCharCode(msg);
	});

	encryptResult.innerHTML = `${code}`;
}

ecnryptButton.addEventListener("click", function(e){
	e.preventDefault();

	if(ecnryptMessage.value == "") return alert("Please enter a message");
	if(ecnryptKey.value == "") return alert("Please enter a key");

	encrypt(ecnryptMessage.value,ecnryptKey.value);
});

// Clip board

enCopyBoard.addEventListener("click",function(e){
	e.preventDefault();

	encryptResult.select();
	document.execCommand('copy');

	alert("Copied!");
});


// Decryption Function

function decrypt(message,key){
	var messages = [];
	var code = "";
	var k = parseInt(key);
	message.split("").forEach(function(msg){
		messages.push(msg.charCodeAt(0) - k);
	});

	messages.forEach(function(msg){
		code += String.fromCharCode(msg);
	});

	decryptResult.innerHTML = `${code}`;
}

decryptButton.addEventListener("click", function(e){
	e.preventDefault();

	if(decryptMessage.value == "") return alert("Please enter a message");
	if(decryptKey.value == "") return alert("Please enter a key");

	decrypt(decryptMessage.value,decryptKey.value);
});