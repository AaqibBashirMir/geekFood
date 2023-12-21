import logo from './logo.svg';
import './App.css';
import Header from './components/HeaderSection/Header';
// import Body from './components/HeroSection/Body';
import Footer from './components/Footer/Footer';
import quotes from './components/QuoteList.json';
import Card from './components/Card';

function App() {
  return (
    <div className="main-container">
       <Header/>
       {

        quotes.map((data)=>{
          return <Card {...data}/>
        })
       }
       <Footer/>

    </div>
  );
}

export default App;
