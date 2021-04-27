import React, { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/Signup"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
