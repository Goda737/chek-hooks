import "./card.css"

const Moviecard = (props) => {
    const {movie} =props
    return (
        <div className={'card'}>

            <span>Title : {movie.title}</span>
            <span>Description :{movie.description}</span>
            <span>Url :{movie.Url}</span>
            <span>Rating :{movie.rating}</span>


        </div>
    )
}

export default Moviecard