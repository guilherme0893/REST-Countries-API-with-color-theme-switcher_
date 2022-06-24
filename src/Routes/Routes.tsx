import { Route, Switch, BrowserRouter} from "react-router-dom";
import MainPage from '../Pages/MainPage';
import NotFound from '../Pages/NotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ MainPage } />
        <Route path="/*" component={ NotFound } />
      </Switch>      
    </BrowserRouter>
  )
}

export default Routes;
