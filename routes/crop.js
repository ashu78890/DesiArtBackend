const Jimp = require('jimp');

async function processImage(inputPath, outputPath, targetWidth, targetHeight) {
    try {
        const image = await Jimp.read(inputPath);
        const originalWidth = image.getWidth();
        const originalHeight = image.getHeight();

        console.log(`Original dimensions: ${originalWidth}x${originalHeight}`);

        const targetAspectRatio = targetWidth / targetHeight;
        const originalAspectRatio = originalWidth / originalHeight;

        if (originalAspectRatio > targetAspectRatio) {
            image.resize(Jimp.AUTO, targetHeight);
        } else {
            image.resize(targetWidth, Jimp.AUTO);
        }

        const resizedWidth = image.getWidth();
        const resizedHeight = image.getHeight();

        console.log(`Resized dimensions: ${resizedWidth}x${resizedHeight}`);
        if (resizedWidth > targetWidth || resizedHeight > targetHeight) {
            const x = (resizedWidth - targetWidth) / 2;
            const y = (resizedHeight - targetHeight) / 2;
            image.crop(x, y, targetWidth, targetHeight);
            console.log(`Cropped dimensions: ${image.getWidth()}x${image.getHeight()}`);
        }

        if (image.getWidth() < targetWidth || image.getHeight() < targetHeight) {
            const paddingX = (targetWidth - image.getWidth()) / 2;
            const paddingY = (targetHeight - image.getHeight()) / 2;
            const paddedImage = new Jimp(targetWidth, targetHeight, 0xFFFFFFFF); 
            paddedImage.composite(image, paddingX, paddingY);
            image = paddedImage;
            console.log(`Padded dimensions: ${image.getWidth()}x${image.getHeight()}`);
        }

        await image.writeAsync(outputPath);

        console.log(`Image processed and saved to ${outputPath}`);
    } catch (err) {
        console.error('Error processing image:', err);
    }
}

const inputPath = 'Picture1.jpg';
const outputPath = 'path_to_output_image.jpg';
const targetWidth = 250;
const targetHeight = 1000;

processImage(inputPath, outputPath, targetWidth, targetHeight);



// // Import PptxGenJS
// const PptxGenJS = require("pptxgenjs");

// // Initialize PptxGenJS
// let pres = new PptxGenJS();

// // Create a new slide
// let slide = pres.addSlide();

// // Function to generate a random angle between 0 and 180
// // function getRandomAngle() {
// //     return Math.floor(Math.random() * 181);
// // }

// function getRandomAngle(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Define common position and size for the arcs
// let arcOptionsBase = {
//     x: 1.5, // X position
//     y: 1.5, // Y position
//     w: 4,   // Width
//     h: 4    // Height
// };

// // Generate random angles for the arcs
// // let startAngle1 = getRandomAngle();
// // let endAngle1 = getRandomAngle();
// // let startAngle2 = getRandomAngle();
// // let endAngle2 = getRandomAngle();\

// let startAngle1 = getRandomAngle(180, 360);
// let endAngle1 = getRandomAngle(180, 360);
// let startAngle2 = getRandomAngle(270, 360);
// let endAngle2 = getRandomAngle(270, 360);

// // Define options for the first arc
// let arcOptions1 = {
//     ...arcOptionsBase,
//     angleRange: [180,310],
//     line: { color: 'FF0000',width: 10},
// };


// let arcOptions2 = {
//     ...arcOptionsBase,
//     angleRange: [310, 360],
//     line: { color: '0000FF', width: 10    },
// };

// slide.addShape(pres.ShapeType.arc, arcOptions1);
// slide.addShape(pres.ShapeType.arc, arcOptions2);

// let centerX = arcOptionsBase.x + (arcOptionsBase.w / 2);
// let centerY = arcOptionsBase.y + (arcOptionsBase.h / 2);


// let ellipseOptions = {
//     x: centerX - 0.5,
//     y: centerY - 0.5, 
//     w: 1,  
//     h: 1,   
//     fill: { color: '00FF00' } 
// };

// // Add the ellipse to the slide
// slide.addShape(pres.ShapeType.ellipse, ellipseOptions);
// // Save the presentation
// pres.writeFile("Sample_Presentation.pptx").then(() => {
//     console.log("Presentation created successfully!");
// });



// const PptxGenJS = require("pptxgenjs");

// let pres = new PptxGenJS();

// let slide = pres.addSlide();

// function getRandomPercentages() {
//     let percent1 = Math.floor(Math.random() * 101); 
//     let percent2 = 100 - percent1;
//     console.log(percent1,percent2,"first") 
//     return [percent1, percent2];
// }

// let [percentArc1, percentArc2] = getRandomPercentages();
// console.log(percentArc1,percentArc2,"second")
// let totalAngleRange = 360 - 180;
// let angleRange1 = (totalAngleRange * percentArc1) / 100; 
// let angleRange2 = (totalAngleRange * percentArc2) / 100; 
// console.log(angleRange1,angleRange2,"angleRange")
// let arcOptionsBase = {
//     x: 1.5, 
//     y: 1.5, 
//     w: 3,   
//     h: 3  
// };


// let arcOptions1 = {
//     ...arcOptionsBase,
//     angleRange:[180, 180 + angleRange1 ],
//     line: { color: 'FF0000', width: 20 },
// };

// let arcOptions2 = {
//     ...arcOptionsBase,
//     angleRange:[180 + angleRange1, 180 + angleRange1 + angleRange2 ],
//     line: { color: '0000FF', width: 20 },
// };

// slide.addShape(pres.ShapeType.arc, arcOptions1);
// slide.addShape(pres.ShapeType.arc, arcOptions2);

// let centerX = arcOptionsBase.x + (arcOptionsBase.w / 2);
// let centerY = arcOptionsBase.y + (arcOptionsBase.h / 2);

