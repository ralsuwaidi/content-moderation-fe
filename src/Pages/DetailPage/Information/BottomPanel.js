import Pill from "./Pill";
import ProgressBarProp from "./ProgressBarProp";
import SimpleRating from "./SimpleRating";
import TextWithTitle from "./TextWithTitle";

function BottomPanel(props) {

    function getLevel(percentage) {
        if (percentage < 33) {
            return "قليل"
        }

        if (percentage > 66) return "كثير";

        return "متوسط"
    }

    return (
        <div className='bg-white min-h-screen rounded-3xl lg:rounded-none px-5 pt-10 pb-48'>
            <div className="max-w-2xl mx-auto">

                <div className="flex justify-between mx-5 max-w-xl md:mx-auto">
                    <SimpleRating category={getLevel(props.movie.inappropriate_rating)} rating="مواضيع غير مناسبة" />
                    <SimpleRating category={getLevel(props.movie.language_rating)} rating="ألفاظ غير لائقة" />
                    <SimpleRating category={getLevel(props.movie.violence_rating)} rating="مشاهد عنيفة" />
                </div>

                <div className="mt-10">
                    <p className="text-center font-semibold text-4xl md:text-6xl">{props.movie.title}</p>
                </div>

                <div className="flex gap-3 justify-center mt-8">
                    <Pill text={props.movie.year} />
                    <Pill text={props.movie.rating} />
                </div>

                <p className="text-center md:text-base text-xs text-gray-400 mt-3">
                    حسب تصنيف الولايات المتحدة الأمريكية
                </p>

                <div className="mt-8">
                    <ProgressBarProp percentage={props.movie.inappropriate_rating} name="مواضيع غير مناسبة" />
                    <ProgressBarProp percentage={props.movie.language_rating} name="ألفاظ غير لائقة" />
                    <ProgressBarProp percentage={props.movie.violence_rating} name="مشاهد عنيفة" />
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