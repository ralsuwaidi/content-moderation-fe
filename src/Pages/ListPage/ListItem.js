import { Link } from "react-router-dom";

function ListItem(props) {
    return (

        <Link to={"/movie/" + props.id}>
            <img alt="gallery" className="object-cover w-full h-full rounded-lg"
                src={props.movie.poster.data.attributes.formats.small.url.replace('https://https', 'https://aicdn.sgp1.cdn.digitaloceanspaces.com')} />
        </Link>
    );
}

export default ListItem;