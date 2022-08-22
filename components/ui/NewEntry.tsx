import React, { ChangeEvent, useContext, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { AddCircleOutlineOutlined, SaveOutlined } from '@mui/icons-material'
import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui'

export const NewEntry = () => {
  const { isAdding, onIsAdding } = useContext(UIContext)
  const { addNewEntry } = useContext(EntriesContext)
  const [inputValue, setInputValue] = useState('')
  const [touched, setTouched] = useState(false)

  
  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  
  const onReset = () => {
    setInputValue('')
    setTouched(false)
    onIsAdding(false)
  }

  const onSave = () => {
    if (inputValue.length <= 0) return
    addNewEntry(inputValue)
    onReset()
  }
  
  return (
    <Box sx={{ marginBottom: 2 }}>
      {isAdding
        ?
        <>
          <TextField
            sx={{ marginTop: 2, marginBottom: 1 }}
            fullWidth
            placeholder='Nueva entrada'
            autoFocus
            multiline
            label='Nueva entrada'
            helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onTextFieldChange}
            onBlur={() => setTouched(true)}
          />

          <Box display='flex' justifyContent='space-between'>
            <Button
              variant='text'
              onClick={onReset}
            >
              Cancelar
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              endIcon={<SaveOutlined />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
        :
        <Button
          variant='outlined'
          fullWidth
          startIcon={<AddCircleOutlineOutlined />}
          onClick={() => onIsAdding(true)}
        >
          Agregar tarea
        </Button>
      }



    </Box>
  )
}
