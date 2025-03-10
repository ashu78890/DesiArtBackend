// const express = require('express');
// const PptxGenJS = require('pptxgenjs');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Server is running');
// });

// app.get('/create-ppt', (req, res) => {
//   let pptx = new PptxGenJS();

//   let slide = pptx.addSlide();

//   // Add the folderCorner shape to the slide
//   slide.addShape(pptx.shapes.FOLDER_CORNER, {
//     x: 1.0, y: 1.0, w: 3.0, h: 2.0,
//     fill: { color: 'FFC000' },
//     line: { color: '000000' }
//   });

//   pptx.write('folderCornerShape.pptx').then(fileName => {
//     res.download(fileName, (err) => {
//       if (err) {
//         console.error("Error downloading the file:", err);
//       } else {
//         console.log("File downloaded successfully");
//       }
//     });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


// const express = require('express');
// const PptxGenJS = require('pptxgenjs');
// const path = require('path');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Server is running');
// });

// app.get('/create-ppt', async (req, res) => {
//   let pptx = new PptxGenJS();

//   let slide = pptx.addSlide();

//   // Add the folderCorner shape to the slide
//   slide.addShape(pptx.shapes.FOLDER_CORNER, {
//     x: 1.0, y: 1.0, w: 3.0, h: 2.0,
//     fill: { color: 'FFC000' },
//     line: { color: '000000' }
//   });

//   // Write the file to disk
//   const filePath = path.join(__dirname, 'folderCornerShape.pptx');
//   try {
//     await pptx.writeFile({ fileName: filePath });
//     res.download(filePath, 'folderCornerShape.pptx', (err) => {
//       if (err) {
//         console.error("Error downloading the file:", err);
//         res.status(500).send('Error downloading the file');
//       }
//     });
//   } catch (err) {
//     console.error("Error writing the file:", err);
//     res.status(500).send('Error writing the file');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


const express = require('express');
const PptxGenJS = require('pptxgenjs');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/create-ppt', async (req, res) => {
  let pptx = new PptxGenJS();

  let slide = pptx.addSlide();

  // Add the FOLDED_CORNER shape to the slide
//   try {
//     slide.addShape(pptx.shapes.FOLDED_CORNER, {
//       x: 1.0, y: 1.0, w: 3.0, h: 2.0,
//       fill: { color: 'FFC000' },
//       line: { color: '000000' }
//     });
//   } catch (err) {
//     console.error("Error adding shape:", err);
//     res.status(500).send('Error adding shape: ' + err.message);
//     return;
//   }

//   const rectOptions = {
//     x: 1, y: 1, w: 6, h: 4,
//     fill: { color: "FFFFFF" },
//     line: { color: "363636", width: 1.5 },
//     rectRadius: { tl: 15, tr: 15, br: 0, bl: 0 } // Adjust the tl (top-left) and tr (top-right) for rounded corners
// };

// // Add the rectangle to the slide
// slide.addShape(pptx.shapes.RECTANGLE, rectOptions);


// const roundedRectOptions = {
//     x: 1, y: 1, w: 6, h: 4,
//     fill: { color: "FFFFFF" },
//     line: { color: "363636", width: 1.5 },
//     rectRadius: { tl: 27, tr: 27, br: 0, bl: 0 } // Top-left (tl) and top-right (tr) corners set to 27 for rounded corners
// };

// // Add the rounded rectangle to the slide
// slide.addShape(pptx.shapes.RECTANGLE, roundedRectOptions);

// // Rectangle properties with square corners for the bottom
// const squareRectOptions = {
//     x: 1, y: 5, w: 6, h: 4,
//     fill: { color: "FFFFFF" },
//     line: { color: "363636", width: 1.5 },
//     rectRadius: { tl: 0, tr: 0, br: 0, bl: 0 } // All corners set to 0 for square corners
// };

// // Add the square rectangle to the slide
// slide.addShape(pptx.shapes.RECTANGLE, squareRectOptions);



  // Write the file to disk
  const filePath = path.join(__dirname, 'folderCornerShape.pptx');
  try {
    await pptx.writeFile({ fileName: filePath });
    res.download(filePath, 'folderCornerShape.pptx', (err) => {
      if (err) {
        console.error("Error downloading the file:", err);
        res.status(500).send('Error downloading the file');
      }
    });
  } catch (err) {
    console.error("Error writing the file:", err);
    res.status(500).send('Error writing the file: ' + err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});




















