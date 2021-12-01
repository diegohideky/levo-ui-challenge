import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { OrganizationPicker, TestReportDetails, TestRerportsList } from './pages';
import { SideBar } from './components';
import { GlobalProvider } from './contexts/GlobalContext';

import styles from './App.module.css';

type AppRouteProps = any;

const AppRoute: React.FC<AppRouteProps> = (props) => (
  <Route {...props}>
    <GlobalProvider>
      <SideBar />
      {props.children}
    </GlobalProvider>
  </Route>
);

export const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <AppRoute exact path="/">
            <OrganizationPicker />
          </AppRoute>
          <AppRoute exact path="/organization/:orgId/reports">
            <TestRerportsList />
          </AppRoute>
          <AppRoute exact path="/organization/:orgId/reports/:id/details">
            <TestReportDetails />
          </AppRoute>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
