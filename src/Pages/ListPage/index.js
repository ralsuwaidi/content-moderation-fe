import ListItem from './ListItem';
import SearchBar from "./SearchBar.js";
import API from "../../Common/api.js";
import { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import Navigationbar from '../Common/Navigationbar';


function ListPage() {
    const [movies, setMovies] = useState()

    useEffect(() => {
        API.get('movies/?populate=*',).then((data) => (setMovies(data)))
    }, []);


    if (movies) {
        return (
            <div>



                <section className="overflow-hidden text-gray-700 ">

                    <div className=" px-3 mx-auto lg:pt-12 lg:px-32">
                        <Navigationbar />

                        <p className=' text-right mb-5 text-4xl md:text-6xl font-bold'>أفلام</p>
                        <div className="pb-10">
                            <SearchBar />
                        </div>
                        <div className="grid grid-cols-3 gap-3 justify-items-stretch items-stretch">

                            {movies.data.data.map((movie) => (
                                <div key={movie.id}>
                                    {console.log(movie.attributes)}
                                    <ListItem movie={movie.attributes} id={movie.id} />
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