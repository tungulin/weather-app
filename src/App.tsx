import React, { FC } from 'react';
import Home from "./pages/Home"
import Sidebar from 'components/Sidebar';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import WrapApp from 'components/WrapApp';
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store } from 'store';

import 'styles/inputs.scss'
import 'styles/variables.scss'
import 'styles/globals.scss'


const App: FC = () => {
  return (
    <Provider store={store}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <WrapApp>
        <Navbar />
        <Home />
        <Sidebar />
        <Footer />
      </WrapApp>
    </Provider>
  )
}

export default App;
