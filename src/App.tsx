import React from "react";
import { Provider } from "react-redux";
// import { toast } from "react-toastify";
import Store from "./store";

import Router from "./router";

const App: React.FC = () => {
  return (
    <div className="root-container">
      <Provider store={Store}>
        <Router />
      </Provider>
    </div>
  );
};

export default App;
