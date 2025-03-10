module.exports = function getSliderChart(options) {
  console.log("getSliderChart", JSON.stringify(options));

  const {
    x,
    y,
    w,
    h,
    minValue,
    maxValue,
    chartArea,
    showTitle,
    titleFontFace,
    titleFontSize,
    titleColor,
    titleAlign,
    titleBold,
    dataBorder,
    plotColor,
    ticks,
    value,
    minmaxfontsize = 14,
    relativePercentagefontsize = 20,
    fontFace = "Century Gothic",
    fontColor = "000000",
  } = options;

  if (w <= 0 || h <= 0 || minValue >= maxValue) {
    return [];
  }

  const getLayers = (metaType, value, options) => ({ metaType, value, options });


  const sliderY = y + h / 2;
  const sliderWidth = w - 0.6;
  const sliderHeight = 0.1653;
  const sliderX = x + 0.3;
  const baseline = sliderY - sliderHeight / 2 + 0.4;
  const elements = [];

  if (chartArea && chartArea.fill && chartArea.fill.color) {
    elements.push(
      getLayers("SHAPE", "rect", {
        x,
        y,
        w,
        h,
        fill: { color: chartArea.fill.color },
      })
    );
  }

  if (showTitle) {
    elements.push(
      getLayers("TEXT", value, {
        x,
        y,
        w,
        h: h / 3,
        fontFace: titleFontFace,
        fontSize: titleFontSize,
        color: titleColor,
        align: titleAlign,

        bold: titleBold,
      })
    );
  }
  elements.push(
    getLayers("SHAPE", "roundRect", {
      x: sliderX,
      y: sliderY - sliderHeight / 2,
      w: sliderWidth,
      h: sliderHeight,
      rectRadius: 0.2,
      line: { color: dataBorder.color, width: dataBorder.pt },
    }),
    getLayers("TEXT", `${minValue}%`, {
      x: sliderX,
      y: baseline,
      fontFace,
      fontSize: minmaxfontsize,
      color: fontColor,
    }),
    getLayers("TEXT", `${maxValue}%`, {
      x: sliderX + sliderWidth - 0.7,
      y: baseline,
      fontFace,
      fontSize: minmaxfontsize,
      color: fontColor,
    })
  );
  ticks.forEach((tick) => {
    const fillWidth = sliderWidth * (tick.value / 100);
    const knobX = sliderX + fillWidth - 0.1;
    const relativePercentage = (maxValue - minValue) * (tick.value / 100) + minValue;

    elements.push(
      getLayers("TEXT", `${relativePercentage}%`, {
        x: knobX - 0.15,
        y: baseline + 0.05,
        fontFace,
        fontSize: relativePercentagefontsize,
        color: fontColor,
      }),
      getLayers("SHAPE", "roundRect", {
        x: sliderX + 0.01,
        y: sliderY - sliderHeight / 2 + 0.01,
        w: fillWidth,
        h: sliderHeight - 0.01,
        fill: { color: tick.color},
        rectRadius: 0.2,
      }),
      getLayers("SHAPE", "rect", {
        x: knobX,
        y: sliderY - 0.11,
        w: sliderWidth / 33.3,
        h: sliderHeight + 0.06,
        fill: { color: plotColor },
        line: { color: dataBorder.color, width: dataBorder.pt },
      })
    );
  });

  return elements;
};