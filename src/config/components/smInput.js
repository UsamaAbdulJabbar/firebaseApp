import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SmInput(props) {
    const {label,type,required,onChange,value} = props;
  return (
    
      <TextField value={value} onChange={onChange} autoComplete='off' required={required} id="outlined-basic" label={label} variant="outlined"type={type} />
      
    
  );
}