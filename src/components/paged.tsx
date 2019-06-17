import React, { Fragment, Component } from 'react'
import { inject, observer } from 'mobx-react'

interface IProps {
  mast: any,
}

@inject('mast')
@observer
export default class PageC extends Component<IProps, {}> {
  public componentDidMount() {
    const list = this.props.mast.getList
    console.log(list)
  }

  public render() {
    const { list, getList} = this.props.mast
    return (
      <Fragment>
        <div>mast</div>
        {list.map((item: any) => (
          <div key={item.id}>{item.name}</div>
        ))}
        <hr />
        {getList.map((item: any) => (
          <div key={item.id}>{item.name}</div>
        ))
        }
      </Fragment>
    )
  }
}