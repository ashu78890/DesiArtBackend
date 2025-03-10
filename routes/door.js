




// 






// const Jimp = require('jimp');
// const path = require('path');

// // Function to round top corners of an image
// async function roundTopCorners(inputPath, outputPath, radius) {
//     try {
//         let image = await Jimp.read(inputPath);
//         const width = image.getWidth();
//         const height = image.getHeight();

//         console.log(`Original dimensions: ${width}x${height}`);
//         const mask = new Jimp(width, height, 0x00000000); 

//         mask.scan(0, 0, width, height, (x, y, idx) => {
//             if ((x < radius && y < radius) || (x > width - radius && y < radius)) {
//                 const dist = Math.sqrt(Math.pow(x - (x < radius ? radius : width - radius), 2) + Math.pow(y - radius, 2));
//                 if (dist > radius) {
//                     mask.setPixelColor(0x00000000, x, y); 
//                 } else {
//                     mask.setPixelColor(0xFFFFFFFF, x, y); 
//                 }
//             } else {
//                 mask.setPixelColor(0xFFFFFFFF, x, y);
//             }
//         });

//         image.mask(mask);
//         await image.writeAsync(outputPath);

//         console.log(`Image with rounded top corners saved to ${outputPath}`);
//     } catch (err) {
//         console.error('Error processing image:', err);
//     }
// }

// const inputPath = path.join(__dirname, 'Picture1.jpg');
// const outputPath = path.join(__dirname, 'path_to_output_image.jpg'); 
// const cornerRadius = 400; 

// roundTopCorners(inputPath, outputPath, cornerRadius);


// const Jimp = require('jimp');
// const PptxGenJS = require('pptxgenjs');
// const path = require('path');

// // Function to round top corners of an image
// async function roundTopCorners(inputPath, outputPath, radius) {
//     try {
//         // Load the image
//         let image = await Jimp.read(inputPath);
//         const width = image.getWidth();
//         const height = image.getHeight();

//         console.log(`Original dimensions: ${width}x${height}`);

//         // Create a mask for rounded corners
//         const mask = new Jimp(width, height, 0x00000000); // Fully transparent mask

//         mask.scan(0, 0, width, height, (x, y, idx) => {
//             // Check if pixel is within the top corners
//             if ((x < radius && y < radius) || (x > width - radius && y < radius)) {
//                 const dist = Math.sqrt(Math.pow(x - (x < radius ? radius : width - radius), 2) + Math.pow(y - radius, 2));
//                 if (dist > radius) {
//                     mask.setPixelColor(0x00000000, x, y); // Set transparent
//                 } else {
//                     mask.setPixelColor(0xFFFFFFFF, x, y); // Set opaque
//                 }
//             } else {
//                 mask.setPixelColor(0xFFFFFFFF, x, y); // Set opaque for other areas
//             }
//         });

//         // Apply the mask to the image
//         image.mask(mask);

//         // Save the processed image
//         await image.writeAsync(outputPath);

//         console.log(`Image with rounded top corners saved to ${outputPath}`);
//     } catch (err) {
//         console.error('Error processing image:', err);
//     }
// }

// // Function to create a PowerPoint presentation with the processed image
// async function createPresentation(imagePath) {
//     try {
//         // Create a new presentation
//         let pptx = new PptxGenJS();

//         // Add a new slide
//         let slide = pptx.addSlide();

//         // Add the processed image to the slide
//         slide.addImage({
//             path: imagePath, // Path to your processed image file
//             x: 1,           // X position (in inches)
//             y: 1,           // Y position (in inches)
//             w: 5,           // Width (in inches)
//             h: 3            // Height (in inches)
//         });

//         // Save the presentation using WriteFileProps
//         await pptx.writeFile({ fileName: "presentation.pptx" });
//         console.log("Presentation created successfully.");
//     } catch (err) {
//         console.error("Error creating presentation:", err);
//     }
// }

