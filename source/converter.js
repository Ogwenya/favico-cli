// convert the image size (provided in bytes) to MB, KB or leave it to bytes
export const convertSize = (fileSizeInBytes) => {
  let fileSize;
  let unit;

  if (fileSizeInBytes >= 1000000) {
    fileSize = (fileSizeInBytes / 1000000).toFixed(1);
    unit = "MB";
  } else if (fileSizeInBytes >= 1000) {
    fileSize = (fileSizeInBytes / 1000).toFixed(1);
    unit = "KB";
  } else {
    fileSize = fileSizeInBytes;
    unit = "bytes";
  }

  return `${fileSize}${unit}`;
};
