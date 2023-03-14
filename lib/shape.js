class Shape {
  constructor(shape, shapeColor, textColor, text) {
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;
  }
}

class Circle extends Shape {
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><${this.shape} cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}

class Triangle extends Shape {
  // constructor(shape, shapeColor, textColor, text) {
  //   super(shape, shapeColor, textColor, text); 
  render() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><${this.shape} points="150, 18 244, 182 56, 182"stroke="green" fill="${this.shapeColor}" stroke-width="5"/></<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}


class Square extends Shape {
  // constructor(shape, shapeColor, textColor, text) {
  //   super(shape, shapeColor, textColor, text); 
  render() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <${this.shape} x="90" y="40" width="120" height="120" stroke="transparent" fill="${this.shapeColor}" stroke-width="5"/><rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="${this.shapeColor}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}


module.exports = { Circle, Triangle, Square }

