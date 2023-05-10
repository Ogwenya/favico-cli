import boxen from "boxen";

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
