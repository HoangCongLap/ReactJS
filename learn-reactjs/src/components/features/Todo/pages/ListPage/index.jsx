import React, { useEffect, useMemo, useState } from 'react';
import TodoList from '../../TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import queryString from 'query-string';
import TodoForm from '../../TodoForm';
import { Value } from 'sass';

import { makeStyles } from '@material-ui/core/styles';
// import Button from '@mui/material/Button';

// import { makeStyles } from '@mui/styles';

import Button from '@mui/material/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

ListPage.prototype = {};

function ListPage(props) {
  const classes = useStyles();
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

  const handTodoFormSubmit = (value) => {
    console.log('Form submit: ', Value);
    const newTodo = {
      id: todoList.length + 1,
      title: value.title,
      status: 'new',
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onsubmit={handTodoFormSubmit} />

      <h3>Todo List</h3>
      {/* <TodoList todoList={todoList} onTodoClick={handleTodoList} /> */}
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoList} />
      <div>
        <Button className={classes.root} onClick={handleShowAllClik}>
          Show All
        </Button>
        <Button className={classes.root} onClick={handleShowCompletedClik}>
          Show Completed
        </Button>
        <Button className={classes.root} onClick={handleShowNewClik}>
          Show New
        </Button>
      </div>
    </div>
  );
}
export default ListPage;
