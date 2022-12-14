import { UIState } from "./"

type UIActionType = 
| { type: '[UI] - Open Sidebar' }
| { type: '[UI] - Close Sidebar' }
| { type: '[UI] - Is Adding Entry', payload: boolean }
| { type: '[UI] - Is Dragging Entry', payload: boolean }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case '[UI] - Close Sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      }
    case '[UI] - Open Sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      }
    case '[UI] - Is Adding Entry': 
      return {
        ...state,
        isAdding: action.payload
      }
    case '[UI] - Is Dragging Entry': 
      return {
        ...state,
        isDragging: action.payload
      }    
    default:
      return state
  }
}