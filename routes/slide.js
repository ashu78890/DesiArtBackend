const express = require("express");
const pptxgen = require("pptxgenjs");
const getSliderChart = require("./slider.js");

const app = express();
const PORT = 3001;

const filename = "Template2.pptx";

app.get("/", async function (req, res) {
const options = {
  "x":0.44488188976377946,
  "y":2.9055118110236218,
  "w":6.059055118110236,
  "h":1.1889763779527558,
  "showTitle":1,
  "catGridLine":{},
  "valGridLine":{},
  "dataBorder":{"pt":"1","color":"000000"},
  "chartArea":{"fill":{"color":"FFFFFF"}},
  "plotColor":"8597B2",
  "minValue":0,
  "maxValue":100,
  "ticks":[{"color":"43556C","value":50}],
  "titleAlign":"center",
  "titleColor":"000000",
  "titleFontSize":"12",
  "titleFontFace":"Century Gothic",
  "chartColors":["#43556C","#8597B2","#3F3F3F","#3F3F3F","#FFFFFF","#000000"],
  "title":"Performance Metrics Distribution","value":"Performance Metrics Distribution"}

  const slideMetadata = getSliderChart(options);
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_WIDE";

  const slide = pptx.addSlide();

  slideMetadata.forEach((design, slideIndex) => {
    const { metaType, options, value } = design;
    if (metaType === "IMAGE") {
      slide.addImage({ path: value, ...options });
    } else if (metaType === "SHAPE") {
      slide.addShape(pptx.shapes[value], options);
      console.log("shapes", pptx.shapes[value]);
    } else if (metaType === "TEXT") {
      slide.addText(value, options);
    }
  });

  const stream = await pptx.stream({ fileName: filename });
  res.writeHead(200, {
    "Content-disposition": `attachment;filename=${filename}`,
    "Content-Length": stream.length,
  });
  res.end(new Buffer(stream, "binary"));
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is Successfully Running, and App is listening on port " + PORT);
  } else console.log("Error occurred, server can't start", error);
});

