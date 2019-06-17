import React, { Component, Fragment } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export default class FirstPage extends Component {

  public render() {
    return (
      <Fragment>
        <Link to='/c'>
          <Button type='ghost'>Button</Button>
        </Link>
      </Fragment>
    )
  }
}
