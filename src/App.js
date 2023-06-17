import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Card from './components/Card';
import img1 from './img/cardimg1.png'
import img2 from './img/cardimg2.png'
import img3 from './img/cardimg3.png'
import img4 from './img/cardimg4.png'

function App() {
  return (
    <div >
      {/* <Navbar/> */}
      <Carousel/>
      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1>React JS Workshop</h1>
   <div className='row'>
     <Card img ={img1} title ="Deal 1"  desc = "deal1 desc"   price = "250"/>
     <Card img ={img2} title = "Deal 2"   desc = "deal1 desc" price = "250"/>
     <Card img ={img3}  title = "Deal 3"  desc = "deal1 desc" price = "250"/>
     <Card img ={img4} title = "Deal 4"  desc = "deal1 desc" price = "250"/>
     </div>
    </div>
  );
}

export default App;
