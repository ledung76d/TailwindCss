import './App.css'
import Nav from './Components/Nav/index'
import AuthButtons from './Components/AuthButtons/index'
import Header from './Components/Header/index'
import Trending from './Components/Trending/index'
function App() {


  return (
    <div className='grid grid-cols-5'>
      <Nav />
      <main className='col-span-4 bg-cyan-50 px-12 py-16'>
        <AuthButtons />
        <Header />
        <Trending />
      </main>
    </div>
  )
}

export default App
