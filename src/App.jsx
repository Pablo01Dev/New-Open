  import Header from './components/Header/Header';
  import Home from './components/Home/Home';
  import QuemSomos from './components/QuemSomos/QuemSomos';
  import Depoimento from './components/Depoimento/Depoimento'; 
  import DrinksCarousel from './components/Drinks/DrinksCarousel';
  import Contact from './components/Contact/Contact';
  import Footer from './components/Footer/Footer';
  import Services from './components/Services/services';

  import './App.css';


  function App() {
    return (
      <div>
        <Header />
        <Home />
        <QuemSomos />
        <Depoimento />
        <Services />
        <DrinksCarousel />
        <Contact />
        <Footer />
      </div>
    );
  }

  export default App;
