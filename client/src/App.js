import "./App.scss";
import logo from "./logo.png";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./components/screens/HomePage";
import DetailsPage from "./components/screens/Details/DetailsPage";

function App() {
  return (
    <div className="App bg-primary">
      <img
        src={logo}
        alt="space x logo"
        style={{ width: "200px", display: "block", margin: "auto" }}
      />
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/details/:id" exact component={DetailsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
