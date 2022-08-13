import { FC, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Entry } from '../../interfaces'
import { EntriesContext, entriesReducer } from './'

export interface EntriesState {
 entries: Entry[]
}

export interface EntriesProviderProps {
 children: JSX.Element
}

const ENTRIES_INITIAL_STATE: EntriesState = {
 entries: [
  {
    _id: uuidv4(),
    description: 'lorem ljghkdfhgdflhgfhjgkmhj,',
    status: 'pending',
    createdAt: Date.now()
  },
  {
    _id: uuidv4(),
    description: '34876034298765034586',
    status: 'in-progress',
    createdAt: Date.now()
  },
  {
    _id: uuidv4(),
    description: ';wiutvgoehdulehf rkegkhdf,',
    status: 'finished',
    createdAt: Date.now()
  },
 ]
}


export const EntriesProvider: FC<EntriesProviderProps> = ({children}) => {
 const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

 return (
  <EntriesContext.Provider value={{...state}}>
    { children }
  </EntriesContext.Provider>
 )
}