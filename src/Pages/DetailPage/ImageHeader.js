import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai"

function ImageHeader(props) {
    return (
        <div className={"w-full h-screen bg-no-repeat bg-cover bg-center"} style={{ backgroundImage: `url(${props.movie.poster})` }}>

            <div className=" flex pt-24 justify-between mx-8 md:mx-14 items-center">

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

            <div className=" mt-36 mb-12 z-auto flex justify-center w-full text-7xl text-orange-500">

                {props.movie.trailer && 
                <a href={props.movie.trailer}>
                    <AiFillPlayCircle />
                </a>
                }
            </div>


            {props.children}
        </div>
    );
}

export default ImageHeader;