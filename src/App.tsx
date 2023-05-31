import React, { FC } from 'react';
import Home from "./pages/Home"
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import WrapApp from './components/WrapApp';
import { Provider } from "react-redux";

import './styles/variables.scss'
import './styles/globals.scss'
import { store } from './store';


const App: FC = () => {
  return (
    <Provider store={store}>
      <WrapApp>
        <Navbar />
        <Home />
        <Sidebar />
      </WrapApp>
    </Provider>
  )
}

export default App;
