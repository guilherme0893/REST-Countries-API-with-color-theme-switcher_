import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import DetailPages from '../Pages/DetailsPage';
import NotFound from '../Pages/NotFound';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/:id" component={ DetailPages } />        
        <Route path="/*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
