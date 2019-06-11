import ReactDOM from 'react-dom'

import './index.scss'
import 'antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker'

import routes from './router'

const render = (component: any) => {
  ReactDOM.render(
    component,
    document.getElementById('root') as HTMLElement
  )
}

render(routes)

if ((module as any).hot) {
  (module as any).hot.accept('./router', () => {
    render(routes)
  })
}

registerServiceWorker()
