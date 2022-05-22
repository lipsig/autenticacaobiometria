import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./Components/UserList";
import Login from "./Components/Login";
import CreateAccount from "./Components/CreateAccount";
 
function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
            <Route exact path="/" element={ <UserList />} />
            <Route exact path="/login" element={ <Login />} />
            <Route exact path="/create" element={ <CreateAccount />} />
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}
 
export default App;