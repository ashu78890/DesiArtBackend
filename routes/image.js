// const fs = require('fs');
// const Jimp = require('jimp');
// const { ExifTool } = require('exiftool-vendored');

// const targetSize = 1024 * 1024; // 1 MB
// const targetDimensionSize = {
//   width: 1920,
//   height: 1080
// }

// async function chnageDPIAndSave(dpi, image, outputPath) {
//   await image.writeAsync(outputPath);
//   // Set the DPI using Exiftool
//   const exiftool = new ExifTool();
//   await exiftool.write(outputPath, {
//     XResolution: dpi,
//     YResolution: dpi,
//     ResolutionUnit: 'inches',
//   }, ['-overwrite_original']);
// }

// async function checkAndChangeQuality(imageData) {
//   const currentSize = (await imageData.getBufferAsync(Jimp.AUTO)).length
//   if (currentSize >= targetSize) {
//     let quality = Math.floor((targetSize / currentSize) * 100);
//     imageData.quality(quality);
//   }
// }

// async function checkAndResizeImage(imageData) {
//   const { width: imageWidth, height: imageHeight } = imageData.bitmap;
//   if (imageWidth > targetDimensionSize.width || imageHeight > targetDimensionSize.height) {
//     const aspectRatio = imageWidth / imageHeight;
//     let newWidth, newHeight;
//     if (aspectRatio > targetDimensionSize.width / targetDimensionSize.height) {
//       newWidth = targetDimensionSize.width;
//       newHeight = Math.round(targetDimensionSize.width / aspectRatio);
//     } else {
//       newHeight = targetDimensionSize.height;
//       newWidth = Math.round(targetDimensionSize.height * aspectRatio);
//     }
//     // Resize the image
//     imageData.resize(newWidth, newHeight);
//   }
// }

// async function changeImageSizeAndQuality(filename) {
//   const imageData = await Jimp.read(filename);
//   await checkAndChangeQuality(imageData);
//   await checkAndResizeImage(imageData);
//   const finalImageData = await imageData.getBufferAsync(Jimp.AUTO)
//   await fs.writeFileSync("case1.jpg", finalImageData);
// }

// async function changeImageSizeAndDPI(filename) {
//   const imageData = await Jimp.read(filename);
//   await checkAndResizeImage(imageData);
//   await chnageDPIAndSave(150, imageData, "case2.jpg");
// }

// async function changeImageQualityAndDPI(filename) {
//   const imageData = await Jimp.read(filename);
//   await checkAndChangeQuality(imageData);
//   await chnageDPIAndSave(150, imageData, "case3.jpg");
// }

// async function changeAll(filename) {
//   const imageData = await Jimp.read(filename);
//   await checkAndChangeQuality(imageData);
//   await checkAndResizeImage(imageData);
//   await chnageDPIAndSave(150, imageData, "case4.jpg");
// }


// async function main(filename) {
//   await changeImageSizeAndQuality(filename);
//   await changeImageSizeAndDPI(filename);
//   await changeImageQualityAndDPI(filename);
//   await changeAll(filename)
//   process.exit(0);
// }

// main("1.jpg");


// const fs = require('fs');
// const Jimp = require('jimp');
// const { ExifTool } = require('exiftool-vendored');

// const targetSize = 1024 * 1024; // 1 MB
// const targetDimensionSize = {
//   width: 1920,
//   height: 1080
// };

// async function chnageDPIAndSave(dpi, image, outputPath) {
//   await image.writeAsync(outputPath);
//   // Set the DPI using Exiftool
//   const exiftool = new ExifTool();
//   await exiftool.write(outputPath, {
//     XResolution: dpi,
//     YResolution: dpi,
//     ResolutionUnit: 'inches',
//   }, ['-overwrite_original']);
// }

// async function checkAndChangeQuality(imageData) {
//   const currentSize = (await imageData.getBufferAsync(Jimp.AUTO)).length;
//   if (currentSize >= targetSize) {
//     let quality = Math.floor((targetSize / currentSize) * 100);
//     imageData.quality(quality);
//   }
// }

// async function checkAndResizeImage(imageData) {
//   const { width: imageWidth, height: imageHeight } = imageData.bitmap;
//   if (imageWidth > targetDimensionSize.width || imageHeight > targetDimensionSize.height) {
//     const aspectRatio = imageWidth / imageHeight;
//     let newWidth, newHeight;
//     if (aspectRatio > targetDimensionSize.width / targetDimensionSize.height) {
//       newWidth = targetDimensionSize.width;
//       newHeight = Math.round(targetDimensionSize.width / aspectRatio);
//     } else {
//       newHeight = targetDimensionSize.height;
//       newWidth = Math.round(targetDimensionSize.height * aspectRatio);
//     }
//     // Resize the image
//     imageData.resize(newWidth, newHeight);
//   }
// }

// // async function ensure24Bit(imageData) {
// //   // Convert the image to RGB (24-bit) by ensuring no alpha channel
// //   imageData.rgba(false);
// // }

