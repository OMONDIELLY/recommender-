import { BrowserRouter as Router, Switch , Route} from "react-router-dom";

import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Programs from "./components/Programs";
import Institutions from "./components/Institutions";
import Mentors from "./components/Mentors";

import './App.css';


function App() {
  return ( 
    <div id="" >
    <div className="App">
    <Router>
    <Header/>
     <Switch>
      <Route exact path ="/" >
         <Login/>
      </Route>
      <Route exact path ="/home">
        <Home/>
      </Route>
      <Route exact path ="/signup">
        <Signup/>
      </Route>
      
      <Route exact path ="/programs">
        <Programs/>
      </Route>

      <Route exact path ="/institutions">
        <Institutions/>
      </Route>

      <Route exact path ="/mentors">
        <Mentors/>
      </Route>

      

     </Switch>    
    </Router>
    </div>
  </div>
  );
}

export default App;
