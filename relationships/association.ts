class Employee {
  private name: string;
  private bank?: Bank;

  public setBank(bank: Bank) {
    this.bank = bank;
  }
}

class Bank {
  name: string;
}
