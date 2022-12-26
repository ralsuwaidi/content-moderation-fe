import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function TextWithTitle(props) {
    return (
        <div className="mt-5">
            <div dir="rtl" className="mt-5 prose lg:prose-xl">
                <h2>{props.title}</h2>
                <ReactMarkdown>
                    {props.content}
                </ReactMarkdown>

            </div>
        </div>
    );
}

export default TextWithTitle;