// // Paths and parameters
// const inputPath = path.join(__dirname, 'Picture1.jpg'); // Use absolute path
// const outputPath = path.join(__dirname, 'path_to_output_image.jpg'); // Use absolute path
// const cornerRadius = 100; // Adjust radius as needed

// // Run the image processing and presentation creation
// async function processAndCreatePresentation() {
//     await roundTopCorners(inputPath, outputPath, cornerRadius);
//     await createPresentation(outputPath);
// }

// processAndCreatePresentation();




// const Jimp = require('jimp');
// const PptxGenJS = require('pptxgenjs');
// const path = require('path');


// async function roundTopCorners(inputPath, outputPath, radius) {
//     try {
//         let image = await Jimp.read(inputPath);
//         const width = image.getWidth();
//         const height = image.getHeight();

//         console.log(`Original dimensions: ${width}x${height}`);
//         const mask = new Jimp(width, height, 0x00000000); 

//         mask.scan(0, 0, width, height, (x, y, idx) => {
//             if ((x < radius && y < radius) || (x > width - radius && y < radius)) {
//                 const dist = Math.sqrt(Math.pow(x - (x < radius ? radius : width - radius), 2) + Math.pow(y - radius, 2));
//                 if (dist > radius) {
//                     mask.setPixelColor(0x00000000, x, y); 
//                 } else {
//                     mask.setPixelColor(0xFFFFFFFF, x, y); 
//                 }
//             } else {
//                 mask.setPixelColor(0xFFFFFFFF, x, y); 
//             }
//         });

//         image.mask(mask);
//         await image.writeAsync(outputPath);

//         console.log(`Image with rounded top corners saved to ${outputPath}`);
//         return { width, height }; 
//     } catch (err) {
//         console.error('Error processing image:', err);
//     }
// }

// async function createPresentation(imagePath, imgWidth, imgHeight) {
//     try {
//         let pptx = new PptxGenJS();
//         pptx.layout = "LAYOUT_WIDE";
//         let slide = pptx.addSlide();
//         slide.addImage({
//             path: imagePath,        
//             x:8.63,                  
//             y: 1.755,                  
//             w: 4.169,      
//             h:5.35  
//         });
//         await pptx.writeFile({ fileName: "presentation.pptx" });
//         console.log("Presentation created successfully.");
//     } catch (err) {
//         console.error("Error creating presentation:", err);
//     }
// }


// const inputPath = path.join(__dirname, '1.jpg'); 
// const outputPath = path.join(__dirname, 'path_to_output_image.jpg'); 
// const cornerRadius = 200; 
// async function processAndCreatePresentation() {
//     const dimensions = await roundTopCorners(inputPath, outputPath, cornerRadius);
//     if (dimensions) {
//         await createPresentation(outputPath, dimensions.width, dimensions.height);
//     }
// }

// processAndCreatePresentation();




// correct code started






// const Jimp = require('jimp');
// const PptxGenJS = require('pptxgenjs');
// const path = require('path');

// // Function to round top corners of an image with radius as a percentage
// async function roundTopCorners(inputPath, outputPath, radiusPercentage) {
//     try {
//         let image = await Jimp.read(inputPath);
//         const width = image.getWidth();
//         const height = image.getHeight();

//         // Calculate radius based on percentage
//         const radius = Math.min(width, height) * (radiusPercentage / 100);

//         console.log(`Original dimensions: ${width}x${height}`);
//         console.log(`Calculated radius: ${radius}`);
//         const mask = new Jimp(width, height, 0x00000000); 

//         mask.scan(0, 0, width, height, (x, y, idx) => {
//             if ((x < radius && y < radius) || (x > width - radius && y < radius)) {
//                 const dist = Math.sqrt(Math.pow(x - (x < radius ? radius : width - radius), 2) + Math.pow(y - radius, 2));
//                 if (dist > radius) {
//                     mask.setPixelColor(0x00000000, x, y); 
//                 } else {
//                     mask.setPixelColor(0xFFFFFFFF, x, y); 
//                 }
//             } else {
//                 mask.setPixelColor(0xFFFFFFFF, x, y); 
//             }
//         });

