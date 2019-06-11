import React, { Component, Fragment } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import Person from './test'

export default class FirstPage extends Component {
  public componentDidMount() {
    const one = new Person('bob')
    one.say()
  }

  public render() {
    return (
      <Fragment>
        <Link to='/b'>
          <Button type='ghost'>Button</Button>
        </Link>
      </Fragment>
    )
  }
}
