import ProgressBar from "@ramonak/react-progress-bar";


function ProgressBarProp(props) {
    let bgColor

    const red = "#e34f4f";
    const green = "#79e34f";
    const yellow = "#e4eb2f";

    if (props.percentage <= 33) bgColor = green
    if (props.percentage >33 && props.percentage <66) bgColor = yellow
    if (props.percentage >= 66) bgColor = red

    

    return (
        <div className="flex flex-row items-center h-10">

            <p  className="basis-2/4 md:basis-1/4 text-sm text-gray-500 pr-2">{props.name}</p>

            <div className="flex-1">


            <ProgressBar completed={props.percentage} bgColor={bgColor} />
            </div>


        </div>
    );
}

export default ProgressBarProp;