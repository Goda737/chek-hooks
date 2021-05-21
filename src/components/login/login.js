import "./login.css"
import {TextField,Button} from '@material-ui/core'
import { useState } from 'react'
import { useHistory } from "react-router"


const Login = () =>{

    const router= useHistory()
    const [passe,setPasse]= useState('')
    const [mail,setMail]= useState('')

    return (
        <div className="container2">
            <div className="inp">
                <h1>Login</h1>

            <TextField id="standard-basic" label="E-mail" value={mail} onChange={event=>setMail(event.target.value)} />
            <TextField id="standard-basic" label="Mot de passe" value={passe} onChange={event=>setPasse(event.target.value)} />
            <Button variant="contained" color="primary">
  envoyer
</Button>
<Button onClick={()=>router.push('/register')} variant="contained" color="primary">
  Register
</Button>




            </div>

        </div>
    )
}

export default Login