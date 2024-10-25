
const MainSection = () => {
    return (
        <div className="my-14">
            <div className="text-center md:flex justify-between">
                <h1 className="text-2xl font-bold">Available Players</h1>
                <div>
                    <button className="btn bg-[#E7FE29] rounded-r-none">Available</button>
                    <button className="btn rounded-l-none">Selected (0)</button>
                </div>
            </div>
        </div>
    );
};

export default MainSection;