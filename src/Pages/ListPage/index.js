import ReactCardCarousel from 'react-card-carousel';
import MovieCardItem from "./MovieCardItem";
import movieData from "../../data.js"
import ListItem from './ListItem';
import { Carousel } from 'flowbite-react';

function ListPage() {
    return (
        <div>
            <div className="">


                <div className="h-[70vh] rounded-none">
                    <Carousel indicators={false}>
                        {movieData.map((movie) => (
                              <img
                              src={movie.image}
                              alt="..."
                          />
                        ))}
                    </Carousel>
                </div>

            </div>

            <section class="overflow-hidden text-gray-700 mt-10">
                <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
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