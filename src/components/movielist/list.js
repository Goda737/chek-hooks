import Moviecard from "../moviecard/card"
import "./list.css"

const Liste = (props) =>{
    const {movies} = props
    return(
        <div className={'container'}>

            {movies.map(movie => <Moviecard movie={movie}/>)}
            
        

        </div>
       
    )

}
export default Liste