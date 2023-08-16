export interface Shape {
  draw(context: CanvasRenderingContext2D): void;
}

abstract class ColoredShape implements Shape {
  public constructor(private _color: string) {}

  public abstract draw(context: CanvasRenderingContext2D): void;

  protected get color(): string {
    return this._color;
  }
}

export class Rectangle extends ColoredShape {
  public constructor(
    private x: number,
    private y: number,
    private width: number,
    private height: number,
    color = 'rgba(200, 0, 0, 0.3)'
  ) {
    super(color);
  }

  public draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}

export class Triangle extends ColoredShape {
  public constructor(
    private point1: Point,
    private point2: Point,
    private point3: Point,
    color = 'rgba(0, 200, 0, 0.3)'
  ) {
    super(color);
  }

  public draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.beginPath();
    context.moveTo(this.point1.x, this.point1.y);
    context.lineTo(this.point2.x, this.point2.y);
    context.lineTo(this.point3.x, this.point3.y);
    context.fill();
  }
}

export class Circle extends ColoredShape {
  public constructor(
    private x: number,
    private y: number,
    private radius: number,
    color = 'rgba(0, 0, 200, 0.3)'
  ) {
    super(color);
  }

  public draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();
  }
}

export interface Point {
  x: number;
  y: number;
}
