import os from "os";
import fs from "fs";
import path from "path";

// set up the main directory for favico results
const homeDir = os.homedir();
const desktopDir = path.join(homeDir, "Desktop");

// this is the main folder where all CLI results will be stored
const favicoDir = path.join(desktopDir, "favico");

// Create the main directory if it doesn't exist
if (!fs.existsSync(favicoDir)) {
  fs.mkdirSync(favicoDir);
}

// generate results directory
const generateResultsDirectory = async () => {
  /*
    Find the highest numbered directory name in the favico directory
    e.g result_001, result_002
  */
  let highestIndex = 0;
  fs.readdirSync(favicoDir).forEach((name) => {
    if (name.startsWith("result_")) {
      const index = parseInt(name.slice(7), 10);
      if (!isNaN(index) && index > highestIndex) {
        highestIndex = index;
      }
    }
  });

  // Determine the name for the new result directory
  const resultName = `result_${(highestIndex + 1).toString().padStart(3, "0")}`;
  const resultDir = path.join(favicoDir, resultName);
  fs.mkdirSync(resultDir);

  return resultDir;
};

export const setUpFaviconDirectory = async () => {
  // const resultsDir = path.join(mainDir, "results");
  const resultsDir = await generateResultsDirectory();
  const imagesDir = path.join(resultsDir, "images");
  const filesDir = path.join(resultsDir, "files");

  if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir);
  }

  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
  }

  if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir);
  }

  return { resultsDir: resultsDir, imagesDir: imagesDir, filesDir: filesDir };
};
