import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
function App() {
  return (
    <div>
      <Routes>
        {routes &&
          routes.map((route) => {
            return (
              <Route
                path={route.path}
                element={<route.component/>}
              />
            );
          })}
      </Routes>
    </div>
  );
}

export default App;
