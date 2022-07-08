import './App.css'
import Nav from './components/NavBar'
import Main from './components/MainContent'
import Features from './components/Features'
import Extensions from './components/DownExtension'
import Footer from './components/Footer'

function App() {


  return (
    <div className="App">
      <Nav/>
      <Main/>
      <Features/>
      <Extensions/>
      <Footer/>
    </div>
  )
}

export default App
