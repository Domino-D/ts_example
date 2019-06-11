import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

const asyncComponent = (importComponent: any) => {
  interface IState {
    Component: any,
  }

  class AsyncComponent extends React.Component<{}, IState> {
    public state: IState = {
      Component: null,
    }

    public async componentDidMount() {
      const { default: Component } = await importComponent()
      this.setState({ Component })
    }

    public render() {
      const { Component } = this.state
      return Component ? <Component {...this.props} /> : null
    }
  }
  return AsyncComponent
}

const PageA = asyncComponent(() => import('./components/pagea'))
const PageB = asyncComponent(() => import('./components/pageb'))

const routes = (
  <AppContainer>
    <HashRouter>
      <Switch>
        <Route path='/' exact={true} component={PageA} />
        <Route path='/b' component={PageB} />
      </Switch>
    </HashRouter>
  </AppContainer>
)

export default routes