import Me from '../pages/Me';
import TodoList from '../pages/TodoList';
import Err from '../pages/Error/index.jsx';


const routerMap = [
  {
    path: "/me",
    element: <Me />,
  },
  {
    path: "/todolist",
    element: <TodoList />,
  },
  {
    path: "/",
    element: <TodoList />,
  },
  {
    path: "*",
    element: <Err to="/todolist" />,
  },
];

export default routerMap;
