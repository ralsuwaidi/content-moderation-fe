import Parser from 'html-react-parser';

function TextWithTitle(props) {
    return (
        <div className="mt-5">
            <div dir="rtl" className="mt-5 prose lg:prose-xl">
                <h2>{props.title}</h2>
                {Parser(props.content)}

            </div>
        </div>
    );
}

export default TextWithTitle;