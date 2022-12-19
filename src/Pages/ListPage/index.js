import movieData from "../../data.js"
import ListItem from './ListItem';
import SearchBar from "./SearchBar.js";

function ListPage() {


    return (
        <div>


            <section class="overflow-hidden text-gray-700 mt-10">

                <div class="container px-3   py-2 mx-auto lg:pt-12 lg:px-32">
                    <div className="pb-10">
                        <SearchBar />
                    </div>
                    <div class="flex flex-wrap -m-1 md:-m-2">

                        {movieData.map((movie) => (
                            <ListItem movie={movie} />
                        ))}

                    </div>
                </div>
            </section>

        </div>
    );
}

export default ListPage;