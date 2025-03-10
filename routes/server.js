// const PptxGenJS = require("pptxgenjs");

// function generatePresentation(rectOptions,arcOptionsBaseCm, minValue, maxValue, percentages,showTitle) {
//     let arcOptionsBase = {
//         x: arcOptionsBaseCm.x,
//         y: arcOptionsBaseCm.y,
//         w: arcOptionsBaseCm.w,
//         h: arcOptionsBaseCm.h
//     };

//     let pres = new PptxGenJS();
//     pres.layout = "LAYOUT_WIDE";

//     let slide = pres.addSlide();

//     slide.addShape(pres.ShapeType.rect, {
//         x: rectOptions.x,
//         y: rectOptions.y,
//         w: rectOptions.w,
//         h: rectOptions.h,
//         fill: { color: 'FFA500' }
//     });


//     if (showTitle) {
//         slide.addText('Title Text', {
//             x: rectOptions.x,
//             y: rectOptions.y,
//             w: rectOptions.w,
//             h: 0.5,
//             fontSize: 11,
//             color: '000000',
//             align: 'center', 
//             valign: 'middle'
//         });
//     }

//     let totalAngleRange = 180;

//     const totalPercentage = percentages.reduce((acc, val) => acc + val, 0);
//     const normalizedPercentages = percentages.map(percentage => (percentage / totalPercentage) * 100);

//     let angleRanges = normalizedPercentages.map(percentage => (totalAngleRange * percentage) / 100);
//     console.log(angleRanges,"angleRange")

//     let colors = ['FF0000', '0000FF', '00FF00', 'FFFF00', 'FFA500'];
//     let startAngle = 180;

//     for (let i = 0; i < angleRanges.length; i++) {
//         let arcOptions = {
//             ...arcOptionsBase,
//             angleRange: [startAngle, startAngle + angleRanges[i]],
//             line: { color: colors[i % colors.length], width: 30 },
//         };
//         slide.addShape(pres.ShapeType.arc, arcOptions);
//         startAngle += angleRanges[i];
//     }

//     let centerX = arcOptionsBase.x + (arcOptionsBase.w / 2);
//     let centerY = arcOptionsBase.y + (arcOptionsBase.h / 2);

//     let ellipseWidth = arcOptionsBase.w * 0.1;
//     let ellipseHeight = arcOptionsBase.h * 0.1;

//     let ellipseOptions = {
//         x: centerX - (ellipseWidth / 2),
//         y: centerY - (ellipseHeight / 2) - 0.1,
//         w: ellipseWidth,
//         h: ellipseHeight,
//         fill: { color: '00FF00' }
//     };

//     slide.addShape(pres.ShapeType.ellipse, ellipseOptions);

//     let triangleWidth = arcOptionsBase.w * 0.08;
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
//         fill: { color: '00FF00' },
//         rotate: 0
//     };
//     slide.addShape(pres.ShapeType.triangle, triangleOptions);

//     const radius = (arcOptionsBase.w / 2) + 0.4;
//     let currentAngle = 180;

//     let minAngleRadian = (Math.PI / 180) * 180;
//     let minLabelX = centerX + (radius * Math.cos(minAngleRadian)) - 0.25;
//     let minLabelY = centerY + (radius * Math.sin(minAngleRadian)) - 0.15;
//     slide.addText(`${minValue}`, { x: minLabelX, y: minLabelY, w: 0.5, h: 0.3, fontSize: 9, color: '000000' });

  
//     for (let i = 0; i < normalizedPercentages.length; i++) {
//         const angle = currentAngle + (angleRanges[i] / 2);
//         const radian = (Math.PI / 180) * angle;
//         const labelX = centerX + (radius * Math.cos(radian)) - 0.25;
//         const labelY = centerY + (radius * Math.sin(radian)) - 0.15;
//         slide.addText(`${percentages[i]}%`, { x: labelX, y: labelY, w: 0.5, h: 0.3, fontSize: 9, color: '000000' });
//         currentAngle += angleRanges[i];
//     }

