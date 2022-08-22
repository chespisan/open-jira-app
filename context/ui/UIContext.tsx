import { createContext } from 'react'


export interface ContextProps {
  sidemenuOpen: boolean
  isAdding: boolean
  isDragging: boolean

  // Methods
  openSideMenu: () => void
  closeSideMenu: () => void
  onIsAdding: (isAdding: boolean) => void
  onDragging: (isAdding: boolean) => void
}

export const UIContext = createContext({} as ContextProps)