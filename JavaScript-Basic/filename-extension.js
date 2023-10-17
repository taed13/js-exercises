// 14. Write a JavaScript exercise to get the filename extension.

function getFilenameExtension() {
  var filename = document.getElementById("filename").value;
  var extension = filename.split(".").pop();
  document.getElementById("extension").innerHTML = extension;
}
