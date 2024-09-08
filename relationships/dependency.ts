class Computer {
  protected add(a: number, b: number) {
    return a + b;
  }
  protected minus(a: number, b: number) {
    return a - b;
  }
  protected multiply(a: number, b: number) {
    return a * b;
  }
  protected divide(a: number, b: number) {
    return a / b;
  }
}

class ComputerA extends Computer {
  extremeComputation(a: number, b: number) {
    const added = this.add(a, b);
    const minus = this.minus(a, b);
    const multi = this.multiply(a, b);
    const divide = this.divide(a, b);

    return added + minus + multi + divide;
  }
}
