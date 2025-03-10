// const express = require("express");
// const pptxgen = require("pptxgenjs");
// const generateSlider = require("./speed.js");

// const app = express();
// const PORT = 3000;

// const filename = "Template2.pptx";

// app.get("/", async function (req, res) {
 

//   const options = {
//         rectOptions: { x: 17.27 / 2.54, y: 11.12 / 2.54, w: 15.16 / 2.54, h: 6.52 / 2.54 },
//         minValue: 200,
//         maxValue: 500,
//         percentages: [
//             { percentage: 65, color: 'FF0000' },
//             { percentage: 10, color: '0000FF' },
//             { percentage: 10, color: '00FF00' },
//             { percentage: 15, color: 'FFFF00' }
//         ],
//         showTitle: true,
//         colors: {
//             rectangle: 'FFA500',
//             ellipse: '00FF00',
//             triangle: '00FF00'
//         }
//     };

//   const slideMetadata = generateSlider(options);
//   const pptx = new pptxgen();
//   pptx.layout = "LAYOUT_WIDE";

//   const slide = pptx.addSlide();

//   slideMetadata.forEach((design, slideIndex) => {
//     const { metaType, options, value } = design;
//     if (metaType === "IMAGE") {
//       slide.addImage({ path: value, ...options });
//     } else if (metaType === "SHAPE") {
//       slide.addShape(pptx.shapes[value], options);
//     } else if (metaType === "TEXT") {
//       slide.addText(value, options);
//     }
//   });

//   const stream = await pptx.stream({ fileName: filename });
//   res.writeHead(200, {
//     "Content-disposition": `attachment;filename=${filename}`,
//     "Content-Length": stream.length,
//   });
//   res.end(new Buffer(stream, "binary"));
// });

// app.listen(PORT, (error) => {
//   if (!error) {
//     console.log("Server is Successfully Running, and App is listening on port " + PORT);
//   } else console.log("Error occurred, server can't start", error);
// });

  // const options = {
  //   x: 17.27 / 2.54, y: 11.12 / 2.54, w: 15.16 / 2.54, h: 6.52 / 2.54 ,
  //   minValue: 200,
  //   maxValue: 500,
  //   // percentages: [
  //   //   { percentage: 65, color: 'FF0000' },
  //   //   { percentage: 10, color: '0000FF' },
  //   //   { percentage: 10, color: '00FF00' },
  //   //   { percentage: 15, color: 'FFFF00' }
  //   // ],
  //    percentages: [
  //   { percentage: 25, color: "FF0000" },
  //   { percentage: 50, color: "FF0000" },
  //   { percentage: 25, color: "E89992" },
  //    ],
  //   showTitle: true,
  //   titleColor: "000000",
  //   titleFontFace: "Century Gothic",
  //   titleFontSize: 10,
  //   titleBold: false,
  //   chartArea: {fill: { color: "f5f5f5" }},

  // };


const express = require("express");
const pptxgen = require("pptxgenjs");
const generatePresentation = require("./speed.js");

const app = express();
const PORT = 3000;

const filename = "Template2.pptx";

app.get("/", async function (req, res) {

  const options = {
    x: 17.27 / 2.54,
    y: 11.12 / 2.54,
    w: 15.16 / 2.54,
    h: 6.52 / 2.54,
    minValue: 0,
    maxValue: 100,
    currentValue:100,
    ticks: [
      { value: 40, color: "FF0000",transparency:30 },
      { value: 40, color: "000000",transparency:30 },
      { value :30, color:"FF0000"}
    ],
    showTitle: true,
    titleAlign: "center",
    titleColor: "000000",
    titleFontSize: "12",
    titleFontFace: "Century Gothic",
    value: "Performance Metrics Distribution",
    plotArea: { fill: { color: "" } },
    chartArea: { fill: { color: "F1F1F1" }   },
    color:"ffffff",
    fontSize:12,

  };

  const slideMetadata = generatePresentation(options);
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_WIDE";

  const slide = pptx.addSlide();

  slideMetadata.forEach((design) => {
    const { metaType, options, value } = design;
    if (metaType === "IMAGE") {
      slide.addImage({ path: value, ...options });
    } else if (metaType === "SHAPE") {
      slide.addShape(pptx.ShapeType[value], options);
    } else if (metaType === "TEXT") {
      slide.addText(value, options);
    }
  });

  const stream = await pptx.stream();
  res.writeHead(200, {
    "Content-Disposition": `attachment;filename=${filename}`,
    "Content-Length": stream.length,
  });
  res.end(Buffer.from(stream, "binary"));
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is Successfully Running, and App is listening on port " + PORT);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});

