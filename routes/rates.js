const express = require('express');
const fs = require('fs');
const { JSDOM } = require('jsdom');
const pptxgen = require('pptxgenjs');

const app = express();
const port = 3001 ;

function changeSvgColorAndSize(svgContent, color, widthCm, heightCm) {
  const dom = new JSDOM(svgContent);
  const svg = dom.window.document.querySelector('svg');

  // Change color
  svg.querySelectorAll('*').forEach(element => {
    if (element.getAttribute('fill')) {
      element.setAttribute('fill', color);
    }
  });

  // Change size (converting cm to pixels, assuming 96 DPI)
  const widthPx = widthCm * 37.7952755906;
  const heightPx = heightCm * 37.7952755906;
  svg.setAttribute('width', widthPx);
  svg.setAttribute('height', heightPx);

  return dom.serialize();
}

app.get('/generate-ppt', (req, res) => {
  const svgContent = fs.readFileSync('routes/circle.svg', 'utf-8');
  const color = req.query.color || '#ff0000'; // New color from query param or default
  const widthCm = parseFloat(req.query.widthCm) || 10; // Width in cm from query param or default
  const heightCm = parseFloat(req.query.heightCm) || 5; // Height in cm from query param or default

  const modifiedSvgContent = changeSvgColorAndSize(svgContent, color, widthCm, heightCm);

  const pptx = new pptxgen();
  const slide = pptx.addSlide();

  slide.addImage({
    // path:`data:image/svg+xml;base64,${Buffer.from(modifiedSvgContent).toString('base64')}`,
    data: `image/svg+xml;base64,${Buffer.from(modifiedSvgContent).toString('base64')}`,
    x: 1,
    y: 1,
    w: widthCm,
    h: heightCm,

  });

  pptx.write('base64').then((data) => {
    const buffer = Buffer.from(data, 'base64');
    fs.writeFileSync('example.pptx', buffer);
    res.download('example.pptx', 'example.pptx', (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).send('Error generating PowerPoint file');
      }
    });
  }).catch((err) => {
    console.error('Error generating PowerPoint file:', err);
    res.status(500).send('Error generating PowerPoint file');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
