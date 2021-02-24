import logo from './logo.svg';
import './App.css';

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
    <section>
<<<<<<< Updated upstream
      <Switch>
          <Route path ="/" component ={Landing} exact />
          <Route path ="/menu/:id" component ={Menu} />
          <Route path="/nav/:id" component ={Nav} />
          <Route path="/About/:id" component={About} />
          <Route path="/cart/:id" component={Cart} />
          <Route path="/status/:id" component={Status} />
        </Switch>
=======
     
     <Switch>
      <Route path ="/" component ={Landing} exact />
      <Route path ="/menu/:id" component ={Menu} />
      <Route path="/nav/:id" component ={Nav} />
      <Route path="/About/:id" component={About} />
      <Route path="/cart/:id" component={Cart} />
      <Route path="/status/:id" component={Status} />



     </Switch>
>>>>>>> Stashed changes
    </section>
>>>>>>> Stashed changes
  );
}

export default App;
