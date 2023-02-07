import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai"

function ImageHeader(props) {
    const imageUrl = props.movie.poster.data.attributes.url.replace('https://https', 'https://aicdn.sgp1.cdn.digitaloceanspaces.com')

    return (
        <div className={"w-full h-screen "} >
            <div className="bg-no-repeat bg-contain bg-black bg-center w-full h-3/4" style={{ backgroundImage: `url(${imageUrl})` }}>

                <div className="max-w-4xl mx-auto">
                    <div className=" flex pt-24 justify-between mx-8 md:mx-14 items-center ">

                        <div className=" w-fit">
                            <Link to="/list">
                                <div className=" text-white text-xl md:text-2xl p-1 md:p-2 backdrop-blur-sm bg-white/30 w-fit rounded-full ">
                                    <AiOutlineCloseCircle />
                                </div>
                            </Link>
                        </div>

                        <div className=" w-fit ">
                            <div className=" items-center flex text-white md:text-2xl p-1 md:p-2 backdrop-blur-sm bg-white/30 w-fit rounded-full ">
                                <BiTimeFive />
                                <p className="px-2 text-sm md:text-base">{props.movie.duration}</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=" mt-36 mb-12 z-auto flex justify-center w-full text-7xl text-orange-500">

                    {props.movie.trailer &&
                        <a href={props.movie.trailer}>
                            <AiFillPlayCircle />
                        </a>
                    }
                </div>

            </div>

            {props.children}
        </div>
    );
}

export default ImageHeader;