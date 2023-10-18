function copy2clipboard() {
  var clipboard = new Clipboard("#copy-button");

  clipboard.on("success", function (e) {
    console.log("copy success");

    alert("copy success");
  });

  clipboard.on("error", function (e) {
    alert("copy fail");
  });
}