// const fs = require('fs');
// const Jimp = require('jimp');
// const PptxGenJS = require('pptxgenjs');

// async function createPptWithClippedImage(inputImagePath, outputPptPath) {
//     try {
//         // Load the image using Jimp
//         const image = await Jimp.read(inputImagePath);
//         const width = image.bitmap.width;
//         const height = image.bitmap.height;

//         // Create a mask with a capsule shape at the top corner
//         const mask = new Jimp(width, height, 0xFFFFFFFF); // Fully opaque white mask
//         const radius = Math.min(width, height) / 4;

//         mask.scan(0, 0, width, height, (x, y, idx) => {
//             const dist = Math.sqrt((x - radius) ** 2 + (y - radius) ** 2);
//             if (dist > radius) {
//                 mask.bitmap.data[idx + 3] = 0; // Set alpha to 0 for pixels outside the capsule shape
//             }
//         });

//         // Apply the mask to the image
//         image.mask(mask, 0, 0);

//         // Get the modified image as a buffer
//         const buffer = await image.getBufferAsync(Jimp.MIME_PNG);

//         // Create a new PowerPoint presentation
//         const pptx = new PptxGenJS();

//         // Add a slide to the presentation
//         const slide = pptx.addSlide();

//         // Add the modified image to the slide
//         slide.addImage({
//             data: `data:image/png;base64,${buffer.toString('base64')}`,
//             x: 0.5,
//             y: 0.5,
//             w: width / 96, // Convert pixels to inches (assuming 96 DPI)
//             h: height / 96
//         });

//         // Save the presentation
//         await pptx.writeFile(outputPptPath);
//         console.log('Presentation created successfully!');
//     } catch (err) {
//         console.error('Error:', err);
//     }
// }

// // Example usage
// createPptWithClippedImage('routes/door.png', 'output.pptx')
//     .then(() => console.log('Done'))
//     .catch(err => console.error('Error:', err));

// const fs = require('fs');
// const Jimp = require('jimp');
// const PptxGenJS = require('pptxgenjs');

// async function createPptWithClippedImage(inputImagePath, outputPptPath) {
//     try {
//         // Load the image using Jimp
//         const image = await Jimp.read(inputImagePath);
//         const width = image.bitmap.width;
//         const height = image.bitmap.height;

//         // Create a mask with a capsule shape at the top corner
//         const mask = new Jimp(width, height, 0x00000000); // Fully transparent mask
//         const radius = Math.min(width, height) / 2;

//         // Draw the capsule shape
//         mask.scan(0, 0, width, height, (x, y, idx) => {
//             const topRadius = Math.sqrt((x - radius) ** 2 + (y - radius) ** 2);
//             if ((y < radius && topRadius <= radius) || (y >= radius && y < height)) {
//                 mask.bitmap.data[idx + 3] = 255; // Set alpha to 255 for pixels inside the capsule shape
//             }
//         });

//         // Apply the mask to the image
//         image.mask(mask, 0, 0);

//         // Get the modified image as a buffer
//         const buffer = await image.getBufferAsync(Jimp.MIME_PNG);

//         // Create a new PowerPoint presentation
//         const pptx = new PptxGenJS();

//         // Add a slide to the presentation
//         const slide = pptx.addSlide();

//         // Add the modified image to the slide
//         slide.addImage({
//             data: `data:image/png;base64,${buffer.toString('base64')}`,
//             x: 0.5,
//             y: 0.5,
//             w: width / 96, // Convert pixels to inches (assuming 96 DPI)
//             h: height / 96
//         });

//         // Save the presentation
//         await pptx.writeFile(outputPptPath);
//         console.log('Presentation created successfully!');
//     } catch (err) {
//         console.error('Error:', err);
//     }
// }

// // Example usage
// createPptWithClippedImage('routes/door.png', 'output.pptx')
//     .then(() => console.log('Done'))
//     .catch(err => console.error('Error:', err));

// const express = require('express');
// const Jimp = require('jimp');
// const PptxGenJS = require('pptxgenjs');
// const path = require('path');
// const fs = require('fs');

// const app = express();
// const port = 3001;

// const cropImageWithRadius = async (inputPath, outputPath, radius) => {
//   const image = await Jimp.read(inputPath);

//   const mask = new Jimp(image.bitmap.width, image.bitmap.height, (err, mask) => {
//     if (err) throw err;

