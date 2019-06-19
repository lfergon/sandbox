import Snap from "snapsvg";

var s = Snap("#app");

var container = s.rect(90, 140, 595, 355);
container.attr({
  fill: "#344351"
});

var p4 = s.line(392, 145, 395, 495);
p4.attr({
  stroke: "rgba(170, 177, 182, 0.5)",
  "stroke-width": 2,
  "stroke-dasharray": [1, 10],
  "stroke-linecap": "round"
});

var p5 = s.line(95, 311, 680, 310);
p5.attr({
  stroke: "rgba(170, 177, 182, 0.5)",
  "stroke-width": 2,
  "stroke-dasharray": [1, 10],
  "stroke-linecap": "round"
});

var sustainableLowInner = s.rect(100, 150, 280, 150);
sustainableLowInner.attr({
  fill: "#344351",
  stroke: "#838d95",
  strokeWidth: 3,
  opacity: 0
});

var back2 = s.rect(403, 150, 280, 150);
back2.attr({
  fill: "#344351"
});

// var front2 = s.rect(503, 70, 280, 150);
var front2 = s.rect(395, 140, 290, 170);
front2.attr({
  fill: "#0e4368",
  stroke: "#1f2c39",
  strokeWidth: 0,
  opacity: 0
});

var emptyRectangle = s.rect(100, 320, 280, 150);
emptyRectangle.attr({
  fill: "#344351"
});

var back4 = s.rect(403, 320, 280, 150);
back4.attr({
  fill: "#344351"
});

var t1 = s.text(141, 225, "SUSTAINABLE LOW PERFORMER");
t1.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Apercu, sans-serif",
  "font-size": 14,
  opacity: 0
});

var t2 = s.text(438, 225, "SUSTAINABLE HIGH PERFORMER");
t2.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Apercu, sans-serif",
  "font-size": 14,
  opacity: 0
});

var t3 = s.text(438, 225, "SUSTAINABLE HIGH IMPACTER");
t3.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Apercu, sans-serif",
  "font-size": 14,
  opacity: 0
}).animate({ opacity: 0 }, 10000);

var t4 = s.text(460, 405, "UNSUSTAINABLE GIVER");
t4.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Apercu, sans-serif",
  "font-size": 14,
  opacity: 0
});

var p1 = s.line(392, 138, 499, 35);
p1.attr({
  stroke: "rgba(170, 177, 182, 0.9)",
  "stroke-width": 2,
  "stroke-dasharray": [1, 10],
  "stroke-linecap": "round",
  //markerEnd: marker,
  opacity: 0
});

var lineTimeWithArrow = s.line(690, 305, 782, 210);

var lineToJoinFirst = s.line(400, 305, 505, 195);
lineToJoinFirst.attr({
  stroke: "rgba(170, 177, 182, 0.4)",
  "stroke-width": 2,
  "stroke-dasharray": [1, 10],
  "stroke-linecap": "round",
  //markerEnd: marker,
  opacity: 0
});

var lineToJoinSecond = s.line(685, 140, 790, 35);
lineToJoinSecond.attr({
  stroke: "rgba(170, 177, 182, 0.4)",
  "stroke-width": 2,
  "stroke-dasharray": [1, 10],
  "stroke-linecap": "round",
  //markerEnd: marker,
  opacity: 0
});

var arrow = s
  .polygon([0, 10, 4, 10, 2, 0, 0, 10])
  .attr({ fill: "rgba(255, 255, 255, 0.8)" })
  .transform("r90");
var marker = arrow.marker(0, 0, 10, 10, 0, 5);

lineTimeWithArrow.attr({
  stroke: "rgba(170, 177, 182, 0.7)",
  "stroke-width": 2,
  "stroke-dasharray": [1, 10],
  "stroke-linecap": "round",
  markerEnd: marker,
  opacity: 0
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

var textYaxis = s.text(0, 140, "IMPACT ON SELF");
textYaxis.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Apercu, sans-serif",
  "font-size": 9,
  opacity: 0
});

var textYaxisSecond = s.text(42, 154, "Energy");
textYaxisSecond.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Apercu, sans-serif",
  "font-size": 8,
  opacity: 0
});

var textYaxisThird = s.text(31, 166, "Resilience");
textYaxisThird.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Apercu, sans-serif",
  "font-size": 8,
  opacity: 0
});

var textYaxisFourth = s.text(38, 179, "Stamina");
textYaxisFourth.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Apercu, sans-serif",
  "font-size": 8,
  opacity: 0
});

var textYaxisFive = s.text(30, 192, "Fulfilment");
textYaxisFive.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Apercu, sans-serif",
  "font-size": 8,
  opacity: 0
});

var textYaxisSix = s.text(40, 204, "Growth");
textYaxisSix.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Apercu, sans-serif",
  "font-size": 8,
  opacity: 0
});

var textYaxisSeven = s.text(52, 216, "Fun");
textYaxisSeven.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Apercu, sans-serif",
  "font-size": 8,
  opacity: 0
});

