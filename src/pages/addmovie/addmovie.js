import './add.css'
import {TextField,Button} from '@material-ui/core'
import { useState } from 'react'

const Addmovie = () =>{

    const [titre,setTitre]= useState('')
    const [déscription,setDéscription]= useState('')
    const [rate,setRate]= useState('')

    return (
        <div className="container2">
            <div className="inp">
                <h1>Ajouter un film</h1>

            <TextField id="standard-basic" label="Titre" value={titre} onChange={event=>setTitre(event.target.value)} />
            <TextField id="standard-basic" label="déscription" value={déscription} onChange={event=>setDéscription(event.target.value)} />
            <TextField id="standard-basic" label="Note" value={rate} onChange={event=>setRate(event.target.value)} />
            <TextField id="standard-basic" label="URL" />
            <Button variant="contained" color="primary">
  Ajouter
</Button>



            </div>

        </div>
    )
}

export default Addmovie