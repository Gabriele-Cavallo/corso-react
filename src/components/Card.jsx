function Card({title, imgUrl, isVisited, children}) {
// function Card(props){
    // const title = props.title;
    // const description = "Lorem ipsum dolor sit amet."
    // const imgUrl = props.imgUrl;
    // if(isVisited) {
    //     return null;
    // }
    const visitedLabel = isVisited ? "✔ visitata" : "❌ non visitata";
    return (
        <>
            <div className="rounded-md bg-zinc-950">
                <img src={imgUrl} alt="" />
                <div className="flex flex-col p-4">
                    <h2 className="text-2xl text-white font-bold">{title}</h2>
                    <p className="text-gray-500">{children}</p>
                    {/* {isVisited ? <span>✔ visitata</span> : <span>❌ non visitata</span>} */}
                    <span>{visitedLabel}</span>
                    {/* {isVisited && <span>✔ visitata</span>} */}
                    {/* {!isVisited && <span>❌ non visitata</span>} */}
                </div>
            </div>
        </>
    );
}
export default Card;