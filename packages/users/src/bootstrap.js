import React, { lazy, Suspense, StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

const App = lazy(() => import("container/App"));

const LoadingScreen = () => {
  return <h1>Loading...</h1>;
};

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
