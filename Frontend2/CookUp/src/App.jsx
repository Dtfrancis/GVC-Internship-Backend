import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Product from './components/Product';
function App() {
  const link = 'http://google.com';
  return (
    <div >
      <section className="max-w-screen-lg h-350">
        <Header/>
      </section>
      <section className="flex justify-start top-40">
      <Sidebar/>
      
      <div className="m-24 top-40 bg-yellow-400 rounded-3xl h-60 w-60 justify-items-center" >
        <Product name="Cookies" price="100" id="1" img="./src/assets/cookie.png"/>
      </div>
      <div className="m-24 top-40 bg-pink-700 rounded-3xl h-60 w-60 justify-items-center" >
        <Product name="Cupcakes" price="20" id="2" img="./src/assets/cupcake.png"/>
      </div>
      <div className="m-24 top-40 bg-red-400 rounded-3xl h-60 w-60 justify-items-center" >
        <Product name="Tarts" price="60" id="3" img="./src/assets/tart.png"/>
      </div>
      </section>


      
      
      
    </div>
  );
}

export default App;

