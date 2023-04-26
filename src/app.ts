import P5 from "p5";
import "p5/lib/addons/p5.dom";

var sketch = (p: P5) => {

  p.setup = () => {
    console.log("🚀 - Setup initialized - P5 is running");

    p.createCanvas(p.windowWidth, p.windowHeight);

  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(0);

  };
};

new P5(sketch);
