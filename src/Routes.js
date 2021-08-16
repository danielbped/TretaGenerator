import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Name from './Pages/Name';
import Preferencia from './Pages/Preferencia';
import Comida from './Pages/Comida';
import Animal from './Pages/Animal';
import Manchete from './Pages/Manchete';

function Routes () {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Name } />
      <Route exact path="/preferencia" component={ Preferencia } />
      <Route exact path="/comida" component={ Comida } />
      <Route exact path="/animal" component={ Animal } />
      <Route exact path="/manchete" component={ Manchete } />
    </Switch>
  </BrowserRouter>
  )
}

export default Routes;