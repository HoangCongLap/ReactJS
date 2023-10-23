import React from 'react';
import { Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';

import AlbumFeature from './features/Album/components';
import TodoFeature from './components/TodoFeature';
import NotFound from './components/NotFound';
import { useEffect } from 'react';
import productApi from './api/productApi';
import './App.css';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      // const productList = await productApi.getAll();
      console.log(productList);
    };
    fetchProducts();
  }, []);

  // const color = 'blue';
  // const backgroundUrl =
  //   'https://images.pexels.com/photos/1738675/pexels-photo-1738675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  return (
    // <div className="App" style={{ color, backgroundImage: `url("${backgroundUrl}")` }}>

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
