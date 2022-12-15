function ProgressBar(props) {
    return (
        <div className="flex flex-row items-center h-10">
            <p className="basis-2/4 md:basis-1/4 text-sm text-gray-500 pr-2">{props.name}</p>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
                <div class="bg-orange-500 h-2.5 rounded-full" style={{ width: props.percentage + '%' }}></div>
            </div>
        </div>
    );
}

export default ProgressBar;