import fs from "fs";
import path from "path";
import { favicons } from "favicons";
import figlet from "figlet";
import { setUpFaviconDirectory } from "./directories.js";
import { displayErrorMessage, displaySuccessMessage } from "./messages.js";

// ######################################
// ########## GENERATE FAVICON ##########
// ######################################
export const generateFavicon = (imagePath) => {
  // cli title
  figlet("F A V I C O", function (err, data) {
    if (err) {
      displayErrorMessage("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });

  const configuration = {
    path: "/",
    appName: null,
    appShortName: null,
    appDescription: null,
    developerName: null,
    developerURL: null,
    cacheBustingQueryParam: null,
    dir: "auto",
    lang: "en-US",
    background: "#fff",
    theme_color: "#fff",
    appleStatusBarStyle: "black-translucent",
    display: "standalone",
    orientation: "any",
    scope: "/",
    start_url: "/?homescreen=1",
    preferRelatedApplications: false,
    relatedApplications: undefined,
    version: "1.0",
    pixel_art: false,
    loadManifestWithCredentials: false,
    manifestMaskable: false,
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: false,
      favicons: true,
      windows: false,
      yandex: false,
    },
  };
  // Read the image file
  fs.readFile(imagePath, async function (err, data) {
    if (err) {
      displayErrorMessage("Pleaase ensure provided path is of an image");

      return;
    }
    // Use the image data to generate the favicon
    try {
      const response = await favicons(data, configuration);
      //   create results path
      const { resultsDir, imagesDir, filesDir } = await setUpFaviconDirectory();
      const htmlBasename = "index.html";

      // generate images
      await Promise.all(
        response.images.map(async (image) => {
          fs.writeFileSync(path.join(imagesDir, image.name), image.contents);
        })
      );
      // generate files (e.g manifest.webmanifest and browserconfig.xml)
      await Promise.all(
        response.files.map(async (file) => {
          fs.writeFileSync(path.join(filesDir, file.name), file.contents);
        })
      );
      //   generate sample html document
      fs.writeFileSync(
        path.join(resultsDir, htmlBasename),
        response.html.join("\n")
      );

      displaySuccessMessage(`Icons Saved in: ${resultsDir}`);
    } catch (error) {
      displayErrorMessage(error.message);
    }
  });
};