//     mask.scan(0, 0, mask.bitmap.width, mask.bitmap.height, function(x, y, idx) {
//       const distance = Math.min(
//         Math.sqrt(Math.pow(x, 2) + Math.pow(y - radius, 2)),
//         Math.sqrt(Math.pow(x - mask.bitmap.width, 2) + Math.pow(y - radius, 2))
//       );

//       const alpha = distance <= radius ? 255 : 0;
//       this.bitmap.data[idx + 3] = alpha;
//     });

//     image.mask(mask, 0, 0);
//     image.write(outputPath);
//   });
// };

// const createPresentation = (imagePath, presentationPath) => {
//   const pptx = new PptxGenJS();
//   const slide = pptx.addSlide();

//   slide.addImage({
//     path: imagePath,
//     x: 1, // Adjust the x position as needed
//     y: 1, // Adjust the y position as needed
//     w: 5, // Adjust the width as needed
//     h: 3  // Adjust the height as needed
//   });

//   return pptx.writeFile({ fileName: presentationPath });
// };

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/process-image', async (req, res) => {
//   const inputImagePath = path.join(__dirname, 'public', 'routes/door.png'); // Input image path
//   const outputImagePath = path.join(__dirname, 'public', 'cropped-image.png'); // Output image path
//   const presentationPath = path.join(__dirname, 'public', 'presentation.pptx'); // Output presentation path
//   const radius = 50; // Adjust the radius as needed

//   try {
//     await cropImageWithRadius(inputImagePath, outputImagePath, radius);
//     await createPresentation(outputImagePath, presentationPath);
//     res.send('Image processed and presentation created. Check the /public directory.');
//   } catch (error) {
//     res.status(500).send(`Error processing image: ${error.message}`);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


// const Jimp = require('jimp');
// const PptxGenJS = require('pptxgenjs');

// async function cropTopCorners(imagePath, radius, outputPath) {
//     // Load the image
//     const image = await Jimp.read(imagePath);

//     // Get image dimensions
//     const width = image.bitmap.width;
//     const height = image.bitmap.height;

//     // Create a new image with the same dimensions
//     const mask = new Jimp(width, height, 0x00000000); // Transparent mask

//     // Draw a rounded rectangle on the mask
//     mask.scan(0, 0, width, height, (x, y, idx) => {
//         // Check if the pixel is within the top corners circle area
//         const dx1 = x - radius;
//         const dy1 = y - radius;
//         const dx2 = x - (width - radius);
//         const dy2 = y - radius;

//         const inTopLeftCorner = (dx1 * dx1 + dy1 * dy1 <= radius * radius);
//         const inTopRightCorner = (dx2 * dx2 + dy1 * dy1 <= radius * radius);

//         if (y < radius && (inTopLeftCorner || inTopRightCorner)) {
//             // Set alpha to 0 (fully transparent) in the corners
//             mask.setPixelColor(Jimp.rgbaToInt(0, 0, 0, 0), x, y);
//         } else {
//             // Set alpha to 255 (fully opaque) for the rest of the image
//             mask.setPixelColor(Jimp.rgbaToInt(0, 0, 0, 255), x, y);
//         }
//     });

//     // Composite the mask over the image
//     image.mask(mask);

//     // Save the result
//     await image.writeAsync(outputPath);
//     console.log('Image saved to', outputPath);
// }

// async function createPresentationWithImage(imagePath, outputPptxPath) {
//     const pptx = new PptxGenJS();

//     // Create a slide
//     const slide = pptx.addSlide();

//     // Add the image to the slide
//     slide.addImage({ path: imagePath, x: 1, y: 1, w: 6, h: 4 });

//     // Save the presentation
//     pptx.writeFile({ fileName: outputPptxPath })
//         .then(() => {
//             console.log('Presentation saved to', outputPptxPath);
//         })
//         .catch(err => {
//             console.error('Error saving presentation:', err);
//         });
// }

// // Usage example
// (async () => {
//     const imagePath = 'routes/door.png';
//     const processedImagePath = 'routes/door-processed.png'; // Change as needed
//     const pptxPath = 'routes/presentation.pptx'; // Change as needed
//     const radius = 20; // Radius for the rounded corners

//     await cropTopCorners(imagePath, radius, processedImagePath);
//     await createPresentationWithImage(processedImagePath, pptxPath);
// })();



// const Jimp = require('jimp');
// const PptxGenJS = require('pptxgenjs');

