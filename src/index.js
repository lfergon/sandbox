import Snap from "snapsvg";

var s = Snap("#app");

var container = s.rect(90, 140, 595, 355);

var sustainableLowInner = s.rect(100, 150, 280, 150);
var back2 = s.rect(403, 150, 280, 150);

var emptyRectangle = s.rect(100, 320, 280, 150);
var back4 = s.rect(403, 320, 280, 150);
// var front2 = s.rect(503, 70, 280, 150);
var front2 = s.rect(395, 140, 290, 170);

container.attr({
  fill: "#344351"
});

sustainableLowInner.attr({
  fill: "#344351",
  stroke: "#838d95",
  strokeWidth: 5
});

back2.attr({
  fill: "#344351"
});

emptyRectangle.attr({
  fill: "#344351"
});

back4.attr({
  fill: "#344351"
});

var t1 = s.text(125, 225, "SUSTAINABLE LOW PERFORMER");

t1.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 14
});

var textHighPerformer = s.text(425, 225, "SUSTAINABLE HIGH PERFORMER");

textHighPerformer.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 14
});

var t3 = s.text(425, 225, "SUSTAINABLE HIGH IMPACTER");

t3.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 14,
  opacity: 0
});

var t4 = s.text(460, 405, "UNSUSTAINABLE GIVER");

t4.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 14
});

front2.attr({
  fill: "#0e4368",
  stroke: "#1f2c39",
  strokeWidth: 0
});

s.g(textHighPerformer, front2);

s.g(front2, t3);

var arrow = s
  .polygon([0, 10, 4, 10, 2, 0, 0, 10])
  .attr({ fill: "rgba(255, 255, 255, 0.8)" })
  .transform("r90");
var marker = arrow.marker(0, 0, 10, 10, 0, 5);

var p1 = s.line(392, 135, 500, 40);
var lineTimeWithArrow = s.line(690, 300, 790, 205);
var p4 = s.line(392, 145, 395, 495);
var p5 = s.line(95, 311, 680, 310);

p1.attr({
  stroke: "rgba(170, 177, 182, 0.9)",
  "stroke-width": 2,
  "stroke-dasharray": [1, 10],
  "stroke-linecap": "round",
  //markerEnd: marker,
  opacity: 0
});

var lineToJoinFirst = s.line(400, 305, 505, 195);

lineToJoinFirst.attr({
  stroke: "rgba(170, 177, 182, 0.4)",
  "stroke-width": 2,
  "stroke-dasharray": [1, 10],
  "stroke-linecap": "round",
  //markerEnd: marker,
  opacity: 0.4
});

var lineToJoinSecond = s.line(685, 140, 790, 35);

lineToJoinSecond.attr({
  stroke: "rgba(170, 177, 182, 0.4)",
  "stroke-width": 2,
  "stroke-dasharray": [1, 10],
  "stroke-linecap": "round",
  //markerEnd: marker,
  opacity: 0.4
});

lineTimeWithArrow.attr({
  stroke: "rgba(170, 177, 182, 0.7)",
  "stroke-width": 2,
  "stroke-dasharray": [1, 10],
  "stroke-linecap": "round",
  markerEnd: marker,
  opacity: 0
});

p4.attr({
  stroke: "rgba(170, 177, 182, 0.5)",
  "stroke-width": 2,
  "stroke-dasharray": [1, 10],
  "stroke-linecap": "round"
});

p5.attr({
  stroke: "rgba(170, 177, 182, 0.5)",
  "stroke-width": 2,
  "stroke-dasharray": [1, 10],
  "stroke-linecap": "round"
});

var yAxis = s.line(85, 500, 85, 140);

yAxis.attr({
  stroke: "rgba(170, 177, 182, 0.5)",
  "stroke-width": 2,
  "stroke-dasharray": [1, 10],
  "stroke-linecap": "round",
  markerEnd: marker
});

var xAxis = s.line(85, 500, 680, 500);

xAxis.attr({
  stroke: "rgba(170, 177, 182, 0.5)",
  "stroke-width": 2,
  "stroke-dasharray": [1, 10],
  "stroke-linecap": "round",
  markerEnd: marker
});

var textYaxis = s.text(0, 140, "IMPACT ON SHELF");

