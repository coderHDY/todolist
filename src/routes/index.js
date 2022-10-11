import Me from '../pages/Me';
import TodoList from '../pages/TodoList';
import Err from '../pages/Error/index.jsx';
import { Navigate } from "react-router-dom";


const routerMap = [
  {
    path: "/me",
    element: <Me />,
    replace: true,
  },
  {
    path: "/todolist",
    element: <TodoList />,
    replace: true,
  },
  {
    path: "/",
    element: <Navigate to="/todolist" />,
    replace: true,
  },
  {
    path: "*",
    element: <Err to="/todolist" />,
  },
];

export default routerMap;