//     let maxAngleRadian = (Math.PI / 180) * (180 + totalAngleRange);
//     let maxLabelX = centerX + (radius * Math.cos(maxAngleRadian)) - 0.25;
//     let maxLabelY = centerY + (radius * Math.sin(maxAngleRadian)) - 0.15;
//     slide.addText(`${maxValue}`, { x: maxLabelX, y: maxLabelY, w: 0.5, h: 0.3, fontSize: 9, color: '000000', align:'right' });

//     pres.writeFile("Sample_Presentation.pptx").then(() => {
//         console.log("Presentation created successfully!");
//     });
// }


// generatePresentation(
//     { x: 6.79, y: 4.37, w: 5.96, h: 2.56 },
//     { x: 8.33, y: 5.22, w: 3.18, h:3.11}, 
//     200,  
//     500, 
//     [50,50],
//     true
// );

// const PptxGenJS = require("pptxgenjs");

// function generatePresentation(rectOptions, arcOptionsBaseCm, minValue, maxValue, percentages, showTitle, colors) {
//     let arcOptionsBase = {
//         x: arcOptionsBaseCm.x,
//         y: arcOptionsBaseCm.y,
//         w: arcOptionsBaseCm.w,
//         h: arcOptionsBaseCm.h
//     };

//     let pres = new PptxGenJS();
//     pres.layout = "LAYOUT_WIDE";

//     let slide = pres.addSlide();

//     slide.addShape(pres.ShapeType.rect, {
//         x: rectOptions.x,
//         y: rectOptions.y,
//         w: rectOptions.w,
//         h: rectOptions.h,
//         fill: { color: colors.rectangle }
//     });

//     if (showTitle) {
//         slide.addText('Title Text', {
//             x: rectOptions.x,
//             y: rectOptions.y + 0.1,
//             w: rectOptions.w,
//             h: 0.5,
//             fontSize: 11,
//             color: '000000',
//             align: 'center',
//             valign: 'middle'
//         });
//     }

//     let totalAngleRange = 180;

//     const totalPercentage = percentages.reduce((acc, val) => acc + val, 0);
//     const normalizedPercentages = percentages.map(percentage => (percentage / totalPercentage) * 100);

//     let angleRanges = normalizedPercentages.map(percentage => (totalAngleRange * percentage) / 100);
//     console.log(angleRanges, "angleRange");

//     let startAngle = 180;

//     for (let i = 0; i < angleRanges.length; i++) {
//         let arcOptions = {
//             ...arcOptionsBase,
//             angleRange: [startAngle, startAngle + angleRanges[i]],
//             line: { color: colors.arcs[i % colors.arcs.length], width: 30 },
//         };
//         slide.addShape(pres.ShapeType.arc, arcOptions);
//         startAngle += angleRanges[i];
//     }

//     let centerX = arcOptionsBase.x + (arcOptionsBase.w / 2);
//     let centerY = arcOptionsBase.y + (arcOptionsBase.h / 2);

//     let ellipseWidth = arcOptionsBase.w * 0.1;
//     let ellipseHeight = arcOptionsBase.h * 0.1;

//     let ellipseOptions = {
//         x: centerX - (ellipseWidth / 2),
//         y: centerY - (ellipseHeight / 2) - 0.1,
//         w: ellipseWidth,
//         h: ellipseHeight,
//         fill: { color: colors.ellipse }
//     };

//     slide.addShape(pres.ShapeType.ellipse, ellipseOptions);

//     let triangleWidth = arcOptionsBase.w * 0.08;
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
//         fill: { color: colors.triangle },
//         rotate: 0
//     };
//     slide.addShape(pres.ShapeType.triangle, triangleOptions);

//     const radius = (arcOptionsBase.w / 2) + 0.4;
//     let currentAngle = 180;

//     let minAngleRadian = (Math.PI / 180) * 180;
//     let minLabelX = centerX + (radius * Math.cos(minAngleRadian)) - 0.25;
//     let minLabelY = centerY + (radius * Math.sin(minAngleRadian)) - 0.15;
//     slide.addText(`${minValue}`, { x: minLabelX, y: minLabelY, w: 0.5, h: 0.3, fontSize: 9, color: '000000' });

