import { Link } from "react-router-dom";

function ListItem(props) {
    return (


        <Link to={"/movie/" + props.movie.slug}>
            <img alt="gallery" className="object-cover w-full h-full rounded-lg"
                src={props.movie.poster} />
        </Link>
    );
}

export default ListItem;