class Shape {
  protected diameter?: number;
  protected width?: number;
  protected height?: number;

  constructor(diameter?: number, width?: number, height?: number) {
    this.diameter = diameter;
    this.width = width;
    this.height = height;
  }

  protected computeArea(): number {
    const WIDTH = this.width || 0;
    const HEIGHT = this.height || 0;
    return WIDTH * HEIGHT;
  }
}

class Rectangle extends Shape {
  constructor(width: number, height: number) {
    super(undefined, width, height);
  }
}

class Square extends Shape {
  constructor(side: number) {
    super(undefined, side, side);
  }
}

class Circle extends Shape {
  private PI: number = 3.1416;
  protected diameter: number;

  constructor(diameter: number) {
    super(diameter, undefined, undefined);
  }

  // @override
  public computeArea(): number {
    const RADIUS = (this.diameter / 2) ** 2;
    return RADIUS * this.PI;
  }
}