// async function cropTopCorners(imagePath, radius, outputPath) {
//     try {
//         // Load the image
//         const image = await Jimp.read(imagePath);
//         console.log('Image loaded successfully.');

//         // Get image dimensions
//         const width = image.bitmap.width;
//         const height = image.bitmap.height;
//         console.log(`Image dimensions: ${width}x${height}`);

//         // Create a new image with the same dimensions
//         const mask = new Jimp(width, height, 0x00000000); // Transparent mask

//         // Draw a rounded rectangle on the mask
//         mask.scan(0, 0, width, height, (x, y, idx) => {
//             const dx1 = x - radius;
//             const dy1 = y - radius;
//             const dx2 = x - (width - radius);
//             const dy2 = y - radius;

//             const inTopLeftCorner = (dx1 * dx1 + dy1 * dy1 <= radius * radius);
//             const inTopRightCorner = (dx2 * dx2 + dy1 * dy1 <= radius * radius);

//             if (y < radius && (inTopLeftCorner || inTopRightCorner)) {
//                 mask.setPixelColor(Jimp.rgbaToInt(0, 0, 0, 0), x, y);
//             } else {
//                 mask.setPixelColor(Jimp.rgbaToInt(0, 0, 0, 255), x, y);
//             }
//         });

//         // Composite the mask over the image
//         image.mask(mask);

//         // Save the result
//         await image.writeAsync(outputPath);
//         console.log('Image saved to', outputPath);
//     } catch (error) {
//         console.error('Error processing image:', error);
//     }
// }

// async function createPresentationWithImage(imagePath, outputPptxPath) {
//     try {
//         const pptx = new PptxGenJS();
//         const slide = pptx.addSlide();
//         slide.addImage({ path: imagePath, x: 1, y: 1, w: 6, h: 4 });
//         await pptx.writeFile({ fileName: outputPptxPath });
//         console.log('Presentation saved to', outputPptxPath);
//     } catch (error) {
//         console.error('Error creating presentation:', error);
//     }
// }

// (async () => {
//     const imagePath = 'routes/door.png';
//     const processedImagePath = 'routes/door-processed.png'; // Change as needed
//     const pptxPath = 'routes/presentation.pptx'; // Change as needed
//     const radius = 20;

//     await cropTopCorners(imagePath, radius, processedImagePath);
//     await createPresentationWithImage(processedImagePath, pptxPath);
// })();


// const Jimp = require('jimp');
// const PptxGenJS = require('pptxgenjs');

// async function cropTopCorners(imagePath, radius, outputPath) {
//     try {
//         // Load the image
//         const image = await Jimp.read(imagePath);
//         console.log('Image loaded successfully.');

//         // Get image dimensions
//         const width = image.bitmap.width;
//         const height = image.bitmap.height;
//         console.log(`Image dimensions: ${width}x${height}`);

//         // Create a new image with the same dimensions
//         const mask = new Jimp(width, height, 0x00000000); // Transparent mask

//         // Draw a rounded rectangle on the mask
//         mask.scan(0, 0, width, height, (x, y, idx) => {
//             const dx1 = x - radius;
//             const dy1 = y - radius;
//             const dx2 = x - (width - radius);
//             const dy2 = y - radius;

//             const inTopLeftCorner = (dx1 * dx1 + dy1 * dy1 <= radius * radius);
//             const inTopRightCorner = (dx2 * dx2 + dy1 * dy1 <= radius * radius);

//             if (y < radius && (inTopLeftCorner || inTopRightCorner)) {
//                 mask.setPixelColor(Jimp.rgbaToInt(0, 0, 0, 0), x, y);
//             } else {
//                 mask.setPixelColor(Jimp.rgbaToInt(0, 0, 0, 255), x, y);
//             }
//         });

//         // Composite the mask over the image
//         image.mask(mask);

//         // Save the result
//         await image.writeAsync(outputPath);
//         console.log('Image saved to', outputPath);
//     } catch (error) {
//         console.error('Error processing image:', error);
//     }
// }

// async function createPresentationWithImage(imagePath, outputPptxPath) {
//     try {
//         const pptx = new PptxGenJS();
//         const slide = pptx.addSlide();

//         // Load the image to get its dimensions
//         const image = await Jimp.read(imagePath);
//         const imgWidth = image.bitmap.width;
//         const imgHeight = image.bitmap.height;