// let ellipseWidth = arcOptionsBase.w * 0.05;
// let ellipseHeight = arcOptionsBase.h * 0.05;

// let ellipseOptions = {
//     x: centerX - (ellipseWidth / 2), 
//     y: centerY - (ellipseHeight / 2), 
//     w: ellipseWidth,  
//     h: ellipseHeight,   
//     fill: { color: '00FF00' }
// };

// slide.addShape(pres.ShapeType.ellipse, ellipseOptions);



// let triangleWidth = arcOptionsBase.w * 0.04;
// let triangleHeight = arcOptionsBase.h * 0.5;

// let trianglePoints = [
//     { x: centerX - (triangleWidth / 2), y: arcOptionsBase.y },
//     { x: centerX + (triangleWidth / 2), y: arcOptionsBase.y },
//     { x: centerX, y: centerY - (arcOptionsBase.h / 2) }
// ];

// let triangleOptions = {
//     // shape: pres.ShapeType.triangle,
//     x: trianglePoints[0].x,
//     y: trianglePoints[0].y,
//     w: triangleWidth,
//     h: triangleHeight,
//     // line: { color: '000000',  },
//     fill: { color: 'FF00FF' },
//     rotate:0
// };
// slide.addShape(pres.ShapeType.triangle,triangleOptions);

// pres.writeFile("Sample_Presentation.pptx").then(() => {
//     console.log("Presentation created successfully!");
// });



// const PptxGenJS = require("pptxgenjs");

// function generatePresentation(arcOptionsBaseCm) {
  
//     let arcOptionsBase = {
//         x: arcOptionsBaseCm.x,
//         y: arcOptionsBaseCm.y,
//         w: arcOptionsBaseCm.w,
//         h: arcOptionsBaseCm.h
//     };

//     let pres = new PptxGenJS();
//     let slide = pres.addSlide();

//     function getRandomPercentages() {
//         let percent1 = Math.floor(Math.random() * 101); 
//         let percent2 = 100 - percent1;
//         return [percent1, percent2];
//     }

//     let [percentArc1, percentArc2] = getRandomPercentages();
//     let totalAngleRange = 360 - 180;
//     let angleRange1 = (totalAngleRange * percentArc1) / 100; 
//     let angleRange2 = (totalAngleRange * percentArc2) / 100; 

//     let arcOptions1 = {
//         ...arcOptionsBase,
//         angleRange:[180, 180 + angleRange1 ],
//         line: { color: 'FF0000', width: 20 },
//     };

//     let arcOptions2 = {
//         ...arcOptionsBase,
//         angleRange:[180 + angleRange1, 180 + angleRange1 + angleRange2 ],
//         line: { color: '0000FF', width: 20 },
//     };

//     slide.addShape(pres.ShapeType.arc, arcOptions1);
//     slide.addShape(pres.ShapeType.arc, arcOptions2);

//     let centerX = arcOptionsBase.x + (arcOptionsBase.w / 2);
//     let centerY = arcOptionsBase.y + (arcOptionsBase.h / 2);

//     let ellipseWidth = arcOptionsBase.w * 0.05;
//     let ellipseHeight = arcOptionsBase.h * 0.05;

//     let ellipseOptions = {
//         x: centerX - (ellipseWidth / 2), 
//         y: centerY - (ellipseHeight / 2), 
//         w: ellipseWidth,  
//         h: ellipseHeight,   
//         fill: { color: '00FF00' }
//     };

//     slide.addShape(pres.ShapeType.ellipse, ellipseOptions);

//     let triangleWidth = arcOptionsBase.w * 0.04;
//     let triangleHeight = arcOptionsBase.h * 0.5;

//     let trianglePoints = [
//         { x: centerX - (triangleWidth / 2), y: arcOptionsBase.y },
//         { x: centerX + (triangleWidth / 2), y: arcOptionsBase.y },
//         { x: centerX, y: centerY - (arcOptionsBase.h / 2) }
//     ];

//     let triangleOptions = {
//         x: trianglePoints[0].x,
//         y: trianglePoints[0].y,
//         w: triangleWidth,
//         h: triangleHeight,
//         fill: { color: 'FF00FF' },
//         rotate: 0
//     };
//     slide.addShape(pres.ShapeType.triangle, triangleOptions);

//     pres.writeFile("Sample_Presentation.pptx").then(() => {
//         console.log("Presentation created successfully!");
//     });  
// }

// generatePresentation({
//     x: 0,
//     y: 0,
//     w: 12,
//     h: 7
// });


// const PptxGenJS = require("pptxgenjs");

// function generatePresentation(arcOptionsBaseCm) {
  
//     let arcOptionsBase = {
//         x: arcOptionsBaseCm.x,
//         y: arcOptionsBaseCm.y,
//         w: arcOptionsBaseCm.w,
//         h: arcOptionsBaseCm.h
//     };

//     let pres = new PptxGenJS();
//     let slide = pres.addSlide();

//     function getRandomPercentages() {
//         let percent1 = Math.floor(Math.random() * 101); 
//         let percent2 = 100 - percent1;
//         return [percent1, percent2];
//     }

//     let [percentArc1, percentArc2] = getRandomPercentages();
//     let totalAngleRange = 360 - 180;
//     let angleRange1 = (totalAngleRange * percentArc1) / 100; 
//     let angleRange2 = (totalAngleRange * percentArc2) / 100; 

//     let arcOptions1 = {
//         ...arcOptionsBase,
//         angleRange: [180, 180 + angleRange1],
//         line: { color: 'FF0000', width: 20 },
//     };

//     let arcOptions2 = {
//         ...arcOptionsBase,
//         angleRange: [180 + angleRange1, 180 + angleRange1 + angleRange2],
//         line: { color: '0000FF', width: 20 },
//     };

//     slide.addShape(pres.ShapeType.arc, arcOptions1);
//     slide.addShape(pres.ShapeType.arc, arcOptions2);

