import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import About from './sections/About/About';
import Certificates from './sections/Certificates/Certificates';
import Contact from './sections/Contact/Contact';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <div >
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
