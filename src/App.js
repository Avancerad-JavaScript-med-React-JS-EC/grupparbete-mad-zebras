import {Route, Switch} from 'react-router-dom'; 
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu'; 
import Landing from './components/Landing/Landing'; 
import Status from './components/Status/Status';
import './App.css';

function App() {
  return(
     <Switch>
        <Route path ="/" component ={Landing} exact />
        <Route path ="/menu/:id" component ={Menu} />
        <Route path="/nav/:id" component ={Nav} />
        <Route path="/About/:id" component={About} />
        <Route path="/cart/:id" component={Cart} />
        <Route path="/status/:id" component={Status} />
    </Switch>
  );
}

export default App;
