import "./filter.css"
import {useState,useEffect} from 'react'
import {TextField,Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
 
const Filter = (props) =>{

    const router = useHistory()

    const{movies,setMovies,moviesList}= props;
    const [title,setTitle]=useState('')
    const [rating,setRating]=useState('')
    const filter = ()=>{
        if (title && rating){

            const newMovies= moviesList.filter(e=>e.title.toUpperCase().includes (title.toUpperCase())
            && e.rating == rating)
            setMovies(newMovies)


        } else{
        if (title){
        const newMovies= moviesList.filter(e=>e.title.toUpperCase().includes (title.toUpperCase()))
        setMovies(newMovies)
        } else{

        if(rating){

            const newMovies= moviesList.filter(e=>e.rating == rating)
        setMovies(newMovies)
                }
                else {setMovies(moviesList)}

        } 
            
    } 
    
    }
    useEffect(() =>{
        filter();
    },[title,rating])


    return(
        <div className={'filter'}>

            <TextField id="standard-basic" label="Title" value={title} onChange={event => setTitle(event.target.value)}/>
            <TextField id="standard-basic" label="Rating" value={rating} onChange={event => setRating(event.target.value)}/>
            <div  className ={'button'}>
            <Button variant="contained" color="primary">
  filter
</Button>
                
            </div>

            <Button onClick={()=> router.push('/login')} variant="contained" color="primary">
  Login
</Button>
<Button onClick={()=> router.push('/addmovie')}  variant="contained" color="primary">
  ADD
</Button>



        </div>
    )
}
export default Filter