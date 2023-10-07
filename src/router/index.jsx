import { Switch, Route } from 'wouter';
import {
  Home,
  Signin,
  MyOrder,
  MyOrders,
  NotFound,
  MyAccount
} from '../pages';

export const AppRouter = () => {
  return (
    <Switch>
      <Route path='/' component={Home}/>
      <Route path="/signin" component={Signin} />
      <Route path='/account' component={MyAccount} />
      <Route path='/order' component={MyOrder} />
      <Route path='/orders/all' component={MyOrders} />
      <Route component={NotFound} />
    </Switch>
  );
};
