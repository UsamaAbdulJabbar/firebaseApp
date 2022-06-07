import React from 'react'
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


export default function SmButton(props) {
  const { label, onClick, color, loading, disable } = props
  return (

    <Button disable={disable || loading} onClick={onClick} color={color} variant="contained">
      {loading && <CircularProgress />}
      {label}
    </Button>

  )
}
