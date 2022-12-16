import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
function ImageHeader(props) {
    return (
        <div className={"w-full h-screen bg-no-repeat bg-cover bg-center"} style={{ backgroundImage: `url(${props.poster})` }}>

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
                        <p className="px-2 text-sm md:text-base">2h 22m</p>
                    </div>
                </div>
            </div>

            {props.children}
        </div>
    );
}

export default ImageHeader;