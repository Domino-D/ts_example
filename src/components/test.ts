export default class Person {
  private fullname: string
  constructor(name: string) {
    this.fullname = name
  }
  public say() {
    console.log(`${this.fullname}`)
  }
}