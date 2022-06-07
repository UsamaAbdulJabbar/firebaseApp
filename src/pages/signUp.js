
import React from 'react'
import { useState, useNavigate } from 'react';
import { Typography, Box } from '@mui/material'
import SmButton from '../config/components/button'
import SmInput from '../config/components/smInput';
import { sendData, signUpUser } from '../config/firebase/firebaseMethod';
import '../signup.css';
import { NavLink } from 'react-router-dom';



export default function SignUp() {
    const [userObj, setUserObj] = useState({});
    const [loader, setLoader] = useState(false);

   
  
    let signUpuser = () => {

        if (!userObj.email) {
            alert("Email is required.");
            return
        };
        if (!userObj.password || userObj.password.length < 6) {
            alert("password is required and Password must be greater then 6 character");
            return
        };
        setLoader(true);
        console.log(userObj);

        signUpUser(userObj).then((res)=>{
            console.log(res)
            setLoader(false);
            sendData(userObj,"user",res.user.uid).then(()=>{
                console.log("Data Saved Succcessfully")
            });
        }).catch((err)=>{
            setLoader(false);
            console.log(err)
        });

    
        
        
        


    };

    return (
        <>
            <Typography variant='h2'>
                SignUp
            </Typography>

           <div style={{width:"100vw", display:'flex', backgroundColor:"white",justifyContent:"center",height:"100vh", marginTop:"50px"}}>

           <div className='div2Singup'  style={{width:"50vw",padding:"20px",backgroundColor:"#039ed1", height:"50%"}}>

            
           </div>       
           <div style={{width:"50vw",padding:"20px",backgroundColor:"#039ed1", height:"50%"}}>

           <Box sx={{ backgroundColor:"white", width:"100%", height:"100%" , borderRadius:"10px", alignItems:"center",  }}>
               <Typography variant='h4' sx={{textAlign:"left"}}>Create your account</Typography>
                <Box sx={{ padding: "10px" }}>
                    <SmInput onChange={(e) =>
                        setUserObj({ ...userObj, name: e.target.value })} label="Name" type="text" required={true} />
                </Box>

                <Box sx={{ padding: "10px" }}>
                    <SmInput onChange={(e) =>
                        setUserObj({ ...userObj, email: e.target.value })} label="Email" type="email" required={true} />

                </Box>
                <Box sx={{ padding: "10px" }}>
                    <SmInput onChange={(e) =>
                        setUserObj({ ...userObj, password: e.target.value })} label="Password" type="password" required={true} />

                </Box>

                <Box sx={{ padding: "10px" }}>

                    <SmButton loading={loader} onClick={signUpuser} label="SignUp" color="warning"  />

                </Box>


            </Box>
           </div>
           </div>

        </>
    )
}
