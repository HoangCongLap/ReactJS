import React, { useEffect, useMemo, useState } from 'react';
import TodoList from '../../TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import queryString from 'query-string';

ListPage.prototype = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },

    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'completed',
    },
  ];
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [fifteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    // console.log(params.status);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || 'all');
  }, [location.search]);

  const handleTodoList = (todo, idx) => {
    const newTodoList = [...todoList];

    console.log(todo, idx);

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    // newTodoList[idx]=newTodo;
    setTodoList(newTodoList);
  };
  const handleShowAllClik = () => {
    // setFilteredStatus('all');
    const QueryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(QueryParams),
    });
  };
  const handleShowCompletedClik = () => {
    // setFilteredStatus('completed');
    const QueryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(QueryParams),
    });
  };
  const handleShowNewClik = () => {
    // setFilteredStatus('new');
    const QueryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(QueryParams),
    });
  };
  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => fifteredStatus === 'all' || fifteredStatus === todo.status);
  }, [todoList, fifteredStatus]);

  return (
    <div>
      <h3>Todo List</h3>
      {/* <TodoList todoList={todoList} onTodoClick={handleTodoList} /> */}
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoList} />
      <div>
        <button onClick={handleShowAllClik}>Show All</button>
        <button onClick={handleShowCompletedClik}>Show Completed</button>
        <button onClick={handleShowNewClik}>Show New</button>
      </div>
    </div>
  );
}
export default ListPage;
