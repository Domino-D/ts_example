import TestStore from './test'
import MastStore from './mast'

const stores = {
  mast: new MastStore(),
  test: new TestStore()
}

export default stores