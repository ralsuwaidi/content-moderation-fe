function ProgressBar(props) {
    return (
        <div className="flex flex-row items-center h-10">
            <div dir="rtl" className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
                <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: props.percentage + '%' }}></div>
            </div>
            <p dir="rtl" className="basis-2/4 md:basis-1/4 text-sm text-gray-500 pl-2">{props.name}</p>

        </div>
    );
}

export default ProgressBar;