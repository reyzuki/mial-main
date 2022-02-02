import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Mail  from "./components/Mail";
import EmailList from "./components/EmailList";
import Compose from "./components/compose"; 

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>

      <div className="app_body">
      <Sidebar/>
      
      <Switch>
       <Route path="/mail">
        <Mail/>
       </Route>

       <Route path="/">
        <EmailList/>
       </Route>
       <Route path="/compose">
        <Compose/>
       </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
