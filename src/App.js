import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero';
import Section from './components/Section2/Section';
import TeamMembers from './components/Team/TeamMembers';

function App(Props) {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section />
      <TeamMembers />
      <Footer />
      {/* <Button  buttonData="Jaiten"/> */}
    </div>
  );
}

export default App;