//         // Adjust the image size and position
//         const slideWidth = pptx.layout.slideWidth;
//         const slideHeight = pptx.layout.slideHeight;
//         const scaleFactor = Math.min(slideWidth / imgWidth, slideHeight / imgHeight);
        
//         const scaledWidth = imgWidth * scaleFactor;
//         const scaledHeight = imgHeight * scaleFactor;

//         // Center the image on the slide
//         const x = (slideWidth - scaledWidth) / 2;
//         const y = (slideHeight - scaledHeight) / 2;

//         // Add the image to the slide
//         slide.addImage({ path: imagePath, x: x / 96, y: y / 96, w: scaledWidth / 96, h: scaledHeight / 96 });

//         // Save the presentation
//         await pptx.writeFile({ fileName: outputPptxPath });
//         console.log('Presentation saved to', outputPptxPath);
//     } catch (error) {
//         console.error('Error creating presentation:', error);
//     }
// }

// (async () => {
//     const imagePath = 'routes/door.png';
//     const processedImagePath = 'routes/door-processed.png';
//     const pptxPath = 'routes/presentation.pptx';
//     const radius = 20;

//     await cropTopCorners(imagePath, radius, processedImagePath);
//     await createPresentationWithImage(processedImagePath, pptxPath);
// })();


// const Jimp = require('jimp');
// const PptxGenJS = require('pptxgenjs');

// // Function to crop top corners
// async function cropTopCorners(imagePath, radius, outputPath) {
//     try {
//         // Load the image
//         const image = await Jimp.read(imagePath);
//         console.log('Image loaded successfully.');

//         // Get image dimensions
//         const width = image.bitmap.width;
//         const height = image.bitmap.height;
//         console.log(`Image dimensions: ${width}x${height}`);

//         // Create a new image with the same dimensions
//         const mask = new Jimp(width, height, 0x00000000); // Transparent mask

//         // Draw a rounded rectangle on the mask
//         mask.scan(0, 0, width, height, (x, y, idx) => {
//             const dx1 = x - radius;
//             const dy1 = y - radius;
//             const dx2 = x - (width - radius);
//             const dy2 = y - radius;

//             const inTopLeftCorner = (dx1 * dx1 + dy1 * dy1 <= radius * radius);
//             const inTopRightCorner = (dx2 * dx2 + dy1 * dy1 <= radius * radius);

//             if (y < radius && (inTopLeftCorner || inTopRightCorner)) {
//                 mask.setPixelColor(Jimp.rgbaToInt(0, 0, 0, 0), x, y);
//             } else {
//                 mask.setPixelColor(Jimp.rgbaToInt(0, 0, 0, 255), x, y);
//             }
//         });

//         // Composite the mask over the image
//         image.mask(mask);

//         // Save the result
//         await image.writeAsync(outputPath);
//         console.log('Image saved to', outputPath);
//     } catch (error) {
//         console.error('Error processing image:', error);
//     }
// }

// // Function to create a PowerPoint presentation with the image
// async function createPresentationWithImage(imagePath, outputPptxPath) {
//     try {
//         const pptx = new PptxGenJS();
//         const slide = pptx.addSlide();

//         // Load the image to get its dimensions
//         const image = await Jimp.read(imagePath);
//         const imgWidth = image.bitmap.width;
//         const imgHeight = image.bitmap.height;

//         // Default slide dimensions in inches
//         const slideWidth = 10; // inches
//         const slideHeight = 7.5; // inches

//         // Convert slide dimensions to pixels (assuming 96 DPI)
//         const slideWidthPx = slideWidth * 96;
//         const slideHeightPx = slideHeight * 96;

//         // Determine scale factor to fit the image within the slide
//         const widthRatio = slideWidthPx / imgWidth;
//         const heightRatio = slideHeightPx / imgHeight;
//         const scaleFactor = Math.min(widthRatio, heightRatio);

//         // Calculate new dimensions
//         const scaledWidth = imgWidth * scaleFactor;
//         const scaledHeight = imgHeight * scaleFactor;

//         // Calculate position to center the image
//         const x = (slideWidthPx - scaledWidth) / 2 / 96; // Convert back to inches
//         const y = (slideHeightPx - scaledHeight) / 2 / 96; // Convert back to inches

//         // Add the image to the slide
//         slide.addImage({ path: imagePath, x: x, y: y, w: scaledWidth / 96, h: scaledHeight / 96 });

