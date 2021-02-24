<<<<<<< HEAD

=======
import {Route, Switch} from 'react-router-dom'; 
import About from './components/About/about';
import Cart from './components/Cart/cart';
import Nav from './components/Nav/nav';
import Menu from './components/Menu/menu'; 
import Landing from './components/Landing/landing'; 
import Status from './components/Status/status';
>>>>>>> master
import './App.css';
import {Route, Switch} from 'react-router-dom'; 
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu'; 
import Landing from './components/Landing/Landing'; 
import Status from './components/Status/Status';

function App() {
<<<<<<< HEAD
  return (
    <section>
     
     <Switch>
<Route path ="/" component ={Landing} exact />
<Route path ="/menu/:id" component ={Menu} />
<Route path="/nav/:id" component ={Nav} />
<Route path="/About/:id" component={About} />
<Route path="/cart/:id" component={Cart} />
<Route path="/status/:id" component={Status} />



     </Switch>
    </section>
=======
  return(
     <Switch>
        <Route path ="/" component ={Landing} exact />
        <Route path ="/menu" component ={Menu} />
        <Route path="/nav" component ={Nav} />
        <Route path="/About" component={About} />
        <Route path="/cart" component={Cart} />
        <Route path="/status" component={Status} />
    </Switch>
>>>>>>> master
  );
}

export default App;