textYaxis.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 9,
  opacity: 0
});

var textYaxisSecond = s.text(0, 154, "Energy");

textYaxisSecond.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 8,
  opacity: 0
});

var textYaxisThird = s.text(0, 166, "Resilience");

textYaxisThird.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 8,
  opacity: 1
});

var textYaxisFourth = s.text(0, 176, "Stamina");

textYaxisFourth.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 8,
  opacity: 1
});

var textYaxisFive = s.text(0, 186, "Fulfillment");

textYaxisFive.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 8,
  opacity: 1
});

var textYaxisSix = s.text(0, 196, "Growth");

textYaxisSix.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 8,
  opacity: 1
});

var textYaxisSeven = s.text(0, 206, "Fun");

textYaxisSeven.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 8,
  opacity: 1
});

var textYaxisEight = s.text(0, 216, "Mental Agility");

textYaxisEight.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 8,
  opacity: 1
});

// Horizontal section of text
var textXaxisFirst = s.text(625, 570, "IMPACT ON OTHERS");

textXaxisFirst
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 12,
    opacity: 0
  })
  .transform("r90")
  .animate({ opacity: 1 }, 1000);

var textXaxisSecond = s.text(640, 540, "Energy giver");

textXaxisSecond
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 10,
    opacity: 0
  })
  .transform("r90")
  .animate({ opacity: 1 }, 1050);

var textXaxisThree = s.text(630, 540, "Collaborator");

textXaxisThree
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 10,
    opacity: 0
  })
  .transform("r90")
  .animate({ opacity: 1 }, 1100);

var textXaxisFour = s.text(618, 542, "Inspire others");

textXaxisFour
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 10,
    opacity: 0
  })
  .transform("r90")
  .animate({ opacity: 1 }, 1125);

var textXaxisFive = s.text(602, 548, "Culture changer");

textXaxisFive
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 10,
    opacity: 0
  })
  .transform("r90")
  .animate({ opacity: 1 }, 1125);

var textXaxisSix = s.text(602, 538, "Role model");

textXaxisSix
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 10,
    opacity: 0
  })
  .transform("r90")
  .animate({ opacity: 1 }, 1125);

var textXaxisSeven = s.text(585, 546, "Develop others");

textXaxisSeven
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 10,
    opacity: 0
  })
  .transform("r90")
  .animate({ opacity: 1 }, 1125);

var textXaxisEight = s.text(590, 530, "Winning");

textXaxisEight
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 10,
    opacity: 0
  })
  .transform("r90")
  .animate({ opacity: 1 }, 1125);

// TIME text
var textTime = s.text(730, 270, "TIME");

textTime
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 18,
    opacity: 0
  })
  .transform("r-45");

// ANIMATIONS

animateYAxisText();
front2.animate({ opacity: 0.8, x: 503, y: 30 }, 2000, animateTextImpacter);
p1.animate({ opacity: 1 }, 2000);
lineTimeWithArrow.animate({ opacity: 1 }, 2000);

function animateYAxisText() {
  textYaxis.animate({ opacity: 1 }, 1000, animateSecondY);
}

function animateSecondY() {
  textYaxisSecond.animate({ opacity: 1 }, 1000);
}

function animateTextImpacter() {
  t3.animate({ x: 540, y: 115, opacity: 1 }, 3000, animateTextTime);
}

function animateTextTime() {
  textTime.animate({ opacity: 1 }, 1000);
}

// var vBW = 1200; // viewBoxWidth
// var vBH = 1500; // viewBoxHeight

// // Draw a rounded square.
// // Paper.rect(x, y, width, height, [rx], [ry])
// var rect1 = s.rect(10, vBH / 2 - 50, 100, 100);

// rect1.attr({
//   fill: "#162838",
//   stroke: "white",
//   strokeWidth: 2
// });

// // Element.animate(attrs, duration, [easing], [callback])
// //  We are skipping easing for now and just using a simple attribute
// // and a callback.

// function animate1() {
//   rect1.animate({ x: vBW - 110 }, 4000, animate2);
// }

// // Notice the return animation is faster.

// function animate2() {
//   rect1.animate({ x: 10 }, 2000, animate1);
// }

// // Kick things off
// animate1();
