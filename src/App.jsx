// import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { PersistGate } from 'redux-persist/es/integration/react'

import ProtectedRoute from "./components/routes/Protected.components.routes"
import PublicRoute from "./components/routes/Public.components.routes"
import './App.css';
import routes from './data/routes.data';
import { AnimatedSwitch } from 'react-router-transition';
import { maintheme, mapPageStyles } from "./styles/maintheme.styles"
import bootstrap from "bootstrap-css-only"
import { Provider } from 'react-redux';
import configureStore from './store/configurations/configureStore-main'


const { persistor, store } = configureStore()

const RenderRoute = (route) => {
  if (route.protected) {
    return <ProtectedRoute {...route} />
  } else {
    return <PublicRoute {...route} />
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<h1>loading</h1>}
        persistor={persistor}>
        <Router>
          <AnimatedSwitch
            atEnter={maintheme.pageEnter}
            atLeave={maintheme.pageLeave}
            atActive={maintheme.pageActive}
            mapStyles={mapPageStyles}
            className="switch-wrapper"
          >
            {
              routes.map(RenderRoute)
            }
          </AnimatedSwitch>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App;
