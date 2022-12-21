import ListItem from './ListItem';
import SearchBar from "./SearchBar.js";
import API from "../../Common/api.js";
import { useEffect, useState } from "react";

function ListPage() {
    const [movies, setMovies] = useState()

    useEffect(() => {
        API.get('movie/', ).then((data) => (setMovies(data.data)))
    }, []);


    if (movies) {
        return (
            <div>
    
    
                <section className="overflow-hidden text-gray-700 mt-10">
    
                    <div className=" px-3 py-2 mx-auto lg:pt-12 lg:px-32">
                        <div className="pb-10">
                            <SearchBar />
                        </div>
                        <div className="grid grid-cols-3 gap-3 justify-items-stretch items-stretch">
    
                            {movies.map((movie) => (
                                <ListItem movie={movie} />
                            ))}
    
                        </div>
                    </div>
                </section>
    
            </div>
        );
        
    } else {

        <p>loading...</p>
        
    }


}

export default ListPage;