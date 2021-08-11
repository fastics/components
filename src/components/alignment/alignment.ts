abstract class AlignmentGeometry {
  /// The distance fraction in the horizontal direction.
  ///
  /// A value of -1 corresponds to the leftmost edge. A value of 1
  /// corresponds to the rightmost edge. Values are not limited to that range;
  /// values less than -1 represent positions to the left of the left edge,
  /// and values greater than 1 represent positions to the right of the right
  /// edge.
  public x: number = 0;

  /// The distance fraction in the vertical direction.
  ///
  /// A value of -1 corresponds to the topmost edge. A value of 1
  /// corresponds to the bottommost edge. Values are not limited to that range;
  /// values less than -1 represent positions above the top, and values
  /// greater than 1 represent positions below the bottom.
  public y: number = 0;

  protected constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Alignment extends AlignmentGeometry {
  /// The top left corner.
  static topLeft = new Alignment(-1.0, -1.0);

  /// The center point along the top edge.
  static topCenter = new Alignment(0.0, -1.0);

  /// The top right corner.
  static topRight = new Alignment(1.0, -1.0);

  /// The center point along the left edge.
  static centerLeft = new Alignment(-1.0, 0.0);

  /// The center point, both horizontally and vertically.
  static center = new Alignment(0.0, 0.0);

  /// The center point along the right edge.
  static centerRight = new Alignment(1.0, 0.0);

  /// The bottom left corner.
  static bottomLeft = new Alignment(-1.0, 1.0);

  /// The center point along the bottom edge.
  static bottomCenter = new Alignment(0.0, 1.0);

  /// The bottom right corner.
  static bottomRight = new Alignment(1.0, 1.0);

  public toString() {
    return `Alignment(x: ${this.x}, y: ${this.y})`;
  }
}

export default Alignment;
