import { Switch, Route } from 'wouter';
import {
  Home,
  Signin,
  ShoppingCart,
  MyOrders,
  NotFound,
  MyAccount
} from '../pages';
import { MyOrder } from '../pages/my_order';

export const AppRouter = () => {
  return (
    <Switch>
      <Route path='/' component={Home}/>
      <Route path="/signin" component={Signin} />
      <Route path='/account' component={MyAccount} />
      <Route path='/cart' component={ShoppingCart} />
      <Route path='/orders/all' component={MyOrders} />
      <Route path="/orders/:id">
        {(params) => <MyOrder {...params} />}
      </Route>
      <Route path='/:category'>
        {params => <Home {...params} />}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
};
