import { Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../config/firebase/firebaseMethod';

export default function Home() {
  const params = useParams();
  
  useEffect(()=>{
    if(params.id){
      getData("user")
     
    }
  },[])

  return (
    <>
    <Typography variant="h1">Home</Typography>
    
   
    
    </>



    
    
  )
}
