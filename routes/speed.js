
  module.exports = function getSpeedometerChart(options) {
    console.log("getSpeedometerChart", JSON.stringify(options));
    const { x, y, w, h, minValue, maxValue, ticks, showTitle, chartArea, titleFontFace, titleFontSize, titleColor, titleBold, value, plotArea, titleAlign, currentValue,color="000000",fontFace= "Century Gothic",fontSize=9} = options;
    const fillColor = (chartArea && chartArea.fill && chartArea.fill.color) ? chartArea.fill.color : null;
    const fillTransparency = (chartArea && chartArea.fill && chartArea.fill.transparency) ? chartArea.fill.transparency : null;
    const lineOptions = chartArea && chartArea.border ? { width : chartArea.border.pt,color : chartArea.border.color} : undefined
    const plotAreaColor = (plotArea && plotArea.fill && plotArea.fill.color) ? plotArea.fill.color : "ffffff";
    const  plotAreaBorder = plotArea && plotArea.border ? { width : plotArea.border.pt,color : plotArea.border.color} : undefined
    const elements = [];

  
    const rectOptions = {
      x: x,
      y: y,
      w: w,
      h: h,
      line:lineOptions
    };
  
    if (fillColor) {
      rectOptions.fill = { color: fillColor ,transparency:fillTransparency };
    }
  
    elements.push({
      metaType: "SHAPE",
      value: "rect",
      options: rectOptions
    });
  
    if (showTitle) {
      elements.push({
        metaType: "TEXT",
        value: value,
        options: {
          x: x,
          y: y,
          w: w,
          h: 0.5,
          fontFace: titleFontFace,
          fontSize: titleFontSize,
          color: titleColor,
          bold: titleBold,
          align: titleAlign,
          valign: 'middle'
        }
      });
    }
  
    const arcW = w / 2;
    const arcH = arcW;
    const arcX = x + (w - arcW) / 2;
    const arcY = y + h - arcH / 2 - 0.2;
  
    const arcOptionsBase = {
      x: arcX,
      y: arcY,
      w: arcW,
      h: arcH
    };
  
    const totalAngleRange = 180;
    const totalPercentage = ticks.reduce((acc, val) => acc + val.value, 0);
  
    // Adjust the last tick percentage to make the sum 100 if needed
    const normalizedPercentages = ticks.map(tick => tick.value);
    const difference = 100 - totalPercentage;
    normalizedPercentages[normalizedPercentages.length - 1] += difference;
  
    const angleRanges = normalizedPercentages.map(percentage => (totalAngleRange * percentage) / 100);
    let startAngle = 180;
  
    for (let i = 0; i < angleRanges.length; i++) {
      const arcOptions = {
        ...arcOptionsBase,
        angleRange: [startAngle, startAngle + angleRanges[i]],
        line: { color: ticks[i].color, width: 30 ,transparency:ticks[i]?.transparency }
      };
      elements.push({
        metaType: "SHAPE",
        value: "arc",
        options: arcOptions
      });
      startAngle += angleRanges[i];
    }
  
    // Calculate the rotation angle for the needle based on currentValue
    const normalizedValue = (currentValue - minValue) / (maxValue - minValue);
    let rotationAngle = 270 + normalizedValue * totalAngleRange;
  
    console.log(rotationAngle, "wghg");
  
    rotationAngle %= 360;
    if (rotationAngle > 0 && rotationAngle <= 90) {
      rotationAngle += 5;
    } else if (rotationAngle >= 270 && rotationAngle <= 360) {
      rotationAngle -= 4;
    }
  
    const centerX = arcOptionsBase.x + (arcOptionsBase.w / 2);
    const centerY = arcOptionsBase.y + (arcOptionsBase.h / 2);
  
    const ellipseWidth = arcOptionsBase.w * 0.14;
    const ellipseHeight = arcOptionsBase.h * 0.14;
    
  
    const ellipseOptions = {
      x: centerX - (ellipseWidth / 2),
      y: centerY - (ellipseHeight / 2) - 0.1,
      w: ellipseWidth,
      h: ellipseHeight,
      line:plotAreaBorder
    };

    if (plotAreaColor) {
      ellipseOptions.fill = { color: plotAreaColor };
    }
  
    elements.push({
      metaType: "SHAPE",
      value: "ellipse",
      options: ellipseOptions
    });
  
    const triangleWidth = arcOptionsBase.w * 0.08;
    const triangleHeight = arcOptionsBase.h * 0.47;
    const pivotX = centerX;
    const pivotY = centerY - (ellipseHeight / 2);
  
    const radians = (rotationAngle * Math.PI) / 180;
    const baseX = pivotX;
    const baseY = pivotY - (triangleHeight / 2);
    let rotatedX = baseX + Math.cos(radians) * (-triangleWidth / 2) - Math.sin(radians) * (-triangleHeight / 2);
    let rotatedY = baseY + Math.sin(radians) * (-triangleWidth / 2) + Math.cos(radians) * (-triangleHeight / 2);
  
    if (rotationAngle > 0 && rotationAngle <= 100) {
      rotatedX -= 0.05;
      rotatedY += 0.15;
    }
  
    const triangleOptions = {
      x: rotatedX,
      y: rotatedY,
      w: triangleWidth,
      h: triangleHeight,
      rotate: rotationAngle,
      line:plotAreaBorder
    };

    if (plotAreaColor) {
      triangleOptions.fill = { color: plotAreaColor };
    }
  
    elements.push({
      metaType: "SHAPE",
      value: "triangle",
      options: triangleOptions
    });
  
    const radius = (arcOptionsBase.w / 2) + 0.4;
    let currentAngle = 180;
  
    const minAngleRadian = (Math.PI / 180) * 180;
    const minLabelX = centerX + (radius * Math.cos(minAngleRadian)) - 0.25;
    const minLabelY = centerY + (radius * Math.sin(minAngleRadian)) - 0.15;
  
    elements.push({
      metaType: "TEXT",
      value: `${0}%`,
      options: {
        x: minLabelX - 0.1,
        y: minLabelY - 0.05,
        w: 0.5,
        h: 0.3,
        fontSize: fontSize,
        color:color,
        fontFace:fontFace
      }
    });
  
    let cumulativePercentage = 0;
    for (let i = 0; i < angleRanges.length; i++) {
      cumulativePercentage += normalizedPercentages[i];
      if (cumulativePercentage >= 100) break;
      const radian = (Math.PI / 180) * (currentAngle + angleRanges[i]);
      const labelX = centerX + (radius * Math.cos(radian)) - 0.25;
      const labelY = centerY + (radius * Math.sin(radian)) - 0.15;
  
      elements.push({
        metaType: "TEXT",
        value: `${cumulativePercentage.toFixed(0)}%`,
        options: {
          x: labelX,
          y: labelY,
          w: 0.5,
          h: 0.3,
          fontSize: fontSize,
          color:color,
          fontFace:fontFace
        }
      });
  
      currentAngle += angleRanges[i];
    }
  
    const maxAngleRadian = (Math.PI / 180) * (180 + totalAngleRange);
    const maxLabelX = centerX + (radius * Math.cos(maxAngleRadian)) - 0.25;
    const maxLabelY = centerY + (radius * Math.sin(maxAngleRadian)) - 0.15;
  
    elements.push({
      metaType: "TEXT",
      value: `${100}%`,
      options: {
        x: maxLabelX + 0.1,
        y: maxLabelY - 0.05,
        w: 0.5,
        h: 0.3,
        fontSize: fontSize,
        color:color,
        fontFace:fontFace

      }
    });
  
  
    return elements;
  };
  
  
 
  
  
  

