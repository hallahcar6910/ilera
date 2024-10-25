import "./App.css";
import AboutUs from "./components/AboutUs";

import Benefits from "./components/Benefit";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";


import NavBar from "./components/Navbar";
import PathologyDetection from "./components/Hero";

function App() {
  return (
    <>
      <NavBar />
   

      <PathologyDetection />
      <Benefits />
      <AboutUs/>

    
      <ContactUs/>
   

     <Footer/>
    </>
  );
}

export default App;
