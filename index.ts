import './style.css';
import { Circle, Rectangle, Shape, Triangle } from './shape';

const drawShape = function (shape: Shape): void {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  if (!canvas.getContext) {
    throw new Error('The element is not a canvas.');
  }
  const context = canvas.getContext('2d');
  shape.draw(context);
};

document
  .getElementById('draw-rectangle')
  .addEventListener('click', () => drawShape(new Rectangle(50, 140, 150, 80)));

document
  .getElementById('draw-triangle')
  .addEventListener('click', () =>
    drawShape(
      new Triangle({ x: 20, y: 40 }, { x: 180, y: 40 }, { x: 100, y: 80 })
    )
  );

document
  .getElementById('draw-circle')
  .addEventListener('click', () => drawShape(new Circle(150, 100, 50)));
