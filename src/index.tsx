import ReactDOM from 'react-dom'

import './index.scss'
import 'antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker'

import routes from './routes'

const render = (component: any) => {
  ReactDOM.render(
    component,
    document.getElementById('root') as HTMLElement
  )
}

render(routes)

if ((module as any).hot) {
  (module as any).hot.accept('./routes', () => {
    render(routes)
  })
}

registerServiceWorker()