//     let centerX = arcOptionsBase.x + (arcOptionsBase.w / 2);
//     let centerY = arcOptionsBase.y + (arcOptionsBase.h / 2);

//     let ellipseWidth = arcOptionsBase.w * 0.05;
//     let ellipseHeight = arcOptionsBase.h * 0.05;

//     let ellipseOptions = {
//         x: centerX - (ellipseWidth / 2), 
//         y: centerY - (ellipseHeight / 2), 
//         w: ellipseWidth,  
//         h: ellipseHeight,   
//         fill: { color: '00FF00' }
//     };

//     slide.addShape(pres.ShapeType.ellipse, ellipseOptions);

//     let triangleWidth = arcOptionsBase.w * 0.04;
//     let triangleHeight = arcOptionsBase.h * 0.5;

//     let trianglePoints = [
//         { x: centerX - (triangleWidth / 2), y: arcOptionsBase.y },
//         { x: centerX + (triangleWidth / 2), y: arcOptionsBase.y },
//         { x: centerX, y: centerY - (arcOptionsBase.h / 2) }
//     ];

//     let triangleOptions = {
//         x: trianglePoints[0].x,
//         y: trianglePoints[0].y,
//         w: triangleWidth,
//         h: triangleHeight,
//         fill: { color: 'FF00FF' },
//         rotate: 0
//     };
//     slide.addShape(pres.ShapeType.triangle, triangleOptions);

//     const percentages = [0, 25, 50, 75, 100];
//     const radius = (arcOptionsBase.w / 2) + 0.4;
//     percentages.forEach((percentage, index) => {
//         const angle = 180 + ((totalAngleRange * percentage) / 100);
//         const radian = (Math.PI / 180) * angle;
//         const labelX = centerX + (radius * Math.cos(radian)) - 0.25; 
//         const labelY = centerY + (radius * Math.sin(radian)) - 0.15; 
//         slide.addText(`${percentage}%`, { x: labelX, y: labelY, w: 0.5, h: 0.3, fontSize: 12, color: '000000' });
//     });

//     pres.writeFile("Sample_Presentation.pptx").then(() => {
//         console.log("Presentation created successfully!");
//     });  
// }

// generatePresentation({
//     x: 1,
//     y: 1,
//     w: 2,
//     h: 2
// });


// const PptxGenJS = require("pptxgenjs");

// function generatePresentation(arcOptionsBaseCm) {
  
//     let arcOptionsBase = {
//         x: arcOptionsBaseCm.x,
//         y: arcOptionsBaseCm.y,
//         w: arcOptionsBaseCm.w,
//         h: arcOptionsBaseCm.h
//     };

//     let pres = new PptxGenJS();
//     let slide = pres.addSlide();

//     function getRandomPercentages() {
//         let percent1 = Math.floor(Math.random() * 101); 
//         let percent2 = Math.floor(Math.random() * (101 - percent1));
//         let percent3 = Math.floor(Math.random() * (101 - percent1 - percent2));
//         let percent4 = 100 - percent1 - percent2 - percent3;
//         return [percent1, percent2, percent3, percent4];
//     }

//     let [percentArc1, percentArc2, percentArc3, percentArc4] = getRandomPercentages();
//     let totalAngleRange = 360 - 180;
//     let angleRange1 = (totalAngleRange * percentArc1) / 100; 
//     let angleRange2 = (totalAngleRange * percentArc2) / 100;
//     let angleRange3 = (totalAngleRange * percentArc3) / 100;
//     let angleRange4 = (totalAngleRange * percentArc4) / 100;

//     let arcOptions1 = {
//         ...arcOptionsBase,
//         angleRange: [180, 180 + angleRange1],
//         line: { color: 'FF0000', width: 20 },
//     };

//     let arcOptions2 = {
//         ...arcOptionsBase,
//         angleRange: [180 + angleRange1, 180 + angleRange1 + angleRange2],
//         line: { color: '0000FF', width: 20 },
//     };

//     let arcOptions3 = {
//         ...arcOptionsBase,
//         angleRange: [180 + angleRange1 + angleRange2, 180 + angleRange1 + angleRange2 + angleRange3],
//         line: { color: '00FF00', width: 20 },
//     };

//     let arcOptions4 = {
//         ...arcOptionsBase,
//         angleRange: [180 + angleRange1 + angleRange2 + angleRange3, 180 + angleRange1 + angleRange2 + angleRange3 + angleRange4],
//         line: { color: 'FFFF00', width: 20 },
//     };

//     slide.addShape(pres.ShapeType.arc, arcOptions1);
//     slide.addShape(pres.ShapeType.arc, arcOptions2);
//     slide.addShape(pres.ShapeType.arc, arcOptions3);
//     slide.addShape(pres.ShapeType.arc, arcOptions4);

//     let centerX = arcOptionsBase.x + (arcOptionsBase.w / 2);
//     let centerY = arcOptionsBase.y + (arcOptionsBase.h / 2);

//     let ellipseWidth = arcOptionsBase.w * 0.05;
//     let ellipseHeight = arcOptionsBase.h * 0.05;

//     let ellipseOptions = {
//         x: centerX - (ellipseWidth / 2), 
//         y: centerY - (ellipseHeight / 2), 
//         w: ellipseWidth,  
//         h: ellipseHeight,   
//         fill: { color: '00FF00' }
//     };

//     slide.addShape(pres.ShapeType.ellipse, ellipseOptions);

//     let triangleWidth = arcOptionsBase.w * 0.04;
//     let triangleHeight = arcOptionsBase.h * 0.5;

//     let trianglePoints = [
//         { x: centerX - (triangleWidth / 2), y: arcOptionsBase.y },
//         { x: centerX + (triangleWidth / 2), y: arcOptionsBase.y },
//         { x: centerX, y: centerY - (arcOptionsBase.h / 2) }
//     ];

