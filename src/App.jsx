import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import MainSection from './Components/MainSection/MainSection'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let [coin, setCoin] = useState(0);
  let [isActive, setisActive] = useState({ available: true, status: 'available' });
  let [selectedPlayer, setSelectedPlayer] = useState([])
  let [preparedItem, setPreparedItem] = useState([]);
  let handleCoin = () => {
    toast.success('You Claim Coin successfully!')
    setCoin(coin + 60000000);
  }
  let handleToggolebtn = (status) => {
    if (status === 'available') {
      setisActive({ available: true, status: 'available' })
    }
    else {
      setisActive({ available: false, status: 'selected' })
    }
  }

  let handleSelectedPlayer = (player) => {
    let isSelected = selectedPlayer.find(previewRecipe => previewRecipe.playerId === player.playerId);
    if(coin <= 0 || coin < player.biddingPrice){
      return toast.error('Not Enough Coin')
    }
    if (!isSelected) {
      setSelectedPlayer([...selectedPlayer, player]);
      setCoin(coin - player.biddingPrice)
      return toast.success(`Your player selected ${player.name} Successfully`)
    }
    else {
      toast.error('Player already Selected!')
    }
  }
  
  let deleteSelectedItem = (id) => {
    let deleteSelectedItem = selectedPlayer.find(player => player.playerId === id)
    setPreparedItem([...preparedItem, deleteSelectedItem])
    let updateItem = selectedPlayer.filter(player => player.playerId !== id);
    setSelectedPlayer(updateItem);

  }


  return (
    <>
      <div className='w-10/12 mx-auto py-4'>
        <Header coin={coin}></Header>
        <Banner
          handleCoin={handleCoin}
        ></Banner>
        <MainSection
          handleToggolebtn={handleToggolebtn}
          isActive={isActive}
          handleSelectedPlayer={handleSelectedPlayer}
          selectedPlayer={selectedPlayer}
          deleteSelectedItem={deleteSelectedItem}
        ></MainSection>
        <ToastContainer position="top-center"></ToastContainer>
      </div>
      <Footer></Footer>
    </>

  )
}

export default App
