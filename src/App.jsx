  import Header from './components/Header/Header';
  import Home from './components/Home/Home';
  import QuemSomos from './components/QuemSomos/QuemSomos';
  import Depoimento from './components/Depoimento/Depoimento'; 
  import DrinksCarousel from './components/Drinks/DrinksCarousel';
  import Social from './components/Social/Social';
  import Contact from './components/Contact/Contact';

  import './App.css';

  function App() {
    return (
      <div>
        <Home />
        <QuemSomos />
        <Depoimento />
        <DrinksCarousel />
        <Contact />
      </div>
    );
  }

  export default App;
