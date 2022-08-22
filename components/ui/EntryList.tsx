import { List, Paper } from "@mui/material"
import { DragEvent, FC, useContext, useMemo } from "react"
import { EntriesContext } from "../../context/entries"
import { UIContext } from "../../context/ui"
import { EntryStatus } from "../../interfaces"
import { EntryCard } from "./"

import styles from './EntryList.module.css'

interface Props {
  status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext)
  const { isDragging, onDragging } = useContext(UIContext)
  
  // implement useMemo
  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

  // Habilitar el drop del drag
  const allowDrop = (event: DragEvent) => {
    event.preventDefault() // prevenir el default -_- .....
  }

  // Donde va caer la entry q estamos haciendo drag
  const onDropEntry = (event: DragEvent) => {
    const id = event.dataTransfer.getData('text')
    const entry = entries.find(entry => entry._id === id)!
    entry.status = status
    updateEntry(entry)
    onDragging(false)
  }

  return (
    <div 
      onDrop={onDropEntry} 
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
      >
      <Paper sx={{ height: 'calc(100vh - 190px)', overflow: 'auto', backgroundColor: 'transparent', padding: '0 5px'}}>
        <List sx={{ opacity: isDragging ? 0.3 : 1, transition: 'all .3s' }}>
          {
            entriesByStatus.map(entry => (
              <EntryCard key={entry._id} entry={entry} />
            ))
          }
        </List>
      </Paper>
    </div>
  )
}
