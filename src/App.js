import logo from './logo.svg';
import './App.css';

import About from './components/About';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Support from './components/Support';
import AllInOne from './components/AllInOne';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
// import Slidebar from './components/Slidebar';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
      {/* <Slidebar /> */}
    

    </div>
  );
}

export default App;
