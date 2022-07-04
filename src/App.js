import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {Home,WeAreJava,Menu, Shop, Offices, Investment, Race, Contact, Blog} from './screens'
import {Header,Footer} from './components'
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/we-are-java' element={<WeAreJava/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/offices' element={<Offices/>}/>
        <Route path='/investment' element={<Investment/>}/>
        <Route path='/race' element={<Race/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