//         image.mask(mask);
//         await image.writeAsync(outputPath);

//         console.log(`Image with rounded top corners saved to ${outputPath}`);
//         return { width, height }; 
//     } catch (err) {
//         console.error('Error processing image:', err);
//     }
// }

// // Function to create a PowerPoint presentation
// async function createPresentation(imagePath, imgWidth, imgHeight) {
//     try {
//         let pptx = new PptxGenJS();
//         pptx.layout = "LAYOUT_WIDE";
//         let slide = pptx.addSlide();
//         slide.addImage({
//             path: imagePath,
//             x: 8.63, // X position (in inches)
//             y: 1.755, // Y position (in inches)
//             w: 4.169, // Width (in inches)
//             h: 5.35   // Height (in inches)
//         });
//         await pptx.writeFile({ fileName: "presentation.pptx" });
//         console.log("Presentation created successfully.");
//     } catch (err) {
//         console.error("Error creating presentation:", err);
//     }
// }

// // Paths and parameters
// const inputPath = path.join(__dirname, 'Picture1.jpg'); 
// const outputPath = path.join(__dirname, 'path_to_output_image.jpg'); 
// const cornerRadiusPercentage = 50; // Adjust percentage as needed

// // Function to process image and create presentation
// async function processAndCreatePresentation() {
//     const dimensions = await roundTopCorners(inputPath, outputPath, cornerRadiusPercentage);
//     if (dimensions) {
//         await createPresentation(outputPath, dimensions.width, dimensions.height);
//     }
// }

// // Run the function
// processAndCreatePresentation();







// const Jimp = require('jimp');
// const PptxGenJS = require('pptxgenjs');
// const path = require('path');

// // Function to round corners of an image with specified radii for each corner
// async function roundCorners(inputPath, outputPath, radii) {
//     try {
//         let image = await Jimp.read(inputPath);
//         const width = image.getWidth();
//         const height = image.getHeight();

//         console.log(`Original dimensions: ${width}x${height}`);

//         // Destructure the radii for clarity
//         const [tlRadius, trRadius, brRadius, blRadius] = radii;

//         const mask = new Jimp(width, height, 0x00000000); // Fully transparent mask

//         mask.scan(0, 0, width, height, (x, y, idx) => {
//             let distTL = Infinity;
//             let distTR = Infinity;
//             let distBR = Infinity;
//             let distBL = Infinity;

//             if (x < tlRadius && y < tlRadius) {
//                 distTL = Math.sqrt(Math.pow(x - tlRadius, 2) + Math.pow(y - tlRadius, 2));
//             }
//             if (x > width - trRadius && y < trRadius) {
//                 distTR = Math.sqrt(Math.pow(x - (width - trRadius), 2) + Math.pow(y - trRadius, 2));
//             }
//             if (x > width - brRadius && y > height - brRadius) {
//                 distBR = Math.sqrt(Math.pow(x - (width - brRadius), 2) + Math.pow(y - (height - brRadius), 2));
//             }
//             if (x < blRadius && y > height - blRadius) {
//                 distBL = Math.sqrt(Math.pow(x - blRadius, 2) + Math.pow(y - (height - blRadius), 2));
//             }

//             const minDist = Math.min(distTL, distTR, distBR, distBL);
//             if (minDist > Math.max(tlRadius, trRadius, brRadius, blRadius)) {
//                 mask.setPixelColor(0x00000000, x, y); // Set transparent
//             } else {
//                 mask.setPixelColor(0xFFFFFFFF, x, y); // Set opaque
//             }
//         });

//         // Apply the mask to the image
//         image.mask(mask);

//         // Save the processed image
//         await image.writeAsync(outputPath);

//         console.log(`Image with rounded corners saved to ${outputPath}`);
//         return { width, height };
//     } catch (err) {
//         console.error('Error processing image:', err);
//     }
// }

