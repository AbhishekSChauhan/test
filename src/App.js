import './App.css';
// import Header from './Header.js'
import HeaderTwo from './HeaderTwo.js'
// import HeaderThree from './HeaderThree.js'
// import Home from './Home.js'
// import Checkout from './Checkout.js'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="App">
        <HeaderTwo />
        {/* <HeaderThree /> */}
        {/* <Switch>
          <Route path="/checkout">
              <Checkout />
          </Route>

          <Route path="/">
            <Home />
            <HeaderTwo /> */}
           {/* </Route>  
        </Switch> */} 
      </div>
    </Router>
  );
}

export default App;
