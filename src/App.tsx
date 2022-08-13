import './App.css'
import Nav from './Components/Nav/index'
import AuthButtons from './Components/AuthButtons/index'
import Header from './Components/Header/index'
import Trending from './Components/Trending/index'
function App() {


  return (
    <div className='grid md:grid-cols-4 xl:grid-cols-5'>
      <Nav />
      <main className='md:col-span-3 xl:col-span-4 bg-cyan-50 px-12 py-6'>
        <AuthButtons />
        <Header />
        <Trending />
      </main>
    </div>
  )
}

export default App
