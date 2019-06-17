import { observable, computed, action } from 'mobx'

interface IObj {
  id: number,
  name: string,
}

export default class MastSotre {
  @observable public list: IObj[]
  
  @computed
  get getList() {
    return this.list.filter((v: any) => v.id !== 1)
  }
  
  @action
  public addList = (obj: IObj) => this.list.push(obj)
  
  constructor() {
    this.list = [
      {id: 1, name: 'abc'},
      {id: 2, name: '123'},
      {id: 3, name: '456'},
    ]
  }
}
