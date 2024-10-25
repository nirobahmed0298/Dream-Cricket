import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import MainSection from './Components/MainSection/MainSection'

function App() {
  let [coin, setCoin] = useState(0);
  let handleCoin = () => {
    // if(coin === 0){
    //   // alert('Not Enough Coin')
    // }
    setCoin(coin + 60000);
  }
  let [isActive, setisActive] = useState({ available: true, status: 'available' });
  let handleToggolebtn = (status) => {
    if (status === 'available') {
      setisActive({ available: true, status: 'available' })
    }
    else {
      setisActive({ available: false, status: 'selected' })
    }
  }
  return (
    <>
      <div className='w-10/12 mx-auto py-4'>
        <Header coin={coin}></Header>
        <Banner
          handleCoin={handleCoin}

        ></Banner>
        <MainSection handleToggolebtn={handleToggolebtn} isActive={isActive}></MainSection>
      </div>
      <Footer></Footer>
    </>

  )
}

export default App