//     let triangleOptions = {
//         x: trianglePoints[0].x,
//         y: trianglePoints[0].y,
//         w: triangleWidth,
//         h: triangleHeight,
//         fill: { color: 'FF00FF' },
//         rotate: 0
//     };
//     slide.addShape(pres.ShapeType.triangle, triangleOptions);

//     const percentages = [0, 25, 50, 75, 100];
//     const radius = (arcOptionsBase.w / 2) + 0.4;
//     percentages.forEach((percentage, index) => {
//         const angle = 180 + ((totalAngleRange * percentage) / 100);
//         const radian = (Math.PI / 180) * angle;
//         const labelX = centerX + (radius * Math.cos(radian)) - 0.25; 
//         const labelY = centerY + (radius * Math.sin(radian)) - 0.15; 
//         slide.addText(`${percentage}%`, { x: labelX, y: labelY, w: 0.5, h: 0.3, fontSize: 12, color: '000000' });
//     });

//     pres.writeFile("Sample_Presentation.pptx").then(() => {
//         console.log("Presentation created successfully!");
//     });  
// }

// generatePresentation({
//     x: 1,
//     y: 1,
//     w: 2,
//     h: 2
// });

// const PptxGenJS = require("pptxgenjs");

// function generatePresentation(arcOptionsBaseCm) {
  
//     let arcOptionsBase = {
//         x: arcOptionsBaseCm.x,
//         y: arcOptionsBaseCm.y,
//         w: arcOptionsBaseCm.w,
//         h: arcOptionsBaseCm.h
//     };

//     let pres = new PptxGenJS();
//     let slide = pres.addSlide();

//     function getRandomPercentages() {
//         let percent1 = Math.floor(Math.random() * 101); 
//         let percent2 = Math.floor(Math.random() * (101 - percent1));
//         let percent3 = Math.floor(Math.random() * (101 - percent1 - percent2));
//         let percent4 = 100 - percent1 - percent2 - percent3;
//         return [percent1, percent2, percent3, percent4];
//     }

//     let [percentArc1, percentArc2, percentArc3, percentArc4] = getRandomPercentages();
//     let totalAngleRange = 180; // 360 - 180
//     let angleRange1 = (totalAngleRange * percentArc1) / 100; 
//     let angleRange2 = (totalAngleRange * percentArc2) / 100;
//     let angleRange3 = (totalAngleRange * percentArc3) / 100;
//     let angleRange4 = (totalAngleRange * percentArc4) / 100;

//     let arcOptions1 = {
//         ...arcOptionsBase,
//         angleRange: [180, 180 + angleRange1],
//         line: { color: 'FF0000', width: 20 },
//     };

//     let arcOptions2 = {
//         ...arcOptionsBase,
//         angleRange: [180 + angleRange1, 180 + angleRange1 + angleRange2],
//         line: { color: '0000FF', width: 20 },
//     };

//     let arcOptions3 = {
//         ...arcOptionsBase,
//         angleRange: [180 + angleRange1 + angleRange2, 180 + angleRange1 + angleRange2 + angleRange3],
//         line: { color: '00FF00', width: 20 },
//     };

//     let arcOptions4 = {
//         ...arcOptionsBase,
//         angleRange: [180 + angleRange1 + angleRange2 + angleRange3, 180 + angleRange1 + angleRange2 + angleRange3 + angleRange4],
//         line: { color: 'FFFF00', width: 20 },
//     };

//     slide.addShape(pres.ShapeType.arc, arcOptions1);
//     slide.addShape(pres.ShapeType.arc, arcOptions2);
//     slide.addShape(pres.ShapeType.arc, arcOptions3);
//     slide.addShape(pres.ShapeType.arc, arcOptions4);

//     let centerX = arcOptionsBase.x + (arcOptionsBase.w / 2);
//     let centerY = arcOptionsBase.y + (arcOptionsBase.h / 2);

//     let ellipseWidth = arcOptionsBase.w * 0.05;
//     let ellipseHeight = arcOptionsBase.h * 0.05;

//     let ellipseOptions = {
//         x: centerX - (ellipseWidth / 2), 
//         y: centerY - (ellipseHeight / 2), 
//         w: ellipseWidth,  
//         h: ellipseHeight,   
//         fill: { color: '00FF00' }
//     };

//     slide.addShape(pres.ShapeType.ellipse, ellipseOptions);

//     let triangleWidth = arcOptionsBase.w * 0.04;
//     let triangleHeight = arcOptionsBase.h * 0.5;

//     let trianglePoints = [
//         { x: centerX - (triangleWidth / 2), y: arcOptionsBase.y },
//         { x: centerX + (triangleWidth / 2), y: arcOptionsBase.y },
//         { x: centerX, y: centerY - (arcOptionsBase.h / 2) }
//     ];

//     let triangleOptions = {
//         x: trianglePoints[0].x,
//         y: trianglePoints[0].y,
//         w: triangleWidth,
//         h: triangleHeight,
//         fill: { color: 'FF00FF' },
//         rotate: 0
//     };
//     slide.addShape(pres.ShapeType.triangle, triangleOptions);

//     const percentages = [0, 25, 50, 75, 100];
//     const radius = (arcOptionsBase.w / 2) + 0.4;
//     percentages.forEach((percentage) => {
//         const angle = 180 + ((totalAngleRange * percentage) / 100);
//         const radian = (Math.PI / 180) * angle;
//         const labelX = centerX + (radius * Math.cos(radian)) - 0.25; 
//         const labelY = centerY + (radius * Math.sin(radian)) - 0.15; 
//         slide.addText(`${percentage}%`, { x: labelX, y: labelY, w: 0.5, h: 0.3, fontSize: 10, color: '000000' });
//     });

//     pres.writeFile("Sample_Presentation.pptx").then(() => {
//         console.log("Presentation created successfully!");
//     });  
// }

