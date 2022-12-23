import ListItem from './ListItem';
import SearchBar from "./SearchBar.js";
import API from "../../Common/api.js";
import { useEffect, useState } from "react";
import ReactLoading from 'react-loading';


function ListPage() {
    const [movies, setMovies] = useState()

    useEffect(() => {
        API.get('movie/',).then((data) => (setMovies(data.data)))
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
                                <div key={movie.slug}>
                                    <ListItem movie={movie} />
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

            </div>
        );

    } else {

        <div className='h-screen w-screen'>
            <ReactLoading type={'spin'} color={'#ffffff'} height={'50%'} width={'50%'} />
        </div>

    }


}

export default ListPage;