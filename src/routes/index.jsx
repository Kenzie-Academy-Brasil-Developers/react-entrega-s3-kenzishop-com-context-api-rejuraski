import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
