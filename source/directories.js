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

/* 
  generate results directory based on result type
  result type can either be: 'favicon' or  'compressor
    - 'favicon' for generating favicon
    - 'compressor' for image compression
 */
const generateResultsDirectory = (result_type) => {
  /*
    Find the highest numbered directory name in the result directory
    e.g result_001, result_002 favicon_001, compressor_001
  */

  const folder_prefix = `${result_type}_`;
  let highestIndex = 0;
  fs.readdirSync(favicoDir).forEach((name) => {
    if (name.startsWith(folder_prefix)) {
      const index = parseInt(name.slice(name.indexOf("_") + 1));

      if (!isNaN(index) && index > highestIndex) {
        highestIndex = index;
      }
    }
  });

  // Determine the name for the new result directory
  const resultName = `${folder_prefix}${(highestIndex + 1)
    .toString()
    .padStart(3, "0")}`;
  const resultDir = path.join(favicoDir, resultName);
  fs.mkdirSync(resultDir);

  return resultDir;
};

export const setUpFaviconDirectory = async () => {
  const resultsDir = await generateResultsDirectory("favicon");
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

export const setUpCompressorDirectory = async () => {
  const resultsDir = await generateResultsDirectory("compressor");
  if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir);
  }
  return resultsDir;
};
