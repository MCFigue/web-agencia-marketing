import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Compromiso from './components/compromiso';
import Planes from './components/Planes';
import Beneficios from './components/Beneficios';
import Equipo from './components/Equipo';
import Testimonio from './components/Testimonio';
import Solicitar from './components/Solicitar';
import Footer from './components/Footer';
import BtnWhatsapp from './components/Acciones/BtnWhatsapp';
import BtnUp from './components/Acciones/BtnUp';
function App() {
  
  return (
    <>
        <BtnWhatsapp/>
        <BtnUp/>
        <Header />
        <Home />
        <Compromiso />
        <Planes />
        <Beneficios />
        <Equipo/>
        <Testimonio/>
        <Solicitar/>
        <Footer/>
    </>
  );
}

export default App;