//     for (let i = 0; i < normalizedPercentages.length; i++) {
//         const angle = currentAngle + (angleRanges[i] / 2);
//         const radian = (Math.PI / 180) * angle;
//         const labelX = centerX + (radius * Math.cos(radian)) - 0.25;
//         const labelY = centerY + (radius * Math.sin(radian)) - 0.15;
//         slide.addText(`${percentages[i]}%`, { x: labelX, y: labelY, w: 0.5, h: 0.3, fontSize: 9, color: '000000' });
//         currentAngle += angleRanges[i];
//     }

//     let maxAngleRadian = (Math.PI / 180) * (180 + totalAngleRange);
//     let maxLabelX = centerX + (radius * Math.cos(maxAngleRadian)) - 0.25;
//     let maxLabelY = centerY + (radius * Math.sin(maxAngleRadian)) - 0.15;
//     slide.addText(`${maxValue}`, { x: maxLabelX, y: maxLabelY, w: 0.5, h: 0.3, fontSize: 9, color: '000000' });

//     pres.writeFile("Sample_Presentation.pptx").then(() => {
//         console.log("Presentation created successfully!");
//     });
// }

// generatePresentation(
//     { x: 6.79, y: 4.37, w: 5.96, h: 2.56 },
//     { x: 8.33, y: 5.22, w: 3.18, h: 3.11 },
//     200,
//     500,
//     [60,40],
//     true,
//     {
//         rectangle: '#F2F3F6',
//         arcs: ['#061651', '#0D31B3'], 
//         ellipse: '#595959', 
//         triangle: '#595959' 
//     }
// );

// const PptxGenJS = require("pptxgenjs");

// function generatePresentation(rectOptions, minValue, maxValue, percentages, showTitle, colors) {
//     let pres = new PptxGenJS();
//     pres.layout = "LAYOUT_WIDE";

//     let slide = pres.addSlide();

//     // Add the rectangle with given dimensions and color
//     slide.addShape(pres.ShapeType.rect, {
//         x: rectOptions.x,
//         y: rectOptions.y,
//         w: rectOptions.w,
//         h: rectOptions.h,
//         fill: { color: colors.rectangle }
//     });

//     // Add the title above the rectangle if showTitle is true
//     if (showTitle) {
//         slide.addText('Title Text', {
//             x: rectOptions.x,
//             y: rectOptions.y , // Adjust y position to be above the rectangle
//             w: rectOptions.w,
//             h: 0.5,
//             fontSize: 14,
//             color: '000000',
//             align: 'center',
//             valign: 'middle'
//         });
//     }


//     let arcW = rectOptions.w / 2; // Arc width is half of rectangle width
//     let arcH = arcW; // Arc height is same as width
//     let arcX = rectOptions.x + (rectOptions.w - arcW) / 2; // Center the arc horizontally over the rectangle
//     let arcY = rectOptions.y + rectOptions.h - arcH / 2 - 0.2; // Position the arc so that half of it starts from the bottom of the rectangle
    
//     let arcOptionsBase = {
//         x: arcX,
//         y: arcY,
//         w: arcW,
//         h: arcH
//     };

//     let totalAngleRange = 180;

//     const totalPercentage = percentages.reduce((acc, val) => acc + val, 0);
//     const normalizedPercentages = percentages.map(percentage => (percentage / totalPercentage) * 100);

//     let angleRanges = normalizedPercentages.map(percentage => (totalAngleRange * percentage) / 100);
//     let startAngle = 180;

//     for (let i = 0; i < angleRanges.length; i++) {
//         let arcOptions = {
//             ...arcOptionsBase,
//             angleRange: [startAngle, startAngle + angleRanges[i]],
//             line: { color: percentages[i].color, width: 30 }
//         };
//         slide.addShape(pres.ShapeType.arc, arcOptions);
//         startAngle += angleRanges[i];
//     }

//     let centerX = arcOptionsBase.x + (arcOptionsBase.w / 2);
//     let centerY = arcOptionsBase.y + (arcOptionsBase.h / 2);

//     // Adjust ellipse position to be in the upper part of the arc
//     let ellipseWidth = arcOptionsBase.w * 0.1;
//     let ellipseHeight = arcOptionsBase.h * 0.1;

