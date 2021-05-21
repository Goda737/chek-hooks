import "./register.css"

import {TextField,Button} from '@material-ui/core'
import { useState } from 'react'
import { useHistory } from "react-router"

const Register = () =>{
    const router = useHistory()

    const [name,setName]= useState('')
    const [prénom,setPrénom]= useState('')
    const [mail,setMail]= useState('')

    return (
        <div className="container2">
            <div className="inp">
                <h1>Register</h1>

            <TextField id="standard-basic" label="Nom" value={name} onChange={event=>setName(event.target.value)} />
            <TextField id="standard-basic" label="Prénom" value={prénom} onChange={event=>setPrénom(event.target.value)} />
            <TextField id="standard-basic" label="E-mail" value={mail} onChange={event=>setMail(event.target.value)} />
            <TextField id="standard-basic" label="Mot de passe" />
            <Button variant="contained" color="primary">
  envoyer
</Button>
<Button onClick={()=>router.push('/login')} variant="contained" color="primary">
  login
</Button>



            </div>

        </div>
    )
}

export default Register