// generatePresentation({
//     x: 1,
//     y: 1,
//     w: 4,
//     h: 4
// });

// const PptxGenJS = require("pptxgenjs");

// function generatePresentation(arcOptionsBaseCm, values) {
  
//     let arcOptionsBase = {
//         x: arcOptionsBaseCm.x,
//         y: arcOptionsBaseCm.y,
//         w: arcOptionsBaseCm.w,
//         h: arcOptionsBaseCm.h
//     };

//     let pres = new PptxGenJS();
//     let slide = pres.addSlide();

//     // Assume values are sorted and provided in ascending order
//     // e.g., [0, 20, 50, 60, 100]
//     let totalAngleRange = 180; // 180 degrees (from 180 to 360)
//     let angleRanges = [];
//     for (let i = 1; i < values.length; i++) {
//         let angleRange = (totalAngleRange * (values[i] - values[i - 1])) / 100;
//         angleRanges.push(angleRange);
//     }

//     let colors = ['FF0000', '0000FF', '00FF00', 'FFFF00'];
//     let startAngle = 180;

//     for (let i = 0; i < angleRanges.length; i++) {
//         let arcOptions = {
//             ...arcOptionsBase,
//             angleRange: [startAngle, startAngle + angleRanges[i]],
//             line: { color: colors[i], width: 20 },
//         };
//         slide.addShape(pres.ShapeType.arc, arcOptions);
//         startAngle += angleRanges[i];
//     }

//     let centerX = arcOptionsBase.x + (arcOptionsBase.w / 2);
//     let centerY = arcOptionsBase.y + (arcOptionsBase.h / 2);

//     let ellipseWidth = arcOptionsBase.w * 0.05;
//     let ellipseHeight = arcOptionsBase.h * 0.05;

//     let ellipseOptions = {
//         x: centerX - (ellipseWidth / 2), 
//         y: centerY - (ellipseHeight / 2), 
//         w: ellipseWidth,  
//         h: ellipseHeight,   
//         fill: { color: '00FF00' }
//     };

//     slide.addShape(pres.ShapeType.ellipse, ellipseOptions);

//     let triangleWidth = arcOptionsBase.w * 0.04;
//     let triangleHeight = arcOptionsBase.h * 0.5;

//     let trianglePoints = [
//         { x: centerX - (triangleWidth / 2), y: arcOptionsBase.y },
//         { x: centerX + (triangleWidth / 2), y: arcOptionsBase.y },
//         { x: centerX, y: centerY - (arcOptionsBase.h / 2) }
//     ];

//     let triangleOptions = {
//         x: trianglePoints[0].x,
//         y: trianglePoints[0].y,
//         w: triangleWidth,
//         h: triangleHeight,
//         fill: { color: 'FF00FF' },
//         rotate: 0
//     };
//     slide.addShape(pres.ShapeType.triangle, triangleOptions);

//     // Adding percentage values
//     const radius = (arcOptionsBase.w / 2) + 0.4;
//     values.forEach((value) => {
//         const angle = 180 + ((totalAngleRange * value) / 100);
//         const radian = (Math.PI / 180) * angle;
//         const labelX = centerX + (radius * Math.cos(radian)) - 0.25; 
//         const labelY = centerY + (radius * Math.sin(radian)) - 0.15; 
//         slide.addText(`${value}%`, { x: labelX, y: labelY, w: 0.5, h: 0.3, fontSize: 12, color: '000000' });
//     });

//     pres.writeFile("Sample_Presentation.pptx").then(() => {
//         console.log("Presentation created successfully!");
//     });  
// }

// generatePresentation({
//     x: 1,
//     y: 1,
//     w: 3,
//     h: 3
// }, [0, 20, 50, 60, 100]);



// const PptxGenJS = require("pptxgenjs");

// function generatePresentation(arcOptionsBaseCm, minValue, maxValue, percentages) {
//     let arcOptionsBase = {
//         x: arcOptionsBaseCm.x,
//         y: arcOptionsBaseCm.y,
//         w: arcOptionsBaseCm.w,
//         h: arcOptionsBaseCm.h
//     };

//     let pres = new PptxGenJS();
//     let slide = pres.addSlide();

//     let totalAngleRange = 180; // 180 degrees (from 180 to 360)

//     // Calculate actual values from percentages
//     let values = percentages.map(percentage => minValue + ((maxValue - minValue) * percentage / 100));

//     // Calculate angle ranges for arcs
//     let angleRanges = [];
//     for (let i = 1; i < values.length; i++) {
//         let angleRange = (totalAngleRange * (values[i] - values[i - 1]) / (maxValue - minValue));
//         angleRanges.push(angleRange);
//     }

//     let colors = ['FF0000', '0000FF', '00FF00', 'FFFF00'];
//     let startAngle = 180;

//     for (let i = 0; i < angleRanges.length; i++) {
//         let arcOptions = {
//             ...arcOptionsBase,
//             angleRange: [startAngle, startAngle + angleRanges[i]],
//             line: { color: colors[i], width: 20 },
//         };
//         slide.addShape(pres.ShapeType.arc, arcOptions);
//         startAngle += angleRanges[i];
//     }

//     let centerX = arcOptionsBase.x + (arcOptionsBase.w / 2);
//     let centerY = arcOptionsBase.y + (arcOptionsBase.h / 2);

//     let ellipseWidth = arcOptionsBase.w * 0.05;
//     let ellipseHeight = arcOptionsBase.h * 0.05;

//     let ellipseOptions = {
//         x: centerX - (ellipseWidth / 2), 
//         y: centerY - (ellipseHeight / 2), 
//         w: ellipseWidth,  
//         h: ellipseHeight,   
//         fill: { color: '00FF00' }
//     };

//     slide.addShape(pres.ShapeType.ellipse, ellipseOptions);

//     let triangleWidth = arcOptionsBase.w * 0.04;
//     let triangleHeight = arcOptionsBase.h * 0.5;

