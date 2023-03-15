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
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><${this.shape} points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/><text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}


class Square extends Shape {
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><${this.shape} x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/><rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}


module.exports = { Circle, Triangle, Square }

