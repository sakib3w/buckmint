import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { routers } from "./_routers";

const AppContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Suspense
        fallback={
          <div className="loading">
            <div className="container_loading">
              <div className="square one"></div>
              <div className="square two"></div>
              <div className="square three"></div>
              <div className="square two"></div>
              <div className="square three"></div>
              <div className="square four"></div>
              <div className="square three"></div>
              <div className="square four"></div>
              <div className="square five"></div>
            </div>
          </div>
        }
      >
        <Routes>
          <>
            {routers?.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.component />}
                  />
                )
              );
            })}
          </>
        </Routes>
      </Suspense>
    </>
  );
};

export default AppContent;
