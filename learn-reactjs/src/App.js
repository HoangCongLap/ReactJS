import React from 'react';
import { Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';

import AlbumFeature from './features/Album/components';
import TodoFeature from './components/TodoFeature';
import NotFound from './components/NotFound';
import { useEffect } from 'react';
import productApi from './api/productApi';

function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const productList = await productApi.getAll();
  //     console.log(productList);
  //   };
  //   fetchProducts();
  // }, []);
  return (
    <div className="App">
      Home Page
      <p>
        <Link to="/todos">todos</Link>
      </p>
      <p>
        <Link to="/albums">albums</Link>
      </p>
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums">albums</NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact />

        {/* <Route path="/">
          <TodoFeature />
        </Route> */}
        <Route path="/todos">
          <TodoFeature />
        </Route>
        <Route path="/albums">
          <AlbumFeature />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
