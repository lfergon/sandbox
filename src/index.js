import Snap from "snapsvg";

var s = Snap("#app");

var container = s.rect(90, 140, 595, 355);
var back1 = s.rect(100, 150, 280, 150);
var back2 = s.rect(403, 150, 280, 150);
var back3 = s.rect(100, 320, 280, 150);
var back4 = s.rect(403, 320, 280, 150);
// var front2 = s.rect(503, 70, 280, 150);
var front2 = s.rect(395, 140, 290, 170);

container.attr({
  fill: "#344351"
});

back1.attr({
  fill: "#344351",
  stroke: "#838d95",
  strokeWidth: 5
});

back2.attr({
  fill: "#344351"
});

back3.attr({
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

var t2 = s.text(425, 225, "SUSTAINABLE HIGH PERFORMER");

t2.attr({
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

s.g(t2, front2);

s.g(front2, t3);

var arrow = s
  .polygon([0, 10, 4, 10, 2, 0, 0, 10])
  .attr({ fill: "rgba(255, 255, 255, 0.8)" })
  .transform("r90");
var marker = arrow.marker(0, 0, 10, 10, 0, 5);

var p1 = s.line(392, 135, 490, 40);
var p2 = s.line(690, 308, 790, 205);
var p4 = s.line(392, 145, 395, 495);
var p5 = s.line(95, 311, 680, 310);

p1.attr({
  stroke: "rgba(170, 177, 182, 0.9)",
  "stroke-width": 2,
  "stroke-dasharray": [1, 10],
  "stroke-linecap": "round",
  markerEnd: marker,
  opacity: 0
});

p2.attr({
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
  "font-size": 10,
  opacity: 1
});

var textYaxisSecond = s.text(0, 154, "Energy");

textYaxisSecond.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 10,
  opacity: 1
});

var textYaxisThird = s.text(0, 166, "Resilience");

textYaxisThird.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 10,
  opacity: 1
});

var textYaxisFourth = s.text(0, 176, "Stamina");

textYaxisFourth.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 10,
  opacity: 1
});

var textXaxisFirst = s.text(625, 570, "IMPACT ON OTHERS");

textXaxisFirst.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 12,
  opacity: 1
});

textXaxisFirst.transform("r90");

var textXaxisSecond = s.text(640, 540, "Energy giver");

textXaxisSecond.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 10,
  opacity: 1
});

textXaxisSecond.transform("r90");

var textTime = s.text(730, 270, "TIME");

textTime.attr({
  fill: "rgba(255, 255, 255, 0.8)",
  "font-family": "Arial, Helvetica, sans-serif",
  "font-size": 18,
  opacity: 1
});

textTime.transform("r-45");

front2.animate({ opacity: 0.8, x: 503, y: 30 }, 1000);
p1.animate({ opacity: 1 }, 1000);
p2.animate({ opacity: 1 }, 1000);
t3.animate({ x: 540, y: 115, opacity: 1 }, 1000);