//     let ellipseOptions = {
//         x: centerX - (ellipseWidth / 2),
//         y: centerY - (ellipseHeight / 2) - 0.1, // Adjust y position to be above the arc center
//         w: ellipseWidth,
//         h: ellipseHeight,
//         fill: { color: colors.ellipse }
//     };

//     slide.addShape(pres.ShapeType.ellipse, ellipseOptions);

//     // Adjust triangle position to start at the top of the ellipse
//     let triangleWidth = arcOptionsBase.w * 0.08;
//     let triangleHeight = arcOptionsBase.h * 0.5;

//     let triangleOptions = {
//         x: centerX - (triangleWidth / 2),
//         y: ellipseOptions.y - triangleHeight,
//         w: triangleWidth,
//         h: triangleHeight,
//         fill: { color: colors.triangle },
//         rotate: 0
//     };
//     slide.addShape(pres.ShapeType.triangle, triangleOptions);

//     const radius = (arcOptionsBase.w / 2) + 0.4;
//     let currentAngle = 180;

//     let minAngleRadian = (Math.PI / 180) * 180;
//     let minLabelX = centerX + (radius * Math.cos(minAngleRadian)) - 0.25;
//     let minLabelY = centerY + (radius * Math.sin(minAngleRadian)) - 0.15;
//     slide.addText(`${minValue}`, { x: minLabelX, y: minLabelY, w: 0.5, h: 0.3, fontSize: 9, color: '000000' });

//     for (let i = 0; i < normalizedPercentages.length; i++) {
//         const angle = currentAngle + (angleRanges[i] / 2);
//         const radian = (Math.PI / 180) * angle;
//         const labelX = centerX + (radius * Math.cos(radian)) - 0.25;
//         const labelY = centerY + (radius * Math.sin(radian)) - 0.15;
//         slide.addText(`${percentages[i]}%`, { x: labelX, y: labelY, w: 0.5, h: 0.3, fontSize: 9, color: '000000' });
//         currentAngle += angleRanges[i];
//     }

//     let maxAngleRadian = (Math.PI / 180) * (180 + totalAngleRange);
//     let maxLabelX = centerX + (radius * Math.cos(maxAngleRadian)) - 0.25;
//     let maxLabelY = centerY + (radius * Math.sin(maxAngleRadian)) - 0.15;
//     slide.addText(`${maxValue}`, { x: maxLabelX, y: maxLabelY, w: 0.5, h: 0.3, fontSize: 9, color: '000000' });

//     pres.writeFile("Sample_Presentation.pptx").then(() => {
//         console.log("Presentation created successfully!");
//     });
// }

// generatePresentation(
//     { x:17.27/2.54 , y: 11.12/2.54, w: 15.16/2.54, h:6.52/2.54 },
//     200,
//     500,
//     [
//         { percentage: 65, color: 'FF0000' }, 
//         { percentage: 10, color: '0000FF' }, 
//         { percentage: 10, color: '00FF00' }, 
//         { percentage: 15, color: 'FFFF00' }
//     ],
//     true,
//     {
//         rectangle: 'FFA500', 
//         arcs: ['FF0000', '0000FF', '00FF00', 'FFFF00', 'FFA500'], 
//         ellipse: '00FF00', 
//         triangle: '00FF00'
//     }
// );


const PptxGenJS = require("pptxgenjs");

