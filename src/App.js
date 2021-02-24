import logo from './logo.svg';
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
