import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from '../store'

import { Provider as MobxProvider } from 'mobx-react'
import stores from '../mobxstore'

import { configure } from 'mobx'
configure({ enforceActions: 'observed' })

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

const PageA = asyncComponent(() => import('../components/pagea'))
const PageB = asyncComponent(() => import('../components/pageb'))
const PageC = asyncComponent(() => import('../components/pagec'))
const PageD = asyncComponent(() => import('../components/paged'))

const routes = (
  <Provider store={store}>
    <MobxProvider {...stores}>
      <AppContainer>
        <HashRouter>
          <Switch>
            <Route path='/' exact={true} component={PageA} />
            <Route path='/b' component={PageB} />
            <Route path='/c' component={PageC} />
            <Route path='/d' component={PageD} />
            <Redirect to='/' />
          </Switch>
        </HashRouter>
      </AppContainer>
    </MobxProvider>
  </Provider>
)

export default routes