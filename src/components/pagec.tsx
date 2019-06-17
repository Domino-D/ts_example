import React, { Fragment, Component } from 'react'
import { inject, observer } from 'mobx-react'

interface IProps {
  test: any,
}

@inject("test")
@observer
class PageC extends Component<IProps, {}> {
  public componentDidMount() {
    // console.log(this.props.test)
  }

  private changeSomeThing () {
    this.props.test.changeNameText()
  }

  private resetText() {
    this.props.test.resetName()
  }

  public render() {
    const { name } = this.props.test
    return (
      <Fragment>
        <div>test</div>
        <div onDoubleClick={() => this.resetText()} onClick={() => this.changeSomeThing()} style={{backgroundColor: '#f5f5f5'}}>{name}</div>
      </Fragment>
    )
  }
}

export default PageC