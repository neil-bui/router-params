import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div>
        <h2 className="m-5">TV APPS</h2>
        <ul className="list-unstyled list-inline">
          <li>
            <Link to="/netflix">
              <img className="nf" alt="Netflix"
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
              />
            </Link>
          </li>
          <li>
            <Link to="/hbomax">
              <img className="hb" alt="HBO Max"
                src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
              />
            </Link>
          </li>
          <li>
            <Link to="/hulu">
              <img className="hu" alt="Hulu"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
              />
            </Link>
          </li>
          <li>
            <Link to="/prime">
              <img className="pr" alt="Amazon Prime Video"
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
              />
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  )
}

function Child() {
  let {id} = useParams();
  return (
    <div style={{ padding: 20 }}>
      <h3>You Selected:<span>{id}</span></h3>
    </div>
  );
}