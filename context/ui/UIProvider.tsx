import { FC, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
 sidemenuOpen: boolean
 isAdding: boolean
 isDragging: boolean
}

export interface UIProviderProps {
 children: JSX.Element
}

const UI_INITIAL_STATE: UIState = {
 sidemenuOpen: false,
 isAdding: false,
 isDragging: false
}


export const UIProvider: FC<UIProviderProps> = ({children}) => {
 const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSideMenu = () => {
    dispatch({type: '[UI] - Open Sidebar'})
  }

  const closeSideMenu = () => {
    dispatch({type: '[UI] - Close Sidebar'})
  }

  const onIsAdding = (isAdding: boolean) => {
    dispatch({type: '[UI] - Is Adding Entry', payload: isAdding})
  }

  const onDragging = (isDraggin: boolean) => {
    dispatch({type: '[UI] - Is Dragging Entry', payload: isDraggin})
  }

 return (
  <UIContext.Provider value={{
    ...state,

    openSideMenu,
    closeSideMenu,
    onIsAdding,
    onDragging,
  }}>
    { children }
  </UIContext.Provider>
 )
}