import logo from './logo.svg';
import './App.css';
import Header from './components/HeaderSection/Header';
import Body from './components/HeroSection/Body';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="main-container">
       <Header/>
       <Body/>
       <Footer/>

    </div>
  );
}

export default App;
