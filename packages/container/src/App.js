import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SharedContextProvider from "./contexts/SharedContextProvider";

const Dashboard = lazy(() => import("dashboard/Dashboard"));
const Users = lazy(() => import("users/Users"));

const LoadingScreen = () => {
  return <h1>Loading...</h1>;
};

const App = () => {
  return (
    <SharedContextProvider>
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={{}} />
          </Routes>
        </Suspense>
      </Layout>
    </SharedContextProvider>
  );
};

export default App;
