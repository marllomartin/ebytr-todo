import GlobalStyles from "./styles/GlobalStyles";
import React from 'react';

import { TaskContextProvider } from "./context/TaskContext";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <TaskContextProvider>
        <Layout />
      </TaskContextProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
