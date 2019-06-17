import { observable, action } from 'mobx'

export default class TestStore {
  @observable public name: string

  @action
  public changeNameText = () => {
    this.name = this.name + 'add'
  }

  @action
  public resetName = () => {
    this.name = 'reset_enchor'
  }
  
  constructor() {
    this.name = 'enchor'
  }
}
