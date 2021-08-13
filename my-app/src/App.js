import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Content from './components/home';
import Footer from './components/footer';
import ViewCust from './components/viewcust';
import TransMon from './components/transmon';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Custinfo from './components/custinfo';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="Content">
      <Switch>
      <Route exact path="/">
      <Content />
      </Route>
      <Route path="/transmon">
      <TransMon />
      </Route>
      <Route path="/viewcust">
      <ViewCust />
      </Route>
      <Route path="/custinfo/:name">
      <Custinfo />
      </Route>
      </Switch>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