function generatePresentation(rectOptions, minValue, maxValue, percentages, showTitle, colors) {
    let pres = new PptxGenJS();
    pres.layout = "LAYOUT_WIDE";

    let slide = pres.addSlide();

    // Add the rectangle with given dimensions and color
    slide.addShape(pres.ShapeType.rect, {
        x: rectOptions.x,
        y: rectOptions.y,
        w: rectOptions.w,
        h: rectOptions.h,
        fill: { color: colors.rectangle },
        line: { color: '000000', width: 2 }
    });

    // Add the title above the rectangle if showTitle is true
    if (showTitle) {
        slide.addText('Title Text', {
            x: rectOptions.x,
            y: rectOptions.y, // Position the title above the rectangle
            w: rectOptions.w,
            h: 0.5,
            fontSize: 14,
            color: '000000',
            align: 'center',
            valign: 'middle'
        });
    }

    // Calculate the arc dimensions based on the rectangle dimensions
    let arcW = rectOptions.w / 2; // Arc width is half of rectangle width
    let arcH = arcW; // Arc height is same as width
    let arcX = rectOptions.x + (rectOptions.w - arcW) / 2; // Center the arc horizontally over the rectangle
    let arcY = rectOptions.y + rectOptions.h - arcH / 2 - 0.2; // Position the arc so that half of it starts from the bottom of the rectangle
    
    let arcOptionsBase = {
        x: arcX,
        y: arcY,
        w: arcW,
        h: arcH
    };

    let totalAngleRange = 180;

    const totalPercentage = percentages.reduce((acc, val) => acc + val.percentage, 0);
    const normalizedPercentages = percentages.map(percentage => (percentage.percentage / totalPercentage) * 100);

    let angleRanges = normalizedPercentages.map(percentage => (totalAngleRange * percentage) / 100);
    let startAngle = 180;

    for (let i = 0; i < angleRanges.length; i++) {
        let arcOptions = {
            ...arcOptionsBase,
            angleRange: [startAngle, startAngle + angleRanges[i]],
            line: { color: percentages[i].color, width: 30 }
        };
        slide.addShape(pres.ShapeType.arc, arcOptions);
        startAngle += angleRanges[i];
    }

    let centerX = arcOptionsBase.x + (arcOptionsBase.w / 2);
    let centerY = arcOptionsBase.y + (arcOptionsBase.h / 2);

    // Adjust ellipse position to be in the upper part of the arc
    let ellipseWidth = arcOptionsBase.w * 0.1;
    let ellipseHeight = arcOptionsBase.h * 0.1;

    let ellipseOptions = {
        x: centerX - (ellipseWidth / 2),
        y: centerY - (ellipseHeight / 2) - 0.1, // Adjust y position to be above the arc center
        w: ellipseWidth,
        h: ellipseHeight,
        fill: { color: colors.ellipse }
    };

    slide.addShape(pres.ShapeType.ellipse, ellipseOptions);

    // Adjust triangle position to start at the top of the ellipse
    let triangleWidth = arcOptionsBase.w * 0.08;
    let triangleHeight = arcOptionsBase.h * 0.5;

    let triangleOptions = {
        x: centerX - (triangleWidth / 2),
        y: ellipseOptions.y + (ellipseOptions.h / 2) - triangleHeight,
        w: triangleWidth,
        h: triangleHeight,
        fill: { color: colors.triangle },
        rotate: 0
    };
    slide.addShape(pres.ShapeType.triangle, triangleOptions);

    const radius = (arcOptionsBase.w / 2) + 0.4;
    let currentAngle = 180;

    let minAngleRadian = (Math.PI / 180) * 180;
    let minLabelX = centerX + (radius * Math.cos(minAngleRadian)) - 0.25;
    let minLabelY = centerY + (radius * Math.sin(minAngleRadian)) - 0.15;
    slide.addText(`${minValue}`, { x: minLabelX, y: minLabelY, w: 0.5, h: 0.3, fontSize: 9, color: '000000' });

    for (let i = 0; i < normalizedPercentages.length; i++) {
        const angle = currentAngle + (angleRanges[i] / 2);
        const radian = (Math.PI / 180) * angle;
        const labelX = centerX + (radius * Math.cos(radian)) - 0.25;
        const labelY = centerY + (radius * Math.sin(radian)) - 0.15;
        slide.addText(`${percentages[i].percentage}%`, { x: labelX, y: labelY, w: 0.5, h: 0.3, fontSize: 9, color: '000000' });
        currentAngle += angleRanges[i];
    }

    let maxAngleRadian = (Math.PI / 180) * (180 + totalAngleRange);
    let maxLabelX = centerX + (radius * Math.cos(maxAngleRadian)) - 0.25;
    let maxLabelY = centerY + (radius * Math.sin(maxAngleRadian)) - 0.15;
    slide.addText(`${maxValue}`, { x: maxLabelX, y: maxLabelY, w: 0.5, h: 0.3, fontSize: 9, color: '000000' });

    pres.writeFile("Sample_Presentation.pptx").then(() => {
        console.log("Presentation created successfully!");
    });
}

