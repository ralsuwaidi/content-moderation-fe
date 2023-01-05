function SimpleRating(props) {
    return ( 
        <div className="text-sm md:text-base">
            <p className="text-center font-bold">{props.rating}</p>
            <p className="text-center text-gray-500">{props.category}</p>
        </div>
     );
}

export default SimpleRating;