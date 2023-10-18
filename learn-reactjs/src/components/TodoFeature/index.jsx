import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DetailPage from '../features/Todo/pages/DetailPage';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import NotFound from '../NotFound';
import ListPage from '../features/Todo/pages/ListPage';

TodoFeature.prototype = {};

function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.path}>
          {/* <Route path="/todos"> */}
          <ListPage />
        </Route>
        <Route path={`${match.path}/:todoId`}>
          <DetailPage />
        </Route>
        {/* <Route path="/todos/:todoId" exact> */}
        {/* <DetailPage /> */}
        {/* </Route> */}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
export default TodoFeature;
