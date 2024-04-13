
import './App.css';
import Navbar from './Component/Navbar';
import About from './Component/footer';
import Account from './Component/Account';
import AccountCreate from './Component/AccountCreate';
import Dibbble from './Component/Dibbble';
import Dibble1 from './Component/Dibble1';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter, createBrowserRouter,Routes,Route, Link, RouterProvider} from "react-router-dom";

let name = "nikeeta";
function App() {
  return (
   < >

   <BrowserRouter>
   <Navbar title="nikeeta"/>
   <Account/>
   <AccountCreate/>
   <Dibbble/>
   <Dibble1/>
   </BrowserRouter>
   <About/>
   </>

  );
}

export default App;
