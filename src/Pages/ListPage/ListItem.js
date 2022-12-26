import { Link } from "react-router-dom";

function ListItem(props) {
    return (

        <Link to={"/movie/" + props.id}>
            <img alt="gallery" className="object-cover w-full h-full rounded-lg"
                src={process.env.REACT_APP_BASE_URL.substring(0, process.env.REACT_APP_BASE_URL.lastIndexOf('/api/')) + props.movie.poster.data.attributes.formats.small.url} />
        </Link>
    );
}

export default ListItem;