import boxen from "boxen";
import figlet from "figlet";

// display title
export const displayTitle = async () => {
  await new Promise((resolve, reject) => {
    figlet("F A V I C O", function (err, data) {
      if (err) {
        reject(err);
      } else {
        console.log(data);
        resolve();
      }
    });
  });
};

// error message
export const displayErrorMessage = (message) => {
  console.log(
    boxen(message, {
      title: "ERROR",
      titleAlignment: "center",
      padding: 1,
      margin: 1,
      borderStyle: "double",
      borderColor: "red",
    })
  );
};

// success message
export const displaySuccessMessage = (message) => {
  console.log(
    boxen(message, {
      title: "SUCCESS",
      titleAlignment: "center",
      padding: 1,
      margin: 1,
      borderStyle: "double",
      borderColor: "cyan",
    })
  );
};
