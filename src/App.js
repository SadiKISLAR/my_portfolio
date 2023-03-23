import './App.css';
import About from './sections/About/About';
import Certificates from './components/Certificates/Certificates';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div >
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contacts />
      <Footer />
    </div>
  );
}
export default App;
