import "./card.css"
import img from "../../assete/images/film1.jpg"


const Moviecard = (props) => {
    const {movie} =props
    return (
        <div className={'card'}>


            <span>Title : {movie.title}</span>
            <span>Description :{movie.description}</span>
            <span>Url :{movie.Url}</span>
            <span>Rating :{movie.rating}</span>
            <div>
                <img className={"image"} src={img}/>
            </div>


        </div>
    )
}

export default Moviecard