//     let trianglePoints = [
//         { x: centerX - (triangleWidth / 2), y: arcOptionsBase.y },
//         { x: centerX + (triangleWidth / 2), y: arcOptionsBase.y },
//         { x: centerX, y: centerY - (arcOptionsBase.h / 2) }
//     ];

//     let triangleOptions = {
//         x: trianglePoints[0].x,
//         y: trianglePoints[0].y,
//         w: triangleWidth,
//         h: triangleHeight,
//         fill: { color: 'FF00FF' },
//         rotate: 0
//     };
//     slide.addShape(pres.ShapeType.triangle, triangleOptions);

//     // Adding percentage labels
//     const radius = (arcOptionsBase.w / 2) + 0.4;
//     percentages.forEach((percentage) => {
//         const angle = 180 + ((totalAngleRange * percentage) / 100);
//         const radian = (Math.PI / 180) * angle;
//         const labelX = centerX + (radius * Math.cos(radian)) - 0.25; 
//         const labelY = centerY + (radius * Math.sin(radian)) - 0.15; 
//         slide.addText(`${percentage}%`, { x: labelX, y: labelY, w: 0.5, h: 0.3, fontSize: 12, color: '000000' });
//     });

//     pres.writeFile("Sample_Presentation.pptx").then(() => {
//         console.log("Presentation created successfully!");
//     });  
// }

// // Example usage
// generatePresentation(
//     { x: 1, y: 1, w: 3 , h: 3 }, // arcOptionsBaseCm
//     10,  // minValue
//     110, // maxValue
//     [0, 20, 50, 60, 100] // percentages
// );


// const PptxGenJS = require("pptxgenjs");

// function generatePresentation(arcOptionsBaseCm, minValue, maxValue, percentages) {
//     let arcOptionsBase = {
//         x: arcOptionsBaseCm.x,
//         y: arcOptionsBaseCm.y,
//         w: arcOptionsBaseCm.w,
//         h: arcOptionsBaseCm.h
//     };

//     let pres = new PptxGenJS();
//     let slide = pres.addSlide();

//     let totalAngleRange = 180; 

//     let values = percentages.map(percentage => minValue + ((maxValue - minValue) * percentage / 100));

//     let angleRanges = [];
//     for (let i = 1; i < values.length; i++) {
//         let angleRange = (totalAngleRange * (values[i] - values[i - 1]) / (maxValue - minValue));
//         angleRanges.push(angleRange);
//     }

//     let colors = ['FF0000', '0000FF', '00FF00', 'FFFF00'];
//     let startAngle = 180;

//     for (let i = 0; i < angleRanges.length; i++) {
//         let arcOptions = {
//             ...arcOptionsBase,
//             angleRange: [startAngle, startAngle + angleRanges[i]],
//             line: { color: colors[i], width: 20 },
//         };
//         slide.addShape(pres.ShapeType.arc, arcOptions);
//         startAngle += angleRanges[i];
//     }

//     let centerX = arcOptionsBase.x + (arcOptionsBase.w / 2);
//     let centerY = arcOptionsBase.y + (arcOptionsBase.h / 2);

//     let ellipseWidth = arcOptionsBase.w * 0.05;
//     let ellipseHeight = arcOptionsBase.h * 0.05;

//     let ellipseOptions = {
//         x: centerX - (ellipseWidth / 2), 
//         y: centerY - (ellipseHeight / 2), 
//         w: ellipseWidth,  
//         h: ellipseHeight,   
//         fill: { color: '00FF00' }
//     };

//     slide.addShape(pres.ShapeType.ellipse, ellipseOptions);

//     let triangleWidth = arcOptionsBase.w * 0.04;
//     let triangleHeight = arcOptionsBase.h * 0.5;

//     let trianglePoints = [
//         { x: centerX - (triangleWidth / 2), y: arcOptionsBase.y },
//         { x: centerX + (triangleWidth / 2), y: arcOptionsBase.y },
//         { x: centerX, y: centerY - (arcOptionsBase.h / 2) }
//     ];

//     let triangleOptions = {
//         x: trianglePoints[0].x,
//         y: trianglePoints[0].y,
//         w: triangleWidth,
//         h: triangleHeight,
//         fill: { color: 'FF00FF' },
//         rotate: 0
//     };
//     slide.addShape(pres.ShapeType.triangle, triangleOptions);

//     const radius = (arcOptionsBase.w / 2) + 0.4;
//     percentages.forEach((percentage, index) => {
//         const angle = 180 + ((totalAngleRange * percentage) / 100);
//         const radian = (Math.PI / 180) * angle;
//         const labelX = centerX + (radius * Math.cos(radian)) - 0.25; 
//         const labelY = centerY + (radius * Math.sin(radian)) - 0.15; 

//         let labelText;
//         if (index === 0) {
//             labelText = `${minValue}`;
//         } else if (index === percentages.length - 1) {
//             labelText = `${maxValue}`;
//         } else {
//             labelText = `${percentage}%`;
//         }

//         slide.addText(labelText, { x: labelX, y: labelY, w: 0.5, h: 0.3, fontSize: 12, color: '000000' });
//     });

//     pres.writeFile("Sample_Presentation.pptx").then(() => {
//         console.log("Presentation created successfully!");
//     });  
// }

// generatePresentation(
//     { x: 1, y: 1, w: 3, h: 3 }, 
//     0, 
//     200, 
//     [50, 20, 10, 10,10 ] 
// );


// const PptxGenJS = require("pptxgenjs");

// function generatePresentation(arcOptionsBaseCm, minValue, maxValue, percentages) {
//     let arcOptionsBase = {
//         x: arcOptionsBaseCm.x,
//         y: arcOptionsBaseCm.y,
//         w: arcOptionsBaseCm.w,
//         h: arcOptionsBaseCm.h
//     };