// async function createPresentation(imagePath, imgWidth, imgHeight) {
//     try {
//         let pptx = new PptxGenJS();
//         pptx.layout = "LAYOUT_WIDE";
//         let slide = pptx.addSlide();
//         slide.addImage({
//             path: imagePath,
//             x: 8.63, // X position (in inches)
//             y: 1.755, // Y position (in inches)
//             w: 4.169, // Width (in inches)
//             h: 5.35   // Height (in inches)
//         });
//         await pptx.writeFile({ fileName: "presentation.pptx" });
//         console.log("Presentation created successfully.");
//     } catch (err) {
//         console.error("Error creating presentation:", err);
//     }
// }

// // Paths and parameters
// const inputPath = path.join(__dirname, 'Picture1.jpg');
// const outputPath = path.join(__dirname, 'path_to_output_image.jpg');
// const cornerRadii = [50, 50, 50, 50]; // Radii for top-left, top-right, bottom-right, bottom-left corners

// // Function to process image and create presentation
// async function processAndCreatePresentation() {
//     const dimensions = await roundCorners(inputPath, outputPath, cornerRadii);
//     if (dimensions) {
//         await createPresentation(outputPath, dimensions.width, dimensions.height);
//     }
// }

// // Run the function
// processAndCreatePresentation();




// const Jimp = require('jimp');
// const PptxGenJS = require('pptxgenjs');
// const path = require('path');

// // Function to round corners of an image with specified points for each corner
// async function roundCorners(inputPath, outputPath, points) {
//     try {
//         let image = await Jimp.read(inputPath);
//         const width = image.getWidth();
//         const height = image.getHeight();

//         console.log(`Original dimensions: ${width}x${height}`);

//         // Destructure the points for clarity
//         const [x1, y1, x2, y2, x3, y3, x4, y4] = points;

//         const mask = new Jimp(width, height, 0x00000000); // Fully transparent mask

//         mask.scan(0, 0, width, height, (x, y, idx) => {
//             let distTL = Infinity;
//             let distTR = Infinity;
//             let distBR = Infinity;
//             let distBL = Infinity;

//             if (x < x1 && y < y1) {
//                 distTL = Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2));
//             }
//             if (x > width - x2 && y < y2) {
//                 distTR = Math.sqrt(Math.pow(x - (width - x2), 2) + Math.pow(y - y2, 2));
//             }
//             if (x > width - x3 && y > height - y3) {
//                 distBR = Math.sqrt(Math.pow(x - (width - x3), 2) + Math.pow(y - (height - y3), 2));
//             }
//             if (x < x4 && y > height - y4) {
//                 distBL = Math.sqrt(Math.pow(x - x4, 2) + Math.pow(y - (height - y4), 2));
//             }

//             const minDist = Math.min(distTL, distTR, distBR, distBL);
//             if (minDist > Math.max(x1, y1, x2, y2, x3, y3, x4, y4)) {
//                 mask.setPixelColor(0x00000000, x, y); // Set transparent
//             } else {
//                 mask.setPixelColor(0xFFFFFFFF, x, y); // Set opaque
//             }
//         });

//         // Apply the mask to the image
//         image.mask(mask);

//         // Save the processed image
//         await image.writeAsync(outputPath);

//         console.log(`Image with rounded corners saved to ${outputPath}`);
//         return { width, height };
//     } catch (err) {
//         console.error('Error processing image:', err);
//     }
// }

// async function createPresentation(imagePath, imgWidth, imgHeight) {
//     try {
//         let pptx = new PptxGenJS();
//         pptx.layout = "LAYOUT_WIDE";
//         let slide = pptx.addSlide();
//         slide.addImage({
//             path: imagePath,
//             x: 8.63, // X position (in inches)
//             y: 1.755, // Y position (in inches)
//             w: 4.169, // Width (in inches)
//             h: 5.35   // Height (in inches)
//         });
//         await pptx.writeFile({ fileName: "presentation.pptx" });
//         console.log("Presentation created successfully.");
//     } catch (err) {
//         console.error("Error creating presentation:", err);
//     }
// }

