import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./Components/UserList";

 
function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
            <Route exact path="/" element={ <UserList />} />
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}
 
export default App;