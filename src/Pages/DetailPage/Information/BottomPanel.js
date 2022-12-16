import Pill from "./Pill";
import ProgressBar from "./ProgressBar";
import SimpleRating from "./SimpleRating";
import TextWithTitle from "./TextWithTitle";

function BottomPanel(props) {
    return (
        <div className='bg-white min-h-screen rounded-3xl px-5 pt-10 pb-48'>
            <div className="max-w-2xl mx-auto">

            <div className="flex justify-between mx-5 max-w-xl md:mx-auto">
                <SimpleRating rating="Low" category="Sex & Nudity" />
                <SimpleRating rating="Low" category="Violence & Gore" />
                <SimpleRating rating="Low" category="Language" />
            </div>

            <div className="mt-10">
                <p className="text-center font-semibold text-4xl md:text-6xl">{props.movie.title}</p>
            </div>

            <div className="flex gap-3 justify-center mt-8">
                <Pill text="2022" />
                <Pill text="PG" />
            </div>

            <div className="mt-10">
                <ProgressBar name="Sex & Nudity" percentage="20" />
                <ProgressBar name="Violence & Gore" percentage="50" />
                <ProgressBar name="Language" percentage="20" />

            </div>

            <div className="mt-8">
                <TextWithTitle title="Description" text={props.movie.description} />
                <TextWithTitle title="Sex & Nudity" text={props.movie.sex_and_nudity_text} />
                <TextWithTitle title="Violence & Gore" text={props.movie.violence_and_gore_text} />
                <TextWithTitle title="Language" text={props.movie.language_text} />
            </div>

            </div>
        </div>
    );
}

export default BottomPanel;