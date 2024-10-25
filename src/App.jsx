import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import MainSection from './Components/MainSection/MainSection'

function App() {
  return (
    <>
      <div className='w-10/12 mx-auto py-4'>
        <Header></Header>
        <Banner></Banner>
        <MainSection></MainSection>
      </div>
      <Footer></Footer>
    </>

  )
}

export default App
