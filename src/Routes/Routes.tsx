import { Route, Switch } from "react-router-dom";
import MainPage from '../Components/MainPage';

const Routes = () => {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={ MainPage } />
        </Switch>      
    </div>
  )
}

export default Routes;