var textYaxisEight = s.text(19, 228, "Mental Agility");
textYaxisEight.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Apercu, sans-serif",
  "font-size": 8,
  opacity: 0
});

// Horizontal section of text
var textXaxisFirst = s.text(635, 560, "IMPACT ON OTHERS");
textXaxisFirst
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Apercu, sans-serif",
    "font-size": 9,
    opacity: 0
  })
  .transform("r90");

var textXaxisSecond = s.text(638, 541, "Energy giver");
textXaxisSecond
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Apercu, sans-serif",
    "font-size": 8,
    opacity: 0
  })
  .transform("r90");

var textXaxisThree = s.text(625, 542, "Collaborator");
textXaxisThree
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Apercu, sans-serif",
    "font-size": 8,
    opacity: 0
  })
  .transform("r90");

var textXaxisFour = s.text(612, 544, "Inspire others");
textXaxisFour
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Apercu, sans-serif",
    "font-size": 8,
    opacity: 0
  })
  .transform("r90");

var textXaxisFive = s.text(596, 548, "Culture changer");
textXaxisFive
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Apercu, sans-serif",
    "font-size": 8,
    opacity: 0
  })
  .transform("r90");

var textXaxisSix = s.text(592, 540, "Role model");

textXaxisSix
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Apercu, sans-serif",
    "font-size": 8,
    opacity: 0
  })
  .transform("r90");

var textXaxisSeven = s.text(573, 547, "Develop others");

textXaxisSeven
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Apercu, sans-serif",
    "font-size": 8,
    opacity: 0
  })
  .transform("r90");

var textXaxisEight = s.text(573, 534, "Winning");

textXaxisEight
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Apercu, sans-serif",
    "font-size": 8,
    opacity: 0
  })
  .transform("r90");

// TIME text
var textTime = s.text(730, 270, "TIME");

textTime
  .attr({
    fill: "rgba(255, 255, 255, 0.8)",
    "font-family": "Apercu, sans-serif",
    "font-size": 10,
    opacity: 0
  })
  .transform("r-45");

// ANIMATIONS

animateYAxisText();

function animateYAxisText() {
  textYaxis.animate({ opacity: 1 }, 1400, animateSecondY);
}

function animateSecondY() {
  textYaxisSecond.animate({ opacity: 1 }, 800, animateThirdY);
}

function animateThirdY() {
  textYaxisThird.animate({ opacity: 1 }, 800, animateFourthY);
}

function animateFourthY() {
  textYaxisFourth.animate({ opacity: 1 }, 800, animateFifthY);
}

function animateFifthY() {
  textYaxisFive.animate({ opacity: 1 }, 800, animateSixthY);
}

function animateSixthY() {
  textYaxisSix.animate({ opacity: 1 }, 800, animateSeventhY);
}

function animateSeventhY() {
  textYaxisSeven.animate({ opacity: 1 }, 800, animateEighthY);
}

function animateEighthY() {
  textYaxisEight.animate({ opacity: 1 }, 800, animateXAxisText);
}

function animateXAxisText() {
  textXaxisFirst.animate({ opacity: 1 }, 1400, animateSecondX);
}

function animateSecondX() {
  textXaxisSecond.animate({ opacity: 1 }, 800, animateThirdX);
}

function animateThirdX() {
  textXaxisThree.animate({ opacity: 1 }, 800, animateFourthX);
}

function animateFourthX() {
  textXaxisFour.animate({ opacity: 1 }, 800, animateFifthX);
}

function animateFifthX() {
  textXaxisFive.animate({ opacity: 1 }, 800, animateSixthX);
}

function animateSixthX() {
  textXaxisSix.animate({ opacity: 1 }, 800, animateSeventhX);
}

function animateSeventhX() {
  textXaxisSeven.animate({ opacity: 1 }, 800, animateEighthX);
}

function animateEighthX() {
  textXaxisEight.animate({ opacity: 1 }, 800, animateLowPerformer);
}

function animateLowPerformer() {
  t1.animate({ opacity: 1 }, 1500, animateGiver);
}

function animateGiver() {
  t4.animate({ opacity: 1 }, 1500, animateHighPerformer);
}

function animateHighPerformer() {
  t2.animate({ opacity: 1 }, 1500, animateImpacter);
}
function animateImpacter() {
  front2.animate({ opacity: 0.8, x: 503, y: 30 }, 1800);
  t3.animate({ opacity: 1, x: 561, y: 112 }, 1800);
  p1.animate({ opacity: 1 }, 1800);
  lineToJoinFirst.animate({ opacity: 1 }, 1800);
  lineToJoinSecond.animate({ opacity: 0.4 }, 1800);
  lineTimeWithArrow.animate({ opacity: 1 }, 1800);
  textTime.animate({ opacity: 1 }, 1800);
  t2.animate({ opacity: 0.6 }, 1800);
}