//     let pres = new PptxGenJS();
//     let slide = pres.addSlide();

//     let totalAngleRange = 180; // 180 degrees (from 180 to 360)

//     // Normalize percentages to sum to 100%
//     const totalPercentage = percentages.reduce((acc, val) => acc + val, 0);
//     const normalizedPercentages = percentages.map(percentage => (percentage / totalPercentage) * 100);

//     // Calculate angle ranges for arcs
//     let angleRanges = normalizedPercentages.map(percentage => (totalAngleRange * percentage) / 100);

//     let colors = ['FF0000', '0000FF', '00FF00', 'FFFF00', 'FFA500'];
//     let startAngle = 180;

//     for (let i = 0; i < angleRanges.length; i++) {
//         let arcOptions = {
//             ...arcOptionsBase,
//             angleRange: [startAngle, startAngle + angleRanges[i]],
//             line: { color: colors[i % colors.length], width: 20 },
//         };
//         slide.addShape(pres.ShapeType.arc, arcOptions);
//         startAngle += angleRanges[i];
//     }

//     let centerX = arcOptionsBase.x + (arcOptionsBase.w / 2);
//     let centerY = arcOptionsBase.y + (arcOptionsBase.h / 2);

//     let ellipseWidth = arcOptionsBase.w * 0.05;
//     let ellipseHeight = arcOptionsBase.h * 0.05;

//     let ellipseOptions = {
//         x: centerX - (ellipseWidth / 2), 
//         y: centerY - (ellipseHeight / 2), 
//         w: ellipseWidth,  
//         h: ellipseHeight,   
//         fill: { color: '00FF00' }
//     };

//     slide.addShape(pres.ShapeType.ellipse, ellipseOptions);

//     let triangleWidth = arcOptionsBase.w * 0.04;
//     let triangleHeight = arcOptionsBase.h * 0.5;

//     let trianglePoints = [
//         { x: centerX - (triangleWidth / 2), y: arcOptionsBase.y },
//         { x: centerX + (triangleWidth / 2), y: arcOptionsBase.y },
//         { x: centerX, y: centerY - (arcOptionsBase.h / 2) }
//     ];

//     let triangleOptions = {
//         x: trianglePoints[0].x,
//         y: trianglePoints[0].y,
//         w: triangleWidth,
//         h: triangleHeight,
//         fill: { color: 'FF00FF' },
//         rotate: 0
//     };
//     slide.addShape(pres.ShapeType.triangle, triangleOptions);

//     // Adding percentage labels and min/max values
//     const radius = (arcOptionsBase.w / 2) + 0.4;
//     normalizedPercentages.forEach((percentage, index) => {
//         const angle = 180 + ((totalAngleRange * percentage) / 100);
//         const radian = (Math.PI / 180) * angle;
//         const labelX = centerX + (radius * Math.cos(radian)) - 0.25; 
//         const labelY = centerY + (radius * Math.sin(radian)) - 0.15; 

//         let labelText;
//         if (index === 0) {
//             labelText = `${minValue}`;
//         } else if (index === normalizedPercentages.length - 1) {
//             labelText = `${maxValue}`;
//         } else {
//             labelText = `${percentage.toFixed(2)}%`;
//         }

//         slide.addText(labelText, { x: labelX, y: labelY, w: 0.5, h: 0.3, fontSize: 12, color: '000000' });
//     });

//     pres.writeFile("Sample_Presentation.pptx").then(() => {
//         console.log("Presentation created successfully!");
//     });  
// }

// // Example usage
// generatePresentation(
//     { x: 1, y: 1, w: 3, h: 3 }, // arcOptionsBaseCm
//     0,  // minValue
//     200, // maxValue
//     [50, 30, 10, 10] // percentages
// );















// start



// const PptxGenJS = require("pptxgenjs");

// // Create a new presentation
// let pptx = new PptxGenJS();

// // Add a new slide
// let slide = pptx.addSlide();

// // Add an image to the slide
// slide.addImage({
//     path: "routes/door.png", // Path to your image file
//     x: 1,                          // X position (in inches)
//     y: 1,                          // Y position (in inches)
//     w: 5,                          // Width (in inches)
//     h: 3                           // Height (in inches)
// });

// // Save the presentation
// pptx.writeFile("presentation.pptx").then(() => {
//     console.log("Presentation created successfully.");
// }).catch((err) => {
//     console.error("Error creating presentation: ", err);
// });



// generatePresentation.js
// generatePresentation.js
// const Jimp = require('jimp');
// const PptxGenJS = require('pptxgenjs');
// const path = require('path');

// async function roundTopCorners(inputPath, outputPath, radius) {
//     const image = await Jimp.read(inputPath);
//     const width = image.bitmap.width;
//     const height = image.bitmap.height;
//     const mask = new Jimp(width, height, 0x00000000);

//     mask.scan(0, 0, width, height, (x, y, idx) => {
//         if (x < radius && y < radius) {
//             const dist = Math.sqrt(Math.pow(x - radius, 2) + Math.pow(y - radius, 2));
//             if (dist > radius) {
//                 mask.setPixelColor(0x00000000, x, y); 
//             }
//         }
//     });
//     image.mask(mask);
//     await image.writeAsync(outputPath);
// }

// const inputImagePath = 'routes/door.png';
// const outputImagePath = 'door_rounded.png';
// const cornerRadius = 50; // Adjust radius as needed


// async function createPresentation() {
//     try {
//         // Process the image
//         await roundTopCorners(inputImagePath, outputImagePath, cornerRadius);
//         console.log('Image processed successfully.');
//         let pptx = new PptxGenJS();

//         // Add a new slide
//         let slide = pptx.addSlide();

//         // Add the processed image to the slide
//         slide.addImage({
//             path: path.join(__dirname, outputImagePath),
//             x: 1,                          // X position (in inches)
//             y: 1,                          // Y position (in inches)
//             w: 5,                          // Width (in inches)
//             h: 3                           // Height (in inches)
//         });

