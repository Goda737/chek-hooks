import "./card.css"
import img from "../../assete/images/film1.jpg"
import React from 'react';
import Rating from '@material-ui/lab/Rating';



const Moviecard = (props) => {
    
    const [value, setValue] = React.useState(2);

    const {movie} =props

    return (
        <div className={'card'}>


            <div className={'info'}>            
            <span>{movie.title}</span>
            </div>
            <div>
                <img className={"image"} src={movie.posturl}/>
            </div>
            <div>
            <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />


            </div>
            


        </div>
    )
}

export default Moviecard