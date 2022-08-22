import { FC, DragEvent, useContext } from 'react'

import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'

import { Entry } from '../../interfaces'
import { UIContext } from '../../context/ui'

export interface Props {
  entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { onDragging } = useContext(UIContext)

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer?.setData('text', entry._id)

    // Todo: Modificar el estado, para indicar que estoy haciendo drag
    onDragging(true)
  }

  const onDragEnd = () => {
    // Todo: Cancelar on drag
    onDragging(false)

  }

  return (
    <Card sx={{ marginBottom: 1}} draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line'}}>{ entry.description }</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', padding: 1 }}>
          <Typography variant='body2'>Hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
