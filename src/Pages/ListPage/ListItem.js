import { Link } from "react-router-dom";

function ListItem(props) {
    return (


            <div class="flex flex-wrap w-1/3">
        <Link to={"/movie/" + props.movie.id}>

                <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                        src={props.movie.image} />
                </div>
        </Link>
            </div>
    );
}

export default ListItem;