//         // Save the presentation
//         await pptx.writeFile({ fileName: outputPptxPath });
//         console.log('Presentation saved to', outputPptxPath);
//     } catch (error) {
//         console.error('Error creating presentation:', error);
//     }
// }

// // Usage example
// (async () => {
//     const imagePath = 'routes/door.png';
//     const processedImagePath = 'routes/door-processed.png';
//     const pptxPath = 'routes/presentation.pptx';
//     const radius = 20;

//     await cropTopCorners(imagePath, radius, processedImagePath);
//     await createPresentationWithImage(processedImagePath, pptxPath);
// })();


// const Jimp = require('jimp');
// const PptxGenJS = require('pptxgenjs');

// async function cropTopCorners(imagePath, radius, outputPath) {
//     try {
//         // Load the image
//         const image = await Jimp.read(imagePath);
//         console.log('Image loaded successfully.');

//         // Get image dimensions
//         const width = image.bitmap.width;
//         const height = image.bitmap.height;
//         console.log(`Image dimensions: ${width}x${height}`);

//         // Create a new image with the same dimensions
//         const mask = new Jimp(width, height, 0x00000000); // Transparent mask

//         // Draw a rounded rectangle on the mask
//         mask.scan(0, 0, width, height, (x, y, idx) => {
//             const dx1 = x - radius;
//             const dy1 = y - radius;
//             const dx2 = x - (width - radius);
//             const dy2 = y - radius;

//             const inTopLeftCorner = (dx1 * dx1 + dy1 * dy1 <= radius * radius);
//             const inTopRightCorner = (dx2 * dx2 + dy1 * dy1 <= radius * radius);

//             if (y < radius && (inTopLeftCorner || inTopRightCorner)) {
//                 mask.setPixelColor(Jimp.rgbaToInt(0, 0, 0, 0), x, y);
//             } else {
//                 mask.setPixelColor(Jimp.rgbaToInt(0, 0, 0, 255), x, y);
//             }
//         });

//         // Composite the mask over the image
//         image.mask(mask);

//         // Save the result
//         await image.writeAsync(outputPath);
//         console.log('Processed image saved to', outputPath);
//     } catch (error) {
//         console.error('Error processing image:', error);
//     }
// }

// async function createPresentationWithImage(imagePath, outputPptxPath) {
//     try {
//         const pptx = new PptxGenJS();
//         const slide = pptx.addSlide();

//         // Load the image to get its dimensions
//         const image = await Jimp.read(imagePath);
//         const imgWidth = image.bitmap.width;
//         const imgHeight = image.bitmap.height;
//         console.log(`Image dimensions for PowerPoint: ${imgWidth}x${imgHeight}`);

//         // Default slide dimensions in inches
//         const slideWidth = 10; // inches
//         const slideHeight = 7.5; // inches

//         // Convert slide dimensions to pixels (assuming 96 DPI)
//         const slideWidthPx = slideWidth * 96;
//         const slideHeightPx = slideHeight * 96;

//         // Determine scale factor to fit the image within the slide
//         const widthRatio = slideWidthPx / imgWidth;
//         const heightRatio = slideHeightPx / imgHeight;
//         const scaleFactor = Math.min(widthRatio, heightRatio);

//         // Calculate new dimensions
//         const scaledWidth = imgWidth * scaleFactor;
//         const scaledHeight = imgHeight * scaleFactor;
//         console.log(`Scaled dimensions: ${scaledWidth}x${scaledHeight}`);

//         // Calculate position to center the image
//         const x = (slideWidthPx - scaledWidth) / 2 / 96; // Convert back to inches
//         const y = (slideHeightPx - scaledHeight) / 2 / 96; // Convert back to inches
//         console.log(`Image position on slide: x=${x}, y=${y}`);

//         // Add the image to the slide
//         slide.addImage({ path: imagePath, x: x, y: y, w: scaledWidth / 96, h: scaledHeight / 96 });

//         // Save the presentation
//         await pptx.writeFile({ fileName: outputPptxPath });
//         console.log('Presentation saved to', outputPptxPath);
//     } catch (error) {
//         console.error('Error creating presentation:', error);
//     }
// }

// // Usage example
// (async () => {
//     const imagePath = 'routes/door.png';
//     const processedImagePath = 'routes/door-processed.png';
//     const pptxPath = 'routes/presentation.pptx';
//     const radius = 20;

//     await cropTopCorners(imagePath, radius, processedImagePath);
//     await createPresentationWithImage(processedImagePath, pptxPath);
// })();


