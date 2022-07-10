import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import CreateForm from "./pages/FormCreate";
import EditForm from "./pages/FormEdit";
import SearchForm from "./pages/FormSearch";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

          <Switch>
            <Route path="/create-player">
              <CreateForm />
            </Route>
            <Route path="/edit-player">
              <EditForm />
            </Route>
            <Route path="/search-player">
              <SearchForm />
            </Route>
          </Switch>
       
      </div>
    </Router>
  );
}

export default App;
