import { Route, Switch, BrowserRouter} from "react-router-dom";
import MainPage from '../Pages/MainPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ MainPage } />
      </Switch>      
    </BrowserRouter>
  )
}

export default Routes;
