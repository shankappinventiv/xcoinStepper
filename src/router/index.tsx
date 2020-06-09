import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "../../src/screens/signUp/index"
import Login from "../screens/login";
import Setting from "../components/Setting/Setting";

/**
 * Root router component
 * @param props parameter for Router function
 */
const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props: object) => (
            <Suspense
              fallback={
                <div>
                  <span>Loading...</span>
                </div>
              }
            >
              <Login />
               
            </Suspense>
          )}
        />
        <Route
          exact
          path="/signUp"
          render={(props: object) => (
            <Suspense
              fallback={
                <div>
                  <span>Loading...</span>
                </div>
              }
            >
              <SignUp />
               
            </Suspense>
          )}
        />
         <Route
          exact
          path="/buy"
          render={(props: object) => (
            <Suspense
              fallback={
                <div>
                  <span>Loading...</span>
                </div>
              }
            >
              <Setting />
               
            </Suspense>
          )}
        />
        
        <Route
          component={(props: object) => (
            <Suspense
              fallback={
                <div>
                  <span>Loading...</span>
                </div>
              }
            >
                <div>Not found</div>
            </Suspense>
          )}
        />
        
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
