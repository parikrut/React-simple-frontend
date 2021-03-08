import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/menu/MenuContainer";
import { routeMap } from "./routes/routeMap";
function App() {
  return (
    <Router>
      <Menu />
      <Suspense fallback={<p>loading</p>}>
        <Switch>
          {routeMap.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
