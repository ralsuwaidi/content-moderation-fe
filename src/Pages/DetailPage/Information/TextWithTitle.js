function TextWithTitle(props) {
    return (
        <div className="mt-5">
            <p className="text-lg font-semibold">{props.title}</p>
            <p className="mt-5">{props.text}</p>
        </div>
    );
}

export default TextWithTitle;