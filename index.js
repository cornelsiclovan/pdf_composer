const PDFMerger = require("pdf-merger-js");
const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "Documents");

var merger = new PDFMerger();

let bool = false;

const mergePdfs = async (file) => {
  const filePath = path.join(__dirname, "Documents");
  const fileName = path.join(filePath, file);

  // aici
  console.log(file);
  await merger.add(fileName);

  //------------------------
  if (bool) {
    const pathSave = path.join(__dirname, "Rezultat");
    const fileName = path.join(pathSave, "rezultat.pdf");

    await merger.save(fileName);
  }
};

const readDir = () => {
  fs.readdir(directoryPath, async function (err, files) {
    if (err) {
      return console.log("Nu pot sa scanez directorul");
    }

    files.forEach(function (file) {
      console.log(file);
      mergePdfs(file);
    });

    bool = true;
  });
};

readDir();
