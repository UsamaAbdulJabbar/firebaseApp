
import React from 'react'
import { useState } from 'react';
import { Typography, Box } from '@mui/material'
import SmButton from '../config/components/button'
import SmInput from '../config/components/smInput';
import { logInUser } from '../config/firebase/firebaseMethod';
import { useNavigate } from 'react-router-dom';
import '../signup.css';

export default function Login() {
    const [userObj, setUserObj] = useState({});
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();


    let LoginUpuser = ()=>{

        if (!userObj.email) {
            alert("Email is required.");
            return
        }
        if (!userObj.password || userObj.password.length < 6) {
            alert("password is required and Password must be greater then 6 character");
            return
        }
        setLoader(true);
        console.log(userObj);
        logInUser(userObj).then((res)=>{
            setLoader(false);
            console.log("Login Successfully")
            navigate(`/home${res.user.id}`)
        }).catch((err)=>{
            setLoader(false);
            console.log(err)
        });
    };   

    return (
        <>
        <Typography variant='h3'>Login</Typography>
        <div style={{width:"100vw", display:'flex', backgroundColor:"white",justifyContent:"center",height:"100vh", marginTop:"50px"}}>
        <div className='div2Singup'  style={{width:"50vw",padding:"20px",backgroundColor:"#039ed1", height:"50%"}}>
        </div>  
        <div style={{width:"50vw",padding:"20px",backgroundColor:"#039ed1", height:"50%"}}>
         <Box  sx={{ backgroundColor:"white", width:"100%", height:"100%" , borderRadius:"10px", alignItems:"center",  }}>
         <Typography variant='h4' sx={{textAlign:"left"}}>Login your account</Typography>

                <Box sx={{ padding: "10px" }}>
                    <SmInput onChange={(e) =>
                        setUserObj({ ...userObj, email: e.target.value })} label="Email" type="email" required={true} />

                </Box>
                <Box sx={{ padding: "10px" }}>
                    <SmInput onChange={(e) =>
                        setUserObj({ ...userObj, password: e.target.value })} label="Password" type="password" required={true} />

                </Box>

                <Box sx={{ padding: "10px" }}>

                    <SmButton loading={loader} onClick={LoginUpuser} color="warning" label="Login" />

                </Box>


            </Box>
            </div>
            </div>
        
        </>


    )
}
