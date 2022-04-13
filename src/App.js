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
function App() {
  const scrollUp=()=>{
    var currentScroll = document.documentElement.scrollTop
    if(currentScroll > 0){
      window.requestAnimationFrame(scrollUp);
      window.scrollTo (0, currentScroll-(currentScroll/13));
    }
  }
  const buttonUp = document.getElementById("button-up");
 window.onscroll=function(){
   var scroll = document.documentElement.scrollTop;
   if(scroll > 100){
     buttonUp.style.transform="scale(1)";
   }else {
     buttonUp.style.transform = "scale(0)"
   }
 }
  return (
    <>
        <img className='w-14 fixed m-10 cursor-pointer hover:scale-110' style={{bottom:"0",right:"0"} } src='https://cdn.icon-icons.com/icons2/70/PNG/512/whatsapp_14158.png'></img>
        <svg id='button-up' onClick={scrollUp} className='w-12 fixed m-12 mb-28 cursor-pointer hover:scale-110  bg-white shadow-lg  p-2 text-white' style={{bottom:"0",right:"0",color:"white",borderRadius:"49%",transform:"scale(1)"} }  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" /></svg>
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
