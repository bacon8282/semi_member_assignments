class Ellipse {
  /**
   *
   * @param {number} width
   * @param {number} height
   */
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return Math.PI * this.width * this.height;
  }

  getPerimeter() {
    const inRoot = (Math.pow(this.width, 2) + Math.pow(this.height, 2)) / 2;
    return 2 * Math.PI * Math.sqrt(inRoot);
  }

  getEccentricity() {
    return Math.sqrt(1 - Math.pow(this.height / this.width, 2));
  }
}

const ellipse = new Ellipse(10, 5);
console.log(ellipse.getArea());
console.log(ellipse.getPerimeter());
console.log(ellipse.getEccentricity());
