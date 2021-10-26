// var currentDirectionUnit = 0;
var userDirectedDistance = 0.0;
var actualDistance = 0.0;
var graphicalDistance = 0.0;
var currentDirectionUnit = 0;
var previousCanvasEndPoint = { X: 300, Y: 300 };
var currentCanvasEndPoint = { X: 300, Y: 300 };
var isInit = true;

// directionsUnits = {
//     oneMeter = 1,
//     twoMeters = 2,
//     threeMeters = 3,
//     fiveMeters = 5
// }

function init() {
  var canvasElement = document.getElementById("canvasSection");
  var context = canvasElement.getContext("2d");
  context.moveTo(300, 300);
}

const startingPoint = { X: 0, Y: 0 };

var endingPoint = { X: 0, Y: 0 };

function setUnitInMeters(unit, element) {
  currentDirectionUnit = parseInt(unit);
  document.getElementById("metersLabel").innerText =
    unit.toString() + "meter(s)";

}

function addPath(direction) {
  //step 1 : add current path in total distance coverd
  userDirectedDistance += currentDirectionUnit * 10;

  //step 2 : set end point according to direction choosed when adding this path
  if (direction == "left") {
    currentCanvasEndPoint.X -= currentDirectionUnit * 10;
  } else if (direction == "right") {
    currentCanvasEndPoint.X += currentDirectionUnit * 10;
  } else if (direction == "up") {
    currentCanvasEndPoint.Y -= currentDirectionUnit * 10;
  } else if (direction == "down") {
    currentCanvasEndPoint.Y += currentDirectionUnit * 10;
  }
  addPathGraphically(direction);
}

function addPathGraphically(direction) {
  var canvasElement = document.getElementById("canvasSection");
  var context = canvasElement.getContext("2d");
  context.moveTo(previousCanvasEndPoint.X, previousCanvasEndPoint.Y);
  updatedEndPoint = { X: currentCanvasEndPoint.X, Y: currentCanvasEndPoint.Y };

  context.lineTo(currentCanvasEndPoint.X, currentCanvasEndPoint.Y);
  context.stroke();
  context.lineWidth = 4;
  previousCanvasEndPoint.X = currentCanvasEndPoint.X;
  previousCanvasEndPoint.Y = currentCanvasEndPoint.Y;
  setPointerInCanvas(currentCanvasEndPoint);
  isInit = false;
}

function distanceBetweenStartAndEnd() {
  var D = 0.0;
  //distance betweet 2 coordinates
  // squre Root of (x2 - x1)^2 + (y2 - y1)^2    ==> mathematically
}

function highlightShortestPath() {
  debugger;
  //highlughted line from start and current canvas end point
  var canvasElement = document.getElementById("canvasSection");
  context = canvasElement.getContext("2d");

  //set a line vertically
  context.moveTo(300, 300);

  //TO set horizontally set currentCanvasEndPt.Y as Limit
  context.lineTo(300, currentCanvasEndPoint.Y);
  context.stroke();
  context.strokeStyle = "#E7530F";
  //set a line horizontally

  //TO set horizontally set currentCanvasEndPt.X as Limit
  context.moveTo(300, currentCanvasEndPoint.Y);
  context.lineTo(currentCanvasEndPoint.X, currentCanvasEndPoint.Y);
  context.stroke();
  context.strokeStyle = "#E7530F";

  document.getElementById("findOutBtn").disabled = true;
}

function setPointerInCanvas(currentCanvasEndPoint) {
  debugger;
  var canvasElement = document.getElementById("canvasSection");
  var context = canvasElement.getContext("2d");
  context.beginPath();
  context.arc(
    currentCanvasEndPoint.X,
    currentCanvasEndPoint.Y,
    5,
    0,
    2 * Math.PI
  );
  //context.arc(currentCanvasEndPoint.X, currentCanvasEndPoint.y, 5, 0, 2 * Math.PI);
  context.fill();
  context.fillStyle = "#B3DD68";
}

function clearAllPaths() {
  var canvasElement = document.getElementById("canvasSection");
  var context = canvasElement.getContext("2d");
  context.clearRect(0, 0, 600, 600);

  document.getElementById("findOutBtn").disabled = false;

  //set defaults 
  var userDirectedDistance = 0.0;
  var actualDistance = 0.0;
  var graphicalDistance = 0.0;
  var currentDirectionUnit = 0;
  var previousCanvasEndPoint = { X: 300, Y: 300 };
  var currentCanvasEndPoint = { X: 300, Y: 300 };
}