generatePresentation(
    { x: 17.27 / 2.54, y: 11.12 / 2.54, w: 15.16 / 2.54, h: 6.52 / 2.54 },
    200,
    500,
    [
        { percentage: 65, color: 'FF0000' }, 
        { percentage: 10, color: '0000FF' }, 
        { percentage: 10, color: '00FF00' }, 
        { percentage: 15, color: 'FFFF00' }
    ],
    true,
    {
        rectangle: 'FFA500', // Rectangle color
        ellipse: '00FF00', // Ellipse color
        triangle: '00FF00' // Triangle color
    }
);








// const PptxGenJS = require("pptxgenjs");

// function generatePresentation(arcOptionsBaseCm, minValue, maxValue, percentages) {
//     let arcOptionsBase = {
//         x: arcOptionsBaseCm.x,
//         y: arcOptionsBaseCm.y,
//         w: arcOptionsBaseCm.w,
//         h: arcOptionsBaseCm.h
//     };

//     let pres = new PptxGenJS();
//     pres.layout = "LAYOUT_WIDE";

//     let slide = pres.addSlide();

//     let totalAngleRange = 180;

//     const totalPercentage = percentages.reduce((acc, val) => acc + val, 0);
//     const normalizedPercentages = percentages.map(percentage => (percentage / totalPercentage) * 100);

//     let angleRanges = normalizedPercentages.map(percentage => (totalAngleRange * percentage) / 100);
//     console.log(angleRanges, "angleRange");

//     let colors = ['FF0000', '0000FF', '00FF00', 'FFFF00', 'FFA500'];
//     let startAngle = 180;

//     for (let i = 0; i < angleRanges.length; i++) {
//         let arcOptions = {
//             ...arcOptionsBase,
//             startAngle: startAngle,
//             endAngle: startAngle + angleRanges[i],
//             line: { color: colors[i % colors.length], width: 20 },
//             innerRadius: 0.7, // adjust inner radius as needed for blockArc
//         };
//         slide.addShape(pres.ShapeType.blockArc, arcOptions);
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
//     let currentAngle = 180;

//     let minAngleRadian = (Math.PI / 180) * 180;
//     let minLabelX = centerX + (radius * Math.cos(minAngleRadian)) - 0.25;
//     let minLabelY = centerY + (radius * Math.sin(minAngleRadian)) - 0.15;
//     slide.addText(`${minValue}`, { x: minLabelX, y: minLabelY, w: 0.5, h: 0.3, fontSize: 9, color: '000000' });

//     for (let i = 0; i < normalizedPercentages.length; i++) {
//         const angle = currentAngle + (angleRanges[i] / 2);
//         const radian = (Math.PI / 180) * angle;
//         const labelX = centerX + (radius * Math.cos(radian)) - 0.25;
//         const labelY = centerY + (radius * Math.sin(radian)) - 0.15;
//         slide.addText(`${percentages[i]}%`, { x: labelX, y: labelY, w: 0.5, h: 0.3, fontSize: 9, color: '000000' });
//         currentAngle += angleRanges[i];
//     }

//     let maxAngleRadian = (Math.PI / 180) * (180 + totalAngleRange);
//     let maxLabelX = centerX + (radius * Math.cos(maxAngleRadian)) - 0.25;
//     let maxLabelY = centerY + (radius * Math.sin(maxAngleRadian)) - 0.15;
//     slide.addText(`${maxValue}`, { x: maxLabelX, y: maxLabelY, w: 0.5, h: 0.3, fontSize: 9, color: '000000' });

//     pres.writeFile("Sample_Presentation.pptx").then(() => {
//         console.log("Presentation created successfully!");
//     });
// }


// generatePresentation(
//     { x: 1, y: 1, w: 3, h: 3 },
//     200,
//     500,
//     [65, 35]
// );




