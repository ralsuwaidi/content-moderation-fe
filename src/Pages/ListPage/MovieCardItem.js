import { Link } from "react-router-dom";

function MovieCardItem(props) {

    return (
        <div>
            <div className={" max-h-[70vh] w-[60vw] rounded-xl bg-no-repeat bg-cover bg-center " + "bg-[url('" + props.movie.image + "')]"}>
                <Link to={"/movie/" + props.movie.id}>
                    <div className="rounded-xl bg-orange-500 w-fit text-white px-2 py-1 absolute bottom-0 inset-x-0">
                        <div>
                            View
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MovieCardItem;