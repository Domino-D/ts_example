import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

interface IProps {
  tempData?: any,
  handleChange: () => void,
  handleDelete: () => void,
  reset: () => void,
}

class Temp extends Component<IProps> {
  public render() {
    const { tempData } = this.props
    return (
      <Fragment>
        <div>{tempData.something}</div>
        <Button onClick={() => this.props.handleChange()}>add text</Button>
        <Button onClick={() => this.props.handleDelete()}>add delete</Button>
        <Button type='danger' onClick={() => this.props.reset()}>reset</Button>
      </Fragment>
    )
  }
}

const mapState = (state: any) => ({
  tempData: state.tempData,
})

const mapDispatch = (dispatch: any) => ({
  handleChange() {
    dispatch({type: 'change'})
  },
  handleDelete() {
    dispatch({type: 'delete'})
  },
  reset() {
    dispatch({type: 'reset'})
  }
})

export default connect(mapState, mapDispatch)(Temp)
