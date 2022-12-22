import Pill from "./Pill";
import ProgressBar from "./ProgressBar";
import SimpleRating from "./SimpleRating";
import TextWithTitle from "./TextWithTitle";

function BottomPanel(props) {

    function getLevel(percentage){
        if (percentage <33){
            return "قليل"
        }

        if (percentage > 66) return "كثير";

        return "متوسط"
    }   

    return (
        <div className='bg-white min-h-screen rounded-3xl lg:rounded-none px-5 pt-10 pb-48'>
            <div className="max-w-2xl mx-auto">

            <div className="flex justify-between mx-5 max-w-xl md:mx-auto">
                <SimpleRating rating={getLevel(props.movie.inappropriate_rating)} category="مواضيع غير مناسبة" />
                <SimpleRating rating={getLevel(props.movie.language_rating)} category="ألفاظ غير لائقة" />
                <SimpleRating rating={getLevel(props.movie.violence_rating)} category="مشاهد عنيفة" />
            </div>

            <div className="mt-10">
                <p className="text-center font-semibold text-4xl md:text-6xl">{props.movie.title}</p>
            </div>

            <div className="flex gap-3 justify-center mt-8">
                <Pill text={props.movie.year} />
                <Pill text={props.movie.rating} />
            </div>

            <div className="mt-10">
                <ProgressBar name="مشاهد عنيفة " percentage={props.movie.violence_rating} />
                <ProgressBar name="ألفاظ غير لائقة" percentage={props.movie.language_rating} />
                <ProgressBar name="مواضيع غير مناسبة" percentage={props.movie.inappropriate_rating} />
            </div>

            <div className="mt-8">
                <TextWithTitle title="الملخص" content={props.movie.summary} />
                <TextWithTitle title="مشاهد مخلة وعري" content={props.movie.inappropriate} />
                <TextWithTitle title="ألفاظ غير لائقة" content={props.movie.language} />
                <TextWithTitle title="مشاهد عنيفة شاملة للكثير من القتل والدماء " content={props.movie.violence} />
                <TextWithTitle title="استخدام مواد مخدرة" content={props.movie.drug_usage} />
                <TextWithTitle title="التشكيك في المعتقدات الدينية " content={props.movie.religious_imagery} />
            </div>

            </div>
        </div>
    );
}

export default BottomPanel;