class Human {
  // parts ("part-of" relationship)
  private heart = new Heart();
  private hand = new Hands();
  private feet = new Feet();

  constructor() {
    this.heart.pumpBlood();
  }

  public raiseHands() {
    this.hand.raiseRightHand();
    this.hand.raiseLeftHand();
  }

  public walk() {
    this.feet.walk();
  }
}

class Heart {
  pumpBlood() {}
}

class Hands {
  rightHand: object;
  leftHand: object;

  raiseRightHand() {}
  raiseLeftHand() {}
}

class Feet {
  walk() {}
}
