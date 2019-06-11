import React, { Component } from 'react'
import './App.scss'

interface IState {
  readonly count: number,
  readonly list: object[],
}

export default class App extends Component<{}, IState> {
  constructor(props: object) {
    super(props)
    this.state = {
      count: 0,
      list: [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
      ],
    }
  }
  // public state: IState = {
  //   count: 0,
  //   list: [
  //     { id: 1, name: 'a' },
  //     { id: 2, name: 'b' },
  //   ],
  // }

  public componentDidMount() {
    console.log('did')
  }

  public render() {
    const { list, count } = this.state
    return (
      <div className="App">
        <header className="App-header" onClick={() => this.getText()}>text</header>
        {list.map((item: any) => (
          <div key={item.id}>{item.name}</div>
        ))}
        {count}
      </div>
    )
  }

  private getText(): void {
    const { count } = this.state
    this.setState({
      count: count + 1,
    })
  }
}
