import React, { Suspense, useState } from "react";
import {  Route, Routes } from "react-router-dom";
import MainApp from './MainApp';

import "./index.scss";

import Loader from "./components/Loader";

const RemoteMicrofrontend1App = React.lazy(() => import("microfrontend1/Microfrontend1App"));
const RemoteMicrofrontend2App = React.lazy(() => import("microfrontend2/Microfrontend2App"));

const App = () => {
  const [ loading, setLoading ] = useState(false);
  return <div>
  <Suspense fallback={<Loader />}>
      <h1>Main App</h1>
      <MainApp />
      <RemoteMicrofrontend1App />
      <RemoteMicrofrontend2App />
 </Suspense>
 </div>
};

export default App