
interface ITempState {
  something: string,
}

export function tempData(state: ITempState, action: any): ITempState {
  const newSate: any = {
    something: 'abc'
  }

  switch (action.type) {
    case 'change':
      newSate.something = state.something + 'text'
      break

    case 'delete':
      newSate.something = state.something + 'delete'
      break

    case 'reset':
      newSate.something = ''
      break

    default:
      break
  }
  return newSate
}