// // Paths and parameters
// const inputPath = path.join(__dirname, 'Picture1.jpg');
// const outputPath = path.join(__dirname, 'path_to_output_image.jpg');
// const cornerPoints = [50, 0, 50,0, 50, 50, 50, 50]; // Points for top-left, top-right, bottom-right, bottom-left corners

// // Function to process image and create presentation
// async function processAndCreatePresentation() {
//     const dimensions = await roundCorners(inputPath, outputPath, cornerPoints);
//     if (dimensions) {
//         await createPresentation(outputPath, dimensions.width, dimensions.height);
//     }
// }

// // Run the function
// processAndCreatePresentation();



const Jimp = require('jimp');
const PptxGenJS = require('pptxgenjs');
const path = require('path');

async function roundCorners(inputPath, outputPath, radii) {
    try {
        let image = await Jimp.read(inputPath);
        const width = image.getWidth();
        const height = image.getHeight();

        console.log(`Original dimensions: ${width}x${height}`);

        // Convert percentage radii to pixel values
        const topLeftRadius = Math.min(width, height) * (radii.topLeft / 100);
        const topRightRadius = Math.min(width, height) * (radii.topRight / 100);
        const bottomLeftRadius = Math.min(width, height) * (radii.bottomLeft / 100);
        const bottomRightRadius = Math.min(width, height) * (radii.bottomRight / 100);

        const mask = new Jimp(width, height, 0xFFFFFFFF);

        mask.scan(0, 0, width, height, (x, y, idx) => {
            const topLeftDist = Math.sqrt(Math.pow(x - topLeftRadius, 2) + Math.pow(y - topLeftRadius, 2));
            const topRightDist = Math.sqrt(Math.pow(x - (width - topRightRadius), 2) + Math.pow(y - topRightRadius, 2));
            const bottomLeftDist = Math.sqrt(Math.pow(x - bottomLeftRadius, 2) + Math.pow(y - (height - bottomLeftRadius), 2));
            const bottomRightDist = Math.sqrt(Math.pow(x - (width - bottomRightRadius), 2) + Math.pow(y - (height - bottomRightRadius), 2));

            if ((x < topLeftRadius && y < topLeftRadius && topLeftDist > topLeftRadius) ||
                (x > width - topRightRadius && y < topRightRadius && topRightDist > topRightRadius) ||
                (x < bottomLeftRadius && y > height - bottomLeftRadius && bottomLeftDist > bottomLeftRadius) ||
                (x > width - bottomRightRadius && y > height - bottomRightRadius && bottomRightDist > bottomRightRadius)) {
                mask.setPixelColor(0x00000000, x, y); 
            }
        });

        image.mask(mask);
        await image.writeAsync(outputPath);

        console.log(`Image with rounded corners saved to ${outputPath}`);
        return { width, height }; 
    } catch (err) {
        console.error('Error processing image:', err);
    }
}

async function createPresentation(imagePath, imgWidth, imgHeight) {
    try {
        let pptx = new PptxGenJS();
        pptx.layout = "LAYOUT_WIDE";
        let slide = pptx.addSlide();
        slide.addImage({
            path: imagePath,        
            // x: 1,                  
            // y: 1,                  
            // w: imgWidth/100,      
            // h: imgHeight/100  
            
            x: 8.42, // X position (in inches)
                        y: 1.307, // Y position (in inches)
                        w: 4.9, // Width (in inches)
                        h: 3.52
        });
        await pptx.writeFile({ fileName: "presentation.pptx" });
        console.log("Presentation created successfully.");
    } catch (err) {
        console.error("Error creating presentation:", err);
    }
}

const inputPath = path.join(__dirname, 'Picture1.jpg'); 
const outputPath = path.join(__dirname, 'output.jpg'); 

const radii = {
    topLeft: 0,     
    topRight: 0,     
    bottomLeft: 30, 
    bottomRight: 0   
};

async function processAndCreatePresentation() {
    const dimensions = await roundCorners(inputPath, outputPath, radii);
    if (dimensions) {
        await createPresentation(outputPath, dimensions.width, dimensions.height);
    }
}

processAndCreatePresentation();


