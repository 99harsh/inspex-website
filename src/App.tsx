
import './App.scss'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <div className='inw-main-container'>
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App