// async function changeImageSizeAndQuality(filename) {
//   const imageData = await Jimp.read(filename);
//   await checkAndChangeQuality(imageData);
//   await checkAndResizeImage(imageData);
//   // await ensure24Bit(imageData);
//   const finalImageData = await imageData.getBufferAsync(Jimp.AUTO);
//   await fs.writeFileSync("case1.jpg", finalImageData);
//   console.log('case1.jpg processed and ensured 24-bit color depth.');
// }

// async function changeImageSizeAndDPI(filename) {
//   const imageData = await Jimp.read(filename);
//   await checkAndResizeImage(imageData);
//   // await ensure24Bit(imageData);
//   await chnageDPIAndSave(150, imageData, "case2.jpg");
//   console.log('case2.jpg processed and ensured 24-bit color depth.');
// }

// async function changeImageQualityAndDPI(filename) {
//   const imageData = await Jimp.read(filename);
//   await checkAndChangeQuality(imageData);
//   // await ensure24Bit(imageData);
//   await chnageDPIAndSave(150, imageData, "case3.jpg");
//   console.log('case3.jpg processed and ensured 24-bit color depth.');
// }

// async function changeAll(filename) {
//   const imageData = await Jimp.read(filename);
//   await checkAndChangeQuality(imageData);
//   await checkAndResizeImage(imageData);
//   // await ensure24Bit(imageData);
//   await chnageDPIAndSave(150, imageData, "case4.jpg");
//   console.log('case4.jpg processed and ensured 24-bit color depth.');
// }

// async function main(filename) {
//   await changeImageSizeAndQuality(filename);
//   await changeImageSizeAndDPI(filename);
//   await changeImageQualityAndDPI(filename);
//   await changeAll(filename);

//   process.exit(0);
// }

// main("door.png");


const fs = require('fs');
const Jimp = require('jimp');
const { ExifTool } = require('exiftool-vendored');

const targetSize = 1024 * 1024; // 1 MB
const targetDimensionSize = {
  width: 1920,
  height: 1080
};

async function chnageDPIAndSave(dpi, image, outputPath) {
  await image.writeAsync(outputPath);
  // Set the DPI using Exiftool
  const exiftool = new ExifTool();
  await exiftool.write(outputPath, {
    XResolution: dpi,
    YResolution: dpi,
    ResolutionUnit: 'inches',
  }, ['-overwrite_original']);
}

async function checkAndChangeQuality(imageData) {
  const currentSize = (await imageData.getBufferAsync(Jimp.AUTO)).length;
  if (currentSize >= targetSize) {
    let quality = Math.floor((targetSize / currentSize) * 100);
    imageData.quality(quality);
  }
}

async function checkAndResizeImage(imageData) {
  const { width: imageWidth, height: imageHeight } = imageData.bitmap;
  if (imageWidth > targetDimensionSize.width || imageHeight > targetDimensionSize.height) {
    const aspectRatio = imageWidth / imageHeight;
    let newWidth, newHeight;
    if (aspectRatio > targetDimensionSize.width / targetDimensionSize.height) {
      newWidth = targetDimensionSize.width;
      newHeight = Math.round(targetDimensionSize.width / aspectRatio);
    } else {
      newHeight = targetDimensionSize.height;
      newWidth = Math.round(targetDimensionSize.height * aspectRatio);
    }
    // Resize the image
    imageData.resize(newWidth, newHeight);
  }
}

// async function ensure24Bit(imageData) {
//   // Convert the image to RGB (24-bit) by ensuring no alpha channel
//   imageData.rgba(false);
// }

async function changeImageSizeAndQuality(filename) {
  const imageData = await Jimp.read(filename);
  await checkAndChangeQuality(imageData);
  await checkAndResizeImage(imageData);
  // await ensure24Bit(imageData);
  const finalImageData = await imageData.getBufferAsync(Jimp.MIME_PNG);
  await fs.writeFileSync("case1.png", finalImageData);
  console.log('case1.png processed and ensured 24-bit color depth.');
}

async function changeImageSizeAndDPI(filename) {
  const imageData = await Jimp.read(filename);
  await checkAndResizeImage(imageData);
  // await ensure24Bit(imageData);
  await chnageDPIAndSave(150, imageData, "case2.png");
  console.log('case2.png processed and ensured 24-bit color depth.');
}

async function changeImageQualityAndDPI(filename) {
  const imageData = await Jimp.read(filename);
  await checkAndChangeQuality(imageData);
  // await ensure24Bit(imageData);
  await chnageDPIAndSave(150, imageData, "case3.png");
  console.log('case3.png processed and ensured 24-bit color depth.');
}

async function changeAll(filename) {
  const imageData = await Jimp.read(filename);
  await checkAndChangeQuality(imageData);
  await checkAndResizeImage(imageData);
  // await ensure24Bit(imageData);
  await chnageDPIAndSave(150, imageData, "case4.png");
  console.log('case4.png processed and ensured 24-bit color depth.');
}

async function main(filename) {
  await changeImageSizeAndQuality(filename);
  await changeImageSizeAndDPI(filename);
  await changeImageQualityAndDPI(filename);
  await changeAll(filename);

  process.exit(0);
}

main("door.png");

