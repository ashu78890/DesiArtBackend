// const express = require('express');
// const PptxGenJS = require('pptxgenjs');
// const path = require('path');

// const app = express();
// const PORT = 3001;

// app.get('/', (req, res) => {
//   let pptx = new PptxGenJS();

//   let slide = pptx.addSlide();

  

// let customShapePoints = [
//     { x: 1, y: 1 },                                  // Top-left corner
//     { x: 6, y: 1 },                                  // Top-right corner
//     { x: 6, y: 3 },                                  // Bottom-right corner
//     { x: 1, y: 3 },                                  // Bottom-left corner
//     { x: 1, y: 1, curve: { type: 'quadratic', x1:  0, y1: 0 } },   // Top-left curve
//     { x: 6, y: 1, curve: { type: 'quadratic', x1: 4.5, y1: 0 } },   // Top-right curve
//   ];

// let customShapePoints = [
//     { x: 0, y: 0 },                                    // Top-left corner
//     { x: 0, y: 2 },                                    // Top-right corner
//     { x: 6, y: 2 },                                    // Bottom-right corner
//     { x: 6, y: 0 },                                    // Bottom-left corner
//     { x: 1, y: 1.5, curve: { type: 'quadratic', x1: 1, y1: 1 } },   // Top-left curve
//     // { x: 6, y: 1.5, curve: { type: 'quadratic', x1: 5, y1: 1 } },   // Top-right curve
//   ];

//   slide.addShape(pptx.shapes.CUSTOM_GEOMETRY, {
//     x: 1,
//     y: 1,
//     w: 5,
//     h: 2.5,
//     fill: { color: '0088CC' },
//     // line: { color: '000000' },
//     points: customShapePoints
//   });

// let customShapePoints = [
//     { x: 1, y: 1 },                                   // Top-left point of stem
//     { x: 3, y: 1 },                                   // Top-right point of stem
//     { x: 3, y: 4 },                                   // Bottom-right point of stem
//     { x: 1, y: 4 },                                   // Bottom-left point of stem
//     { x: 1, y: 1.5, curve: { type: 'quadratic', x1: 0, y1: 2 } },  // Top-left curve of semicircle
//     { x: 2, y: 1, curve: { type: 'quadratic', x1: 3, y1: 0 } },   // Bottom curve of semicircle
//   ];

//   slide.addShape(pptx.shapes.CUSTOM_GEOMETRY, {
//     x: 1,
//     y: 1,
//     w: 1,
//     h: 1,
//     fill: { color: '0088CC' },
//     // line: { color: '000000' },
//     points: customShapePoints
//   });


//   pptx.writeFile('CustomShapePresentation.pptx').then(fileName => {
//     res.download(path.resolve(fileName));
//   }).catch(err => {
//     console.error(err);
//     res.status(500).send('Error generating presentation');
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


// Define points for a rectangle with top rounded corners
//   let customShapePoints = [
//     { x: 0.0, y: 0.2 },
//     { x: 0.0, y: 0.0, curve: { type: 'quadratic', x1: 0.1, y1: 0.0 } },
//     { x: 0.9, y: 0.0, curve: { type: 'quadratic', x1: 1.0, y1: 0.0 } },
//     { x: 1.0, y: 0.2 },
//     { x: 1.0, y: 0.8 },
//     { x: 0.0, y: 0.8 },
//     { x: 0.0, y: 0.2 }
//   ];

const express = require('express');
const PptxGenJS = require('pptxgenjs');
const path = require('path');

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  let pptx = new PptxGenJS();
  let slide = pptx.addSlide();

  // Define dimensions for the rectangle
  let x = 1;
  let y = 1;
  let width = 5;
  let height = 2;

  // Define points for a rectangle with only top corners rounded
  let customShapePoints = [
    { x: x, y: y },                                         // Top-left corner
    { x: x + width, y: y },                                  // Top-right corner
    { x: x + width, y: y + height },                         // Bottom-right corner
    { x: x, y: y + height },                                 // Bottom-left corner
    { x: x, y: y + 1.5 * height, curve: { type: 'quadratic', x1: x, y1: y + height } },     // Top-left curve
    { x: x + width, y: y + 1.5 * height, curve: { type: 'quadratic', x1: x + width, y1: y + height } }  // Top-right curve
  ];

  slide.addShape(pptx.shapes.CUSTOM_GEOMETRY, {
    x: x,
    y: y,
    w: width,
    h: height,
    fill: { color: '0088CC' },
    line: { color: '000000' },
    points: customShapePoints
  });

  pptx.writeFile('CustomShapePresentation.pptx').then(fileName => {
    res.download(path.resolve(fileName));
  }).catch(err => {
    console.error(err);
    res.status(500).send('Error generating presentation');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
