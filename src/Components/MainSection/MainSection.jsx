import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
const MainSection = ({ handleToggolebtn, isActive, handleSelectedPlayer, selectedPlayer,deleteSelectedItem }) => {
    let [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <div className="my-14">
            <div className="text-center md:flex justify-between">
                {
                    isActive.available ? <h1 className="text-2xl font-bold">Available Player</h1> : <h1 className="text-2xl font-bold">Selected Player ({selectedPlayer.length}/{players.length})</h1>
                }
                <div>
                    <button onClick={() => handleToggolebtn("available")} className={`${isActive.available ? 'btn bg-[#E7FE29] rounded-r-none' : 'btn rounded-r-none'}`}>Available</button>
                    <button onClick={() => handleToggolebtn("selected")} className={`${isActive.available ? 'btn rounded-l-none' : 'btn bg-[#E7FE29] rounded-l-none'}`}>Selected ({selectedPlayer.length})</button>
                </div>
            </div>
            {
                isActive.available ?
                    <section className="grid gap-4 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            players.map((player) =>
                                <div key={player.playerId}>
                                    <div className="card border-2">
                                        <figure className="px-3 pt-3">
                                            <img
                                                src={player.image}
                                                alt="Player Img"
                                                className="rounded-xl h-[200px] w-full" />
                                        </figure>
                                        <div className="card-body px-4">
                                            <div className="flex items-center gap-2">
                                                <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=85356&format=png&color=000000" alt="" />
                                                <h2 className="card-title">{player.name}</h2>
                                            </div>
                                            <div className="lg:flex justify-between items-center">
                                                <h1 className="flex gap-2 items-center opacity-60"><img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=94733&format=png&color=000000" alt="" /> {player.country}</h1>
                                                <h1 className="border-[1px] bg-[#F3F3F3] px-4 py-2 rounded-md">{player.role}</h1>
                                            </div>
                                            <span className="border-b-2"></span>
                                            <div className="space-y-3">
                                                <h1 className="font-bold">Rating</h1>
                                                <div className="lg:flex justify-between items-center">
                                                    <h1 className="font-bold text-sm">{player.battingType}</h1>
                                                    <h1 className="font-bold text-sm">{player.bowlingType}</h1>
                                                </div>
                                                <div className="lg:flex justify-between items-center">
                                                    <h1 className="font-bold text-sm">Price : ${player.biddingPrice}</h1>
                                                    <button onClick={() => handleSelectedPlayer(player)} className="btn bg-white border-slate-400 mt-4 lg:mt-0">Choose Player</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </section>
                    :
                    <div>
                        {
                            selectedPlayer.map((player, index) =>
                                <div key={index} className="border-2 border-[#EDEDED] rounded-xl p-4 my-5">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-4 items-center">
                                            <img className="w-20 h-[80px] rounded-xl" src={player.image} alt="" />
                                            <div className="space-y-1">
                                                <h1 className="text-sm lg:text-xl font-[600]">{player.name}</h1>
                                                <p className="text-sm font-[500]">{player.role}</p>
                                                <p className="text-sm">${player.biddingPrice}</p>
                                            </div>
                                        </div>
                                        <button onClick={()=>deleteSelectedItem(player.playerId)}>
                                            <img className="w-8" src="https://img.icons8.com/?size=100&id=43949&format=png&color=000000" alt="" />
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    <button onClick={()=>handleToggolebtn('available')} className="btn bg-[#E7FE29]">Add More Player</button>
                    </div>
            }
        </div>
    );
};
MainSection.propTypes = {
    players: PropTypes.array,
    handleToggolebtn: PropTypes.func,
    isActive: PropTypes.boolean,
    handleSelectedPlayer: PropTypes.func,
    selectedPlayer: PropTypes.array,
    deleteSelectedItem: PropTypes.func
}
export default MainSection;