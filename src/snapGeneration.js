export default class SnapGeneration {
  constructor(snapSection) {
    this.snap = snapSection;
  }

  createAreaRectangle(x, y, width, height) {
    return this.snap.rect(x, y, width, height);
  }

  createLine(
    xCoordinateStart,
    yCoordinateStart,
    xCoordinateEnd,
    yCoordinateEnd
  ) {
    return this.snap.line(
      xCoordinateStart,
      yCoordinateStart,
      xCoordinateEnd,
      yCoordinateEnd
    );
  }

  createText(xCoordinatePos, yCoordinatePos, text) {
    return this.snap.text(xCoordinatePos, yCoordinatePos, text);
  }

  animate(elementToAnimate, attributeToModify, timeInMilliseconds) {
    return elementToAnimate.animate(attributeToModify, timeInMilliseconds);
  }
}
