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
    description: 'Pendiente ljghkdfhgdflhgfhjgkmhj,',
    status: 'pending',
    createdAt: Date.now()
  },
  {
    _id: uuidv4(),
    description: 'En-progreso 34876034298765034586',
    status: 'in-progress',
    createdAt: Date.now()
  },
  {
    _id: uuidv4(),
    description: 'Terminadas wiutvgoehdulehf rkegkhdf,',
    status: 'finished',
    createdAt: Date.now()
  },
 ]
}


export const EntriesProvider: FC<EntriesProviderProps> = ({children}) => {
 const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

 const addNewEntry = (description: string) => {
  
  const newEntry: Entry = {
    _id: uuidv4(),
    description,
    createdAt: Date.now(),
    status: 'pending',
  }

  dispatch({ type: '[Entry] - Add-Entry', payload: newEntry })
 }

 const updateEntry = (entry: Entry) => {
  dispatch({type: '[Entry] - Entry-Updated', payload: entry})
 }

 return (
  <EntriesContext.Provider value={{
    ...state,

    // methods
    addNewEntry,
    updateEntry,
  }}>
    { children }
  </EntriesContext.Provider>
 )
}