//         // Save the presentation using WriteFileProps
//         await pptx.writeFile({ fileName: "presentation.pptx" });
//         console.log("Presentation created successfully.");
//     } catch (err) {
//         console.error("Error creating presentation:", err);
//     }
// }

// // Run the combined process
// createPresentation();


// const Jimp = require('jimp');
// const PptxGenJS = require('pptxgenjs');
// const path = require('path');

// async function roundTopCorners(inputPath, outputPath, radius) {
//     const image = await Jimp.read(inputPath);
//     const width = image.bitmap.width;
//     const height = image.bitmap.height;

//     // Create a mask for the rounded corners
//     const mask = new Jimp(width, height, 0x00000000);

//     mask.scan(0, 0, width, height, (x, y, idx) => {
//         // Check if pixel is within the top corners
//         if (x < radius && y < radius) {
//             const dist = Math.sqrt(Math.pow(x - radius, 2) + Math.pow(y - radius, 2));
//             if (dist > radius) {
//                 mask.setPixelColor(0x00000000, x, y); // Set transparent
//             }
//         }
//     });

//     // Apply the mask to the image
//     image.mask(mask);

//     // Save the processed image
//     await image.writeAsync(outputPath);
// }

// const inputImagePath = 'routes/door.png';
// const outputImagePath = 'door_rounded.png';
// const cornerRadius = 50; // Adjust radius as needed

// async function createPresentation() {
//     try {
//         // Process the image
//         await roundTopCorners(inputImagePath, outputImagePath, cornerRadius);
//         console.log('Image processed successfully.');

//         let pptx = new PptxGenJS();

//         // Add a new slide
//         let slide = pptx.addSlide();

//         // Add the processed image to the slide
//         slide.addImage({
//             path: path.join(__dirname, outputImagePath),
//             x: 1,                          // X position (in inches)
//             y: 1,                          // Y position (in inches)
//             w: 5,                          // Width (in inches)
//             h: 3                           // Height (in inches)
//         });

//         // Save the presentation using WriteFileProps
//         await pptx.writeFile({ fileName: "presentation.pptx" });
//         console.log("Presentation created successfully.");
//     } catch (err) {
//         console.error("Error creating presentation:", err);
//     }
// }

// // Run the combined process
// createPresentation();


// const Jimp = require('jimp');
// const path = require('path');

// async function roundTopCorners(inputPath, outputPath, radius) {
//     const image = await Jimp.read(inputPath);
//     const width = image.bitmap.width;
//     const height = image.bitmap.height;
//     const mask = new Jimp(width, height, 0x00000000);

//     mask.scan(0, 0, width, height, (x, y, idx) => {
//         if (x < radius && y < radius) {
//             const dist = Math.sqrt(Math.pow(x - radius, 2) + Math.pow(y - radius, 2));
//             if (dist > radius) {
//                 mask.setPixelColor(0x00000000, x, y);
//             }
//         }
//     });

//     image.mask(mask);
//     await image.writeAsync(outputPath);
//     await verifyImage(outputPath, radius);
// }

// async function verifyImage(imagePath, radius) {
//     const image = await Jimp.read(imagePath);
//     const width = image.bitmap.width;
//     const height = image.bitmap.height;
//     const topLeftCorner = image.getPixelColor(0, 0);

//     if (topLeftCorner === 0x00000000) {
//         console.log('Image is processed correctly with transparency in the top left corner.');
//     } else {
//         console.error('Image processing verification failed. Top left corner is not transparent.');
//     }
// }

// const inputImagePath = 'routes/Picture1.jpg';
// const outputImagePath = 'door_rounded.png';
// const cornerRadius = 50; 
// async function testImageProcessing() {
//     try {
//         await roundTopCorners(inputImagePath, outputImagePath, cornerRadius);
//         console.log('Image processed and verified successfully.');
//     } catch (err) {
//         console.error('Error processing or verifying the image:', err);
//     }
// }

// testImageProcessing();


// const Jimp = require('jimp');
// async function roundTopCorners(inputPath, outputPath, radius) {
//     try {
//         // Load the image
//         let image = await Jimp.read(inputPath);
//         const width = image.getWidth();
//         const height = image.getHeight();

//         console.log(`Original dimensions: ${width}x${height}`);

//         // Create a mask for rounded corners
//         const mask = new Jimp(width, height, 0x00000000); // Transparent mask

//         mask.scan(0, 0, width, height, (x, y, idx) => {
//             // Check if pixel is within the top corners
//             if (x < radius && y < radius) {
//                 const dist = Math.sqrt(Math.pow(x - radius, 2) + Math.pow(y - radius, 2));
//                 if (dist > radius) {
//                     mask.setPixelColor(0x00000000, x, y); // Set transparent
//                 } else {
//                     mask.setPixelColor(0x000000FF, x, y); // Set opaque
//                 }
//             } else {
//                 mask.setPixelColor(0x000000FF, x, y); // Set opaque for other areas
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

// // Example usage
// const inputPath = 'routes/Picture1.jpg';
// const outputPath = 'path_to_output_image.jpg';
// const cornerRadius = 50; // Adjust radius as needed

// roundTopCorners(inputPath, outputPath, cornerRadius);


// const Jimp = require('jimp');
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
//             if (x < radius && y < radius) {
//                 const dist = Math.sqrt(Math.pow(x - radius, 2) + Math.pow(y - radius, 2));
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

// // Paths and parameters
// const inputPath = path.join(__dirname, 'Picture1.jpg'); // Use absolute path
// const outputPath = path.join(__dirname, 'path_to_output_image.jpg'); // Use absolute path
// const cornerRadius = 100; // Adjust radius as needed

// // Run the function
// roundTopCorners(inputPath, outputPath, cornerRadius);