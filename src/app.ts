import P5 from "p5";
import "p5/lib/addons/p5.dom";

var sketch = (p: P5) => {

  const colorBob = "white"
  const bobRadius = 30
  const magnetRadius = 50

  const magnets: Record<string, Magnet> = {
    a: { color: "red", radius: magnetRadius, x: 0, y: -100 },
    b: { color: "blue", radius: magnetRadius, x: 100, y: 100 },
    c: { color: "yellow", radius: magnetRadius, x: -100, y: 100 }
  }

  p.setup = () => {
    console.log("🚀 - Setup initialized - P5 is running");

    p.createCanvas(p.windowWidth, p.windowHeight);

  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(20);

    // Center the sim
    p.translate(p.width / 2, 0)
    p.translate(0, p.height / 2)

    // Draw bob
    p.fill(colorBob)
    p.circle(0, 0, bobRadius)

    // Draw magnets
    Object.values(magnets).forEach(m => drawMagnet(p, m))

    // TODO: Draw starting points

  };
};

new P5(sketch);

// ---

interface Magnet {
  x: number,
  y: number,
  color: string,
  radius: number,
}

const drawMagnet = (p: P5, m: Magnet) => {
  p.fill(m.color)
  p.circle(m.x, m.y, m.radius)
}