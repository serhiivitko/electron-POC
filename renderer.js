let child = require('child_process').execFile
let executablePath = "helloworld.exe"

const buttonClicked = () => {
	child(executablePath, function(err, data) {
		if(err){
		  alert(err)
		  return
		}

		document.getElementById("block-for-text").innerHTML = data.toString()
	})
}

document.getElementById("button-to-click").addEventListener("click